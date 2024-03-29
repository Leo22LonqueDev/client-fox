import { Box, Container, Paper, Typography, ThemeProvider, TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Button, TextField, IconButton, DialogTitle, DialogContent, Dialog, DialogContentText, InputLabel, Select, FormControl, DialogActions, Snackbar, Alert, Autocomplete } from "@mui/material"
import SidebarSee from "../../components/Sidebar/Sidebar"
import * as React from 'react'
import { orange } from "@mui/material/colors"
import { useState } from "react"
import { Search } from "@mui/icons-material"
import { MenuItem } from "react-pro-sidebar"

const Orcamento = () => {

    const [open, setOpen] = useState(false)
    const [openOrcamento, setOpenOrcamento] = useState(false)
    const [severity, setSeverity] = useState('')
    const [message, setMessage] = useState('')
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [situacaoinicial, setSituacaoInicial] = useState('')
    const [categoria, setCategoria] = useState('')
    const [dia, setDia] = useState('')
    const [situacaofinal, setSituacaoFinal] = useState('')

    const handleOpenOrcamento = async () => {
        setOpenOrcamento(true)
    }

    const handleClose = async () => {
        setOpenOrcamento(false)
    }



    const handleCriarOrcamento = async () => {
        try {

            if ((nome === '') || (telefone === '') || (situacaoinicial === '') || (categoria === '') || (dia === '') || (situacaofinal === '')) {
                setOpen(true)
                setSeverity('warning')
                setMessage('Dados faltando, favor inserir todos os campos!')
                return
            }
        } catch (error) {
        }

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
                            Orçamento
                        </Typography>
                        <Button type='Button' variant='contained' color='info' onClick={handleOpenOrcamento} >Adicionar Orçamento </Button>

                    </Box>
                    <Dialog
                        open={openOrcamento}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"

                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Informe o Veículo"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" sx={{ display: 'flex', flexDirection: 'column' }}>
                                <TextField type='text' label='Nome' onBlur={(e) => { setNome(e.target.value) }} sx={{ mt: 2 }} InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                    }
                                }} />
                                <TextField type='number' label='Telefone' onBlur={(e) => { setTelefone(e.target.value) }} sx={{ mt: 2 }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                                <TextField type='text' label='Situação inicial' onBlur={(e) => { setSituacaoInicial(e.target.value) }} sx={{ mt: 2 }}

                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                                <TextField type='text' label='Categoria' onBlur={(e) => { setCategoria(e.target.value) }} sx={{ mt: 2 }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                                <TextField type='text' label='Dia' onBlur={(e) => { setDia(e.target.value) }} sx={{ mt: 2 }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                                <TextField type='text' label='Situação final' onBlur={(e) => { setSituacaoFinal(e.target.value) }} sx={{ mt: 2 }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color='error'>Fechar</Button>
                            <Button onClick={handleCriarOrcamento} color='success' autoFocus>Criar</Button>
                        </DialogActions>
                    </Dialog>

                </Container>
            </SidebarSee>
        </>
    )
}

export default Orcamento