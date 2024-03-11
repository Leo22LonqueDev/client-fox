import { Alert, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import SidebarSee from "../../components/Sidebar/Sidebar"
import { useEffect, useState } from "react"
import { Search } from "@mui/icons-material"
import { orange } from "@mui/material/colors"
import axios from "axios"
import EditarVeiculos from "./modais/EditarVeiculos"


const Veiculos = () => {

    const [openAdicionarVeiculo, setOpenAdicionarVeiculo] = useState(false)
    const [modelo, setModelo] = useState("")
    const [placa, setPlaca] = useState("")
    const [anoDeFabricacao, setAnoDeFabricacao] = useState("")
    const [cor, setCor] = useState("")
    const [marca, setMarca] = useState("")
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState('')
    const [message, setMessage] = useState('')
    const [carro, setCarro] = useState([])
    const [flushHook, setFlushHook] = useState(false)


    const handleClickAddVeiculo = async () => {
        setOpenAdicionarVeiculo(true)
    }

    const handleClose = async () => {
        setOpenAdicionarVeiculo(false)
    }

    const handleCriarVeiculo = async () => {
        try {
            if ((modelo === '') || (placa === '') || (anoDeFabricacao === '') || (cor === '') || (marca === '')) {
                setOpen(true)
                setSeverity('warning')
                setMessage('Dados faltando, favor inserir todos os campos!')
                return
            }
            const criarVeiculo = await axios.post(`${process.env.REACT_APP_BACKEND}/veiculos/createVeiculos`, {
                modelo: modelo,
                placa: placa,
                anoDeFabricacao: anoDeFabricacao,
                cor: cor,
                marca: marca,
            })
            console.log(criarVeiculo);
            setSeverity('success')
            setMessage('Veículo adicionado com sucesso!')
            setModelo('')
            setPlaca('')
            setAnoDeFabricacao('')
            setCor('')
            setMarca('')
            setFlushHook(true)
            setOpenAdicionarVeiculo(false)
            return
        } catch (error) {
            console.log(error)
        }
    }

    const fetchData = async () => {
        const result = await axios.get(`${process.env.REACT_APP_BACKEND}/veiculos/getVeiculos`)
        setCarro(result.data)
        console.log(result)
    }

    const handleFilter = async (event) => {
        try {
            event.preventDefault()
            if (modelo.length > 2) {
                const filter = await axios.get(`${process.env.REACT_APP_BACKEND}/veiculos/filter?modelo=${modelo}`, {})
                console.log(filter.data)
                setCarro(filter.data.filter)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
        setFlushHook(false)
    }, [flushHook])

    return (
        <>
            <SidebarSee>
                <Container >
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
                            Veículos
                        </Typography>
                        <Button type='button' variant='contained' color='info' onClick={handleClickAddVeiculo} >Adicionar Veículo</Button>
                    </Box>
                    <Dialog
                        open={openAdicionarVeiculo}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"

                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Informe o Veículo"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" sx={{ display: 'flex', flexDirection: 'column' }}>
                                <TextField type='text' label='Modelo' onBlur={(e) => { setModelo(e.target.value) }} sx={{ mt: 2 }} InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                    }
                                }} />
                                <TextField type='email' label='Placa' onBlur={(e) => { setPlaca(e.target.value) }} sx={{ mt: 2 }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                                <TextField type='number' label='Ano de Fabricação' onBlur={(e) => { setAnoDeFabricacao(e.target.value) }} sx={{ mt: 2 }}

                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                                <TextField type='text' label='Cor' onBlur={(e) => { setCor(e.target.value) }} sx={{ mt: 2 }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                                <TextField type='text' label='Marca' onBlur={(e) => { setMarca(e.target.value) }} sx={{ mt: 2 }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color='error'>Fechar</Button>
                            <Button onClick={handleCriarVeiculo} color='success' autoFocus>Criar</Button>
                        </DialogActions>
                    </Dialog>
                    <Snackbar open={open} autoHideDuration={5000} onClose={() => { setOpen(false) }}>
                        <Alert severity={severity} variant='filled'>
                            {message}
                        </Alert>
                    </Snackbar>
                    <Box sx={{ mt: 2 }}>
                        <form action="">
                            <TextField size="small" type='text' variant='outlined' label='Buscar' onChange={(e) => { setModelo(e.target.value) }}
                                InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                    },
                                    startAdornment: <IconButton onClick={handleFilter} type="submit" size='small' ><Search /></IconButton>
                                }}
                                fullWidth />
                        </form>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <TableContainer component={Paper} elevation={3} sx={{ borderRadius: '10px' }}>
                            <Table aria-label="simple table" size='small' >
                                <TableHead sx={{ bgcolor: orange[700] }}>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Modelo</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Placa</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Ano de Fabricação</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Cor</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Marca</TableCell>
                                        <TableCell align='center' sx={{ color: 'white', fontSize: '15px' }}>Detalhes</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {carro.map((item) => (
                                        <TableRow
                                            key={item._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell></TableCell>
                                            <TableCell>{item.modelo}</TableCell>
                                            <TableCell>{item.placa}</TableCell>
                                            <TableCell>{item.anoDeFabricacao}</TableCell>
                                            <TableCell>{item.cor}</TableCell>
                                            <TableCell>{item.marca}</TableCell>
                                            <TableCell align='center'>{
                                                <EditarVeiculos
                                                    id={item._id}
                                                    modeloCarro={item.modelo}
                                                    placaCarro={item.placa}
                                                    anoDeFabricacaoCarro={item.anoDeFabricacao}
                                                    corCarro={item.cor}
                                                    marcaCarro={item.marca}
                                                    setFlushHook={setFlushHook} />

                                            }</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Container>
            </SidebarSee>
        </>
    )
}

export default Veiculos