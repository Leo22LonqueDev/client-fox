import { Alert, Box, Button, Chip, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import SidebarSee from "../../components/Sidebar/Sidebar"
import { green, orange, red } from "@mui/material/colors"
import { Search } from "@mui/icons-material"
import { useEffect, useState } from "react"
import axios from "axios"
import EditarUsuarios from "./Modais/EditarUsuarios"

const Usuarios = () => {

    const [openCriarUsuario, setOpenCriarUsuario] = useState(false)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [dataAdmissao, setDataAdmissao] = useState('')
    const [setor, setSetor] = useState('')
    const [telefone, setTelefone] = useState('')
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState('')
    const [message, setMessage] = useState('')
    // const [ativo, setAtivo] = useState('')

    const [users, setUsers] = useState([])
    const [flushHook, setFlushHook] = useState(false)

    const handleClose = () => {
        setOpenCriarUsuario(false)
    }

    const handleChangeModal = async () => {
        setOpenCriarUsuario(true)
    }

    const handleCriarUsuario = async () => {
        try {
            if ((nome === '') || (email === '') || (dataAdmissao === '') || (setor === '') || (telefone === '')) {
                setOpen(true)
                setSeverity('warning')
                setMessage('Dados faltando, favor inserir todos os campos!')
                return
            }
            const criarUsuario = await axios.post(`${process.env.REACT_APP_BACKEND}/users`, {
                nome: nome,
                email: email,
                dataAdmissao: dataAdmissao,
                setor: setor,
                telefone: telefone,
            })
            console.log(criarUsuario);
            setSeverity('success')
            setMessage('Usuario criado com sucesso!')
            setNome('')
            setDataAdmissao('')
            setEmail('')
            setSetor('')
            setTelefone('')
            setFlushHook(true)
            setOpenCriarUsuario(false)
            return
        } catch (error) {
            console.log(error);
        }
    }

    const fetchData = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_BACKEND}/users`)
            setUsers(result.data.users)
            console.log(result.data.users);
            return
        } catch (error) {
            console.log(error);
        }
    }

    const handleFilter = async (event) => {
        try {
            event.preventDefault()
            if (nome.length > 2) {
                const filter = await axios.get(`${process.env.REACT_APP_BACKEND}/filter?nome=${nome}`, {})
                console.log(filter.data)
                setUsers(filter.data.filter)
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
                            Usuários
                        </Typography>
                        <Button variant='contained' color='info' onClick={handleChangeModal} >Criar Usuários</Button>
                    </Box>
                    <Dialog
                        open={openCriarUsuario}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Informe os dados do novo Usuario"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" sx={{ display: 'flex', flexDirection: 'column' }}>
                                <TextField type='text' label='Nome' onChange={(e) => { setNome(e.target.value) }} sx={{ mt: 2 }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                                <TextField type='email' label='E-mail' onChange={(e) => { setEmail(e.target.value) }} sx={{ mt: 2 }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                                <TextField type='date' label='Data de Admissão' onChange={(e) => { setDataAdmissao(e.target.value) }} sx={{ mt: 2 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                                <TextField type='text' label='Setor' onChange={(e) => { setSetor(e.target.value) }} sx={{ mt: 2 }}
                                    InputProps={{
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
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color='error'>Fechar</Button>
                            <Button onClick={handleCriarUsuario} color='success' autoFocus>Criar</Button>
                        </DialogActions>
                    </Dialog>
                    <Snackbar open={open} autoHideDuration={5000} onClose={() => { setOpen(false) }}>
                        <Alert severity={severity} variant='filled'>
                            {message}
                        </Alert>
                    </Snackbar>
                    <Box sx={{ mt: 2 }}>
                        <form action="">
                            <TextField size="small" type='text' variant='outlined' label='Buscar' onChange={(e) => {setNome(e.target.value)}}
                                InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                    },
                                    startAdornment: <IconButton onClick={handleFilter} type='submit' size='small'><Search sx={{ mr: 1 }} /></IconButton>
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
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Nome</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>E-mail</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Setor</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Telefone</TableCell>
                                        <TableCell  align='center' sx={{ color: 'white', fontSize: '15px' }}>Ativo</TableCell>
                                        <TableCell align='center' sx={{ color: 'white', fontSize: '15px' }}>Detalhes</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.map((item) => (
                                        <TableRow
                                            key={item._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell></TableCell>
                                            <TableCell>{item.nome}</TableCell>
                                            <TableCell>{item.email}</TableCell>
                                            <TableCell>{item.setor}</TableCell>
                                            <TableCell>{item.telefone}</TableCell>
                                            <TableCell align='center' >{item.ativo ? <Chip label='Inativo' sx={{ color: red[800], backgroundColor: red[100]}} /> : <Chip label='Ativo' sx={{ color: green[800], backgroundColor: green[100]}} /> }</TableCell>
                                            <TableCell align='center'>{
                                                <EditarUsuarios
                                                    id={item._id}
                                                    nomeUsuario={item.nome}
                                                    emailUsuario={item.email}
                                                    setorUsuario={item.setor}
                                                    telefoneUsuario={item.telefone}
                                                    ativoUsuario={item.ativo}
                                                    dataAdmissaoUsuario={item.dataAdmissao}
                                                    cpfUsuario={item.cpf}
                                                    setFlushHook={setFlushHook}
                                                />
                                            }</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Container>
            </SidebarSee >
        </>
    )
}

export default Usuarios