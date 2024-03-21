import { Box, Container, Paper, Typography, TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Button, TextField, IconButton, DialogTitle, DialogContent, Dialog, DialogContentText, DialogActions, Snackbar, Alert, Autocomplete } from "@mui/material"
import SidebarSee from "../../components/Sidebar/Sidebar"
import * as React from 'react'
import { orange } from "@mui/material/colors"
import { useState } from "react"
import { Search } from "@mui/icons-material"
import axios from "axios"
import { useEffect } from "react"

const HoraAula = () => {

    const [open, setOpen] = useState(false)
    const [openHoraAula, setOpenHoraAula] = useState(false)
    const [flushHook, setFlushHook] = useState(false)
    const [severity, setSeverity] = useState('')
    const [message, setMessage] = useState('')

    const [carros, setCarros] = useState([])
    const [usuarios, setUsuarios] = useState([])

    const [modeloVeiculo, setModeloVeiculo] = useState('')
    const [placa, setPlaca] = useState('')
    const [instrutor, setInstrutor] = useState('')
    // const [valorHoraAula, setValorHoraAula] = useState('')
    // const [valorHoraAulaExtra, setValorHoraAulaExtra] = useState('')
    const [data, setData] = useState('')
    const [mes, setMes] = useState('')

    const handleClose = async () => {
        setOpen(false)
        setOpenHoraAula(false)
    }

    const handleCreateHoraAula = async () => {
        try {
            if ((modeloVeiculo === '') || (placa === '') || (instrutor === '') || (data === '') || (mes === '')) {
                setOpen(true)
                setMessage('Informe todos os dados para prosseguir')
                setSeverity('warning')
                return
            }
            const create = axios.post(`${process.env.REACT_APP_BACKEND}/horaAula/createHoraAula`, {
                modeloVeiculo,
                placa,
                instrutor,
                data,
                mes
            })
            console.log(create);
            setOpen(true)
            setSeverity('success')
            setMessage('Hora Aula criada com sucesso!')
            setOpenHoraAula(false)
        } catch (error) {
            console.log(error);
        }
    }

    const getCarrosEUsuarios = async () => {
        try {
            const resultCarros = await axios.get(`${process.env.REACT_APP_BACKEND}/veiculos/getVeiculos`)
            setCarros(resultCarros.data)
            console.log(resultCarros.data);
            const resultPessoas = await axios.get(`${process.env.REACT_APP_BACKEND}/users`)
            setUsuarios(resultPessoas.data.users)
            console.log(resultPessoas.data.users);
        } catch (error) {
            console.log(error);
        }
    }

    const openCriarFinanceiro = async () => {
        setOpenHoraAula(true)
    }

    useEffect(() => {
        getCarrosEUsuarios()
        setFlushHook(false)
    }, [flushHook])

    return (
        <>
            <SidebarSee>
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mt: 2,
                            mb: 10
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 'bold',
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '30%',
                                    height: '2px',
                                    bottom: 0,
                                    left: '0%',
                                    backgroundColor: 'currentColor',
                                    transition: 'width 0.3s ease-in-out, left 0.3s ease-in-out',
                                },
                                '&:hover::after': {
                                    width: '100%',
                                    left: '0%',
                                },
                            }}
                        >
                            Hora Aula
                        </Typography>
                        <Button type='Button' variant='contained' color='info' onClick={openCriarFinanceiro} >Adicionar hora Aula</Button>
                    </Box>
                    <Dialog
                        open={openHoraAula}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Informe os dados da Hora-Aula"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Autocomplete
                                    disablePortal
                                    id="carros-auto-complete"
                                    options={carros}
                                    onChange={(event, item) => {
                                        setModeloVeiculo(item.modelo);
                                        setPlaca(item.placa)
                                    }}
                                    getOptionLabel={carros => carros.modelo}
                                    sx={{ mt: 2 }}
                                    renderInput={(params) => <TextField {...params} label='Modelo/Veículo' />}
                                />
                                {/* <Autocomplete
                                    disablePortal
                                    id="nome-auto-complete"
                                    options={carros}
                                    onChange={(event, item) => {
                                        setPlaca(item.placa);
                                    }}
                                    getOptionLabel={carros => carros.placa}
                                    sx={{ mt: 2 }}
                                    renderInput={(params) => <TextField {...params} label='Placa' />}
                                /> */}
                                <Autocomplete
                                    disablePortal
                                    id="nome-auto-complete"
                                    options={usuarios}
                                    onChange={(event, item) => {
                                        setInstrutor(item.nome);
                                    }}
                                    getOptionLabel={usuarios => usuarios.nome}
                                    sx={{ mt: 2 }}
                                    renderInput={(params) => <TextField {...params} label='Nome do Instrutor' />}
                                />
                                <TextField type='date' label='Data' onBlur={(e) => { setData(e.target.value) }} sx={{ mt: 2 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                                <TextField type='month' label='Mês' onBlur={(e) => { setMes(e.target.value) }} sx={{ mt: 2 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color='error'>Fechar</Button>
                            <Button onClick={handleCreateHoraAula} color='success' autoFocus>Criar</Button>
                        </DialogActions>
                    </Dialog>
                    <Snackbar open={open} autoHideDuration={5000} onClose={() => { setOpen(false) }}>
                        <Alert severity={severity} variant='filled'>
                            {message}
                        </Alert>
                    </Snackbar>
                    <Box
                        sx={{ mt: 10 }}
                    >
                        <form action="">
                            <TextField size="small" type='text' variant='outlined' label='Buscar'
                                InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                    },
                                    startAdornment: <IconButton type='submit' size='small'><Search sx={{ mr: 1 }} /></IconButton>
                                }}
                                fullWidth />
                        </form>
                    </Box>
                    <Box
                        sx={{ mt: 2 }}
                    >
                        <TableContainer component={Paper} elevation={3} sx={{ borderRadius: '10px' }}>
                            <Table aria-label="simple table" size='small'>
                                <TableHead sx={{ bgcolor: orange[700] }}>
                                    <TableRow>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Veículo</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Tipo</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Instrutor</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Data</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Mês</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Aulas</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Aula Extra</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Container>
            </SidebarSee>
        </>
    )
}

export default HoraAula