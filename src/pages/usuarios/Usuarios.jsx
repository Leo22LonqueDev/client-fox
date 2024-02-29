import { Alert, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import SidebarSee from "../../components/Sidebar/Sidebar"
import { orange } from "@mui/material/colors"
import { Search } from "@mui/icons-material"
import { useEffect, useState } from "react"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import axios from "axios"
import { getUsers } from "../../_services/user.service"

const Usuarios = () => {

    const [open, setOpen] = useState(false)
    const [openCriarUsuario, setOpenCriarUsuario] = useState(false)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [dataAdmissao, setDataAdmissao] = useState('')
    const [setor, setSetor] = useState('')
    const [telefone, setTelefone] = useState('')
    const [severity, setSeverity] = useState('')
    const [message, setMessage] = useState('')

    const [users, setUsers] = useState([])

    const handleClose = () => {
        setOpenCriarUsuario(false)
    }

    const handleChangeModal = async () => {
        setOpenCriarUsuario(true)
    }

    const handleCriarUsuario = async () => {
        try {
            if ((nome === '') || (email === '') || (dataAdmissao === '') || (setor === '')) {
                setOpen(true)
                setSeverity('warning')
                setMessage('Dados faltando, favor inserir todos os campos!')
            }
            const criarUsuario = await axios.post(process.env.REACT_APP_BACK + '/usuarios/users', {
                nome: nome,
                email: email,
                dataAdmissao: dataAdmissao,
                setor: setor,
                telefone: telefone,
            })
            console.log(criarUsuario);
            setOpen(true)
            setSeverity('success')
            setMessage('Usuario criado com sucesso!')
            return
        } catch (error) {
            console.log(error);
        }

    }

    const fetchData = async () => {
        try {
            const result = await getUsers()
            setUsers(result)
            return
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

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
                                <TextField type='text' label='Nome' onChange={(e) => { setNome(e.target.value) }} sx={{ mt: 2 }} />
                                <TextField type='email' label='E-mail' onChange={(e) => { setEmail(e.target.value) }} sx={{ mt: 2 }} />
                                <TextField type='date' focused label='Data de Admissão' onChange={(e) => { setDataAdmissao(e.target.value) }} sx={{ mt: 2 }} />
                                <TextField type='text' label='Setor' onChange={(e) => { setSetor(e.target.value) }} sx={{ mt: 2 }} />
                                <TextField type='text' label='Telefone' onChange={(e) => { setTelefone(e.target.value) }} sx={{ mt: 2 }} />
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
                        <TextField size="small" type='text' variant='outlined' label='Buscar'
                            InputProps={{
                                style: {
                                    borderRadius: '10px',
                                },
                                startAdornment: <Search sx={{ mr: 1 }} />
                            }}
                            fullWidth />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <TableContainer component={Paper} elevation={3} sx={{ bgcolor: orange[700], borderRadius: '10px' }}>
                            <Table aria-label="simple table" size='small' >
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Nome</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>E-mail</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Setor</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Telefone</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Ativo</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Detalhes</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/* {users.map((item) => (
                                        <TableRow
                                            key={item._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>{item.nome}</TableCell>
                                            <TableCell>{item.email}</TableCell>
                                            <TableCell>{item.setor}</TableCell>
                                            <TableCell>{item.telefone}</TableCell>
                                            <TableCell>{item.ativo}</TableCell>
                                            <TableCell>{<EditOutlinedIcon />}</TableCell>
                                        </TableRow>
                                    ))} */}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Container>
            </SidebarSee>
        </>
    )
}

export default Usuarios