import { Alert, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, FormGroup, Snackbar, TextField } from "@mui/material"
import { useState } from "react"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import axios from "axios";

const EditarUsuarios = ({ id, nomeUsuario, emailUsuario, setorUsuario, telefoneUsuario, ativoUsuario, dataAdmissaoUsuario, setFlushHook }) => {

    const [openDetails, setOpenDetails] = useState(false)
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState('')
    const [message, setMessage] = useState('')

    const [nome, setNome] = useState(nomeUsuario)
    const [email, setEmail] = useState(emailUsuario)
    const [setor, setSetor] = useState(setorUsuario)
    const [telefone, setTelefone] = useState(telefoneUsuario)
    const [ativo, setAtivo] = useState(ativoUsuario)
    const [dataAdmissao, setDataAdmissao] = useState(dataAdmissaoUsuario)
    const [cpf, setCpf] = useState('')

    const handleOpenDetails = async () => {
        setOpenDetails(true)
    }

    const handleClose = () => {
        setOpenDetails(false)
    }

    const handleUpdateUsuarios = async () => {
        try {
            if ((nome === '') || (email === '') || (dataAdmissao === '') || (setor === '')) {
                setOpen(true)
                setSeverity('warning')
                setMessage('Alguns dados obrigatorios estão faltando, favor inserir todos os campos!')
                return
            }
            const update = await axios.put(`${process.env.REACT_APP_BACKEND}/`, {
                id,
                nome,
                email,
                dataAdmissao,
                setor,
                cpf,
                telefone,
            })
            console.log(update);
            setOpen(true)
            setSeverity('success')
            setMessage('Dados atualizados com sucesso!')
            setFlushHook(true)
            setOpenDetails(false)
            return
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Button onClick={handleOpenDetails} color='inherit'><EditOutlinedIcon /></Button>
            <Dialog
                fullWidth
                open={openDetails}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ display: "flex", justifyContent: "space-around" }}
            >
                <DialogTitle id="alert-dialog-title">
                    {`Detalhes do colaborador: ${nomeUsuario}`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                            <TextField label='Nome' margin="normal" type="text" value={nome} onChange={(e) => { setNome(e.target.value) }}
                                sx={{ mr: 2 }}
                                InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                    },
                                }} />
                            <TextField label='Email' margin="normal" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }}
                                InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                    },
                                }} />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                            <TextField label='Setor' margin="normal" type="text" value={setor} onChange={(e) => { setSetor(e.target.value) }}
                                sx={{ mr: 2 }}
                                InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                    },
                                }} />
                            <TextField label='Telefone' margin="normal" type="text" value={telefone} onChange={(e) => { setTelefone(e.target.value) }}
                                InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                    },
                                }} />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                            <TextField label='Data de Admissão' margin="normal" type="date" value={dataAdmissao} onChange={(e) => { setDataAdmissao(e.target.value) }}
                                sx={{ mr: 2, width: '220px' }}
                                InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                    },
                                }} />
                            <TextField label='CPF' margin="normal" type="text" value={cpf} onChange={(e) => { setCpf(e.target.value) }}
                                InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                    },
                                }} />
                        </Box>
                        <FormGroup
                            label='Usuário Ativo?'
                        >
                            <FormControlLabel control={<Checkbox onChange={(e) => {setAtivo(e.target.checked)}} value={ativo} />} label='Ativo' />

                        </FormGroup>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error" >Fechar</Button>
                    <Button onClick={handleUpdateUsuarios} color="success" autoFocus>
                        Salvar
                    </Button>
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

export default EditarUsuarios