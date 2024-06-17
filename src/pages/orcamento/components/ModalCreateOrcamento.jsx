import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, Snackbar, TextField } from "@mui/material"
import { useState } from "react"
import { createOrcamento } from "../../../_services/orcamento.service"

const ModalCreateOrcamento = ({ setFlushHook }) => {

    const [open, setOpen] = useState(false)
    const [openOrcamento, setOpenOrcamento] = useState(false)
    const [severity, setSeverity] = useState('')
    const [message, setMessage] = useState('')
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    // const [situacaoinicial, setSituacaoInicial] = useState('')
    const [categoria, setCategoria] = useState('')
    const [dia, setDia] = useState('')

    const handleOpenOrcamento = async () => {
        setOpenOrcamento(true)
    }

    const handleClose = async () => {
        setOpenOrcamento(false)
    }

    const handleCriarOrcamento = async () => {
        try {
            if ((nome === '') || (telefone === '') || (categoria === '') || (dia === '')) {
                setOpen(true)
                setSeverity('warning')
                setMessage('Dados faltando, favor inserir todos os campos!')
                return
            }
            const orcar = await createOrcamento({
                nome,
                telefone,
                categoria,
                dia
            });
            console.log(orcar);
            setOpen(true)
            setSeverity('success')
            setMessage('Orçamento criado com sucesso!')
            setFlushHook(true)
            setNome('')
            setTelefone('')
            setCategoria('')
            setDia('')
            handleClose()
            return
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Button type='Button' variant='contained' color='info' onClick={handleOpenOrcamento} >Adicionar Orçamento </Button>
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
                        <TextField type='text' label='Nome' onChange={(e) => { setNome(e.target.value) }} sx={{ mt: 2 }} InputProps={{
                            style: {
                                borderRadius: '10px',
                            }
                        }} />
                        <TextField type='text' label='Telefone' onChange={(e) => { setTelefone(e.target.value) }} sx={{ mt: 2 }}
                            InputProps={{
                                style: {
                                    borderRadius: '10px',
                                }
                            }} />
                        <FormControl sx={{ mt: 2 }}>
                            <InputLabel>Categoria</InputLabel>
                            <Select label='Categoria' value={categoria} onChange={(e) => { setCategoria(e.target.value) }} sx={{ borderRadius: '10px' }}>
                                <MenuItem value={'Moto'}>MOTO - (A)</MenuItem>
                                <MenuItem value={'Carro'}>CARRO - (B)</MenuItem>
                                <MenuItem value={'Moto e Carro'}>MOTO E CARRO - (A/B)</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField type='date' label='Dia' onChange={(e) => { setDia(e.target.value) }} sx={{ mt: 2 }}
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
                    <Button onClick={handleCriarOrcamento} color='success' autoFocus>Criar</Button>
                </DialogActions>
            </Dialog>
            <Snackbar open={open} autoHideDuration={5000} onClose={() => { setOpen(false) }}>
                <Alert severity={severity} variant='filled'>
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default ModalCreateOrcamento