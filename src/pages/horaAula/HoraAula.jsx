import { Box, Container, Paper, Typography, ThemeProvider, TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Button, TextField, IconButton, DialogTitle, DialogContent, Dialog, DialogContentText, InputLabel, Select, FormControl, DialogActions, Snackbar, Alert, Autocomplete } from "@mui/material"
import SidebarSee from "../../components/Sidebar/Sidebar"
import * as React from 'react'
import { orange } from "@mui/material/colors"
import { useState } from "react"
import { Search } from "@mui/icons-material"
import { MenuItem } from "react-pro-sidebar"

const HoraAula = () => {

    const [open, setOpen] = useState(false)
    const [openHoraAula, setOpenHoraAula] = useState(false)
    const [severity, setSeverity] = useState('')
    const [message, setMessage] = useState('')

    const handleClose = async () => {
        setOpen(false)
        setOpenHoraAula(false)
    }

    const getCarros = async () => {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    const openCriarFinanceiro = async () => {
        setOpenHoraAula(true)
    }

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
                                id='Veículo'
                                />
                                <TextField type='text' label='Quantidade' sx={{ mt: 2 }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                                <TextField type='text' label='Valor' sx={{ mt: 2 }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                                <FormControl margin='normal' >
                                    <InputLabel id="demo-simple-select-label">Tipo de Pagamento</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={''}
                                        label='Tipo de depagamento'

                                    >
                                        <MenuItem value={'pix'} >PIX</MenuItem>
                                        <MenuItem value={'dinheiro'}>DINHEIRO</MenuItem>
                                        <MenuItem value={'boleto'}>BOLETO</MenuItem>
                                        <MenuItem value={'cheque'}>CHEQUE</MenuItem>
                                        <MenuItem value={'cartao Crédito'}>CARTÃO CRÉDITO</MenuItem>
                                        <MenuItem value={'cartao Débito'}>CARTÃO DÉBITO</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField type='date' label='Data Realização Pagamento' sx={{ mt: 2 }}
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
                            <Button onClick={handleClose} color='success' autoFocus>Criar</Button>
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