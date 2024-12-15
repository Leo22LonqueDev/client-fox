import { Box, Container, Paper, Typography, TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Button, TextField, DialogTitle, DialogContent, Dialog, DialogContentText, DialogActions, Snackbar, Alert, Autocomplete, Chip } from "@mui/material"
import SidebarSee from "../../components/Sidebar/Sidebar"
import * as React from 'react'
import { orange } from "@mui/material/colors"
import { Clear } from "@mui/icons-material"
import axios from "axios"
import { useEffect, useState } from "react"
import moment from "moment"
import QuantidadeHoraAula from "./components/QuantidadeHoraAula"
import QuantidadeHoraAulaExtra from "./components/QuantidadeHoraAulaExtra"
import { filterHoraAula } from "../../_services/horaAula.service"

const HoraAula = () => {

    const [open, setOpen] = useState(false)
    const [openHoraAula, setOpenHoraAula] = useState(false)
    const [flushHook, setFlushHook] = useState(false)
    const [severity, setSeverity] = useState('')
    const [message, setMessage] = useState('')

    const [carros, setCarros] = useState([])
    const [usuarios, setUsuarios] = useState([])
    const [horaAula, setHoraAula] = useState([])

    const [modeloVeiculo, setModeloVeiculo] = useState('')
    const [placa, setPlaca] = useState('')
    const [instrutor, setInstrutor] = useState('')
    const [data, setData] = useState('')
    const [mes, setMes] = useState('')

    const handleClose = async () => {
        setOpen(false)
        setOpenHoraAula(false)
    }

    const handleCreateHoraAula = async () => {
        try {
            if ((modeloVeiculo === '') || (instrutor === '') || (data === '')) {
                setOpen(true)
                setMessage('Informe todos os dados para prosseguir')
                setSeverity('warning')
                return
            }
            const create = await axios.post(`${process.env.REACT_APP_BACKEND}/horaAula/createHoraAula`, {
                modeloVeiculo,
                placa,
                instrutor,
                data
            })
            // console.log(create);
            setOpen(true)
            setSeverity('success')
            setMessage('Hora Aula criada com sucesso!')
            setFlushHook(true)
            setModeloVeiculo('')
            setPlaca('')
            setInstrutor('')
            setData('')
            setOpenHoraAula(false)
            return
        } catch (error) {
            console.log(error);
        }
    }

    const getCarrosEUsuarios = async () => {
        try {
            const resultCarros = await axios.get(`${process.env.REACT_APP_BACKEND}/veiculos/getVeiculos`)
            setCarros(resultCarros.data)
            // console.log(resultCarros.data);
            const resultPessoas = await axios.get(`${process.env.REACT_APP_BACKEND}/users`)
            setUsuarios(resultPessoas.data.users)
            // console.log(resultPessoas.data.users);
        } catch (error) {
            console.log(error);
        }
    }

    // const fetchData = async () => {
    //     try {
    //         const find = await getAllHoraAula()
    //         console.log(find);

    //         const sortedData = find.slice().sort((a, b) => {
    //             const mesA = moment(a.data, 'YYYY-MM-DD');
    //             const mesB = moment(b.data, 'YYYY-MM-DD');

    //             if (mesA.isBefore(mesB)) {
    //                 return 1;
    //             } else if (mesA.isAfter(mesB)) {
    //                 return -1;
    //             } else {
    //                 return 0;
    //             }
    //         });
    //         // console.log(sortedData);
    //         setHoraAula(sortedData)
    //         return
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const handleFilter = async () => {
        try {
            const filter = await filterHoraAula(
                modeloVeiculo,
                instrutor,
                mes
            )
            console.log(filter)
            setHoraAula(filter)
        } catch (error) {
            console.log(error);
        }
    }

    const openCriarFinanceiro = async () => {
        setOpenHoraAula(true)
    }

    useEffect(() => {
        handleFilter()
        getCarrosEUsuarios()
        setFlushHook(false)
    }, [flushHook, modeloVeiculo, instrutor, mes])

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
                        sx={{ mt: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                    >
                        <TextField size="small" type='text' variant='outlined' label='Instrutor' value={instrutor} onChange={(e) => { setInstrutor(e.target.value) }}
                            InputProps={{
                                style: {
                                    borderRadius: '10px',
                                }
                            }}
                            fullWidth
                            sx={{ mr: 2 }}
                        />
                        <TextField size="small" type='text' variant='outlined' label='Veículo' value={modeloVeiculo} onChange={(e) => { setModeloVeiculo(e.target.value) }}
                            InputProps={{
                                style: {
                                    borderRadius: '10px',
                                },
                            }}
                            fullWidth
                            sx={{ mr: 2 }}
                        />
                        <TextField size="small" type='month' variant='outlined' label='Mês' value={mes} onChange={(e) => { setMes(e.target.value) }}
                            InputLabelProps={{
                                shrink: true
                            }}
                            InputProps={{
                                style: {
                                    borderRadius: '10px',
                                },
                            }}
                            fullWidth
                            sx={{ mr: 2 }}
                        />
                        <Button variant='contained' onClick={() => {
                            setInstrutor('')
                            setModeloVeiculo('')
                            setMes('')
                            setFlushHook(true)

                        }}
                            sx={{ borderRadius: '10px' }}><Clear /></Button>
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
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Total de aulas</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        horaAula.map((item) => {
                                            return (
                                                <TableRow key={item._id}>
                                                    <TableCell>{item.tipo}</TableCell>
                                                    <TableCell>{item.veiculo}</TableCell>
                                                    <TableCell>{item.instrutor}</TableCell>
                                                    <TableCell>{moment(item.data).format('DD/MM/YYYY')}</TableCell>
                                                    <TableCell>{moment(item.mes).format('MM/YYYY')}</TableCell>

                                                    <TableCell>
                                                        <QuantidadeHoraAula
                                                            item={item}
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <QuantidadeHoraAulaExtra
                                                            item={item}
                                                        />

                                                    </TableCell>
                                                    <TableCell>
                                                        <Chip label={parseInt(item.quantidadeAulas) + parseInt(item.quantidadeAulasExtra)} /> 

                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Container>
            </SidebarSee >
        </>
    )
}

export default HoraAula