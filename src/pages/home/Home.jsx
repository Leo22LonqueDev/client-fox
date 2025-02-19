import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material"
import SidebarSee from "../../components/Sidebar/Sidebar"
import { orange } from "@mui/material/colors"
import AuthContext from "../../context/AuthContext"
import { useContext, useEffect, useState } from "react"
import { getUsers, updatePassword } from "../../_services/user.service"
import Toast from "../../components/Toast/Toast"

const Home = () => {

    const [firstAccess, setFirstAccess] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const [openSnack, setOpenSnack] = useState(false)
    const [severitySnack, setSeveritySnack] = useState('')
    const [dataUser, setDataUser] = useState(null)

    const { name } = useContext(AuthContext)

    const fetchInfoUser = async () => {
        try {
            const result = await getUsers()
            setDataUser(result.users)
            console.log(result);
            if (result.users === 'Sim') {
                setFirstAccess(true)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchInfoUser()
    }, [name])

    const handleUpdatePassword = async () => {
        try {
            await updatePassword(password, confirmPassword)
            window.location.reload()
        } catch (error) {
            setOpenSnack(true)
            setMessage(error.response.data.message)
            setSeveritySnack('error')
        }
    }

    return (
        <>
            <SidebarSee>
                <Container maxWidth sx={{ textAlign: 'center' }} component={Paper} elevation={7}>
                    <Box>
                        <Typography variant='h3'>
                            Bem-Vindo {name}!
                        </Typography>
                    </Box>
                    {
                        firstAccess ? (
                            <Box>
                                <Typography variant='h3'>
                                    1° vez acessando, favor trocar a senha!
                                </Typography>
                                <form action=''>
                                    <TextField type='password' label='Senha' onChange={e => setPassword(e.target.value)} />
                                    <TextField type='password' label='Confirmar Senha' onChange={e => { setConfirmPassword(e.target.value) }} />
                                    <Button onClick={handleUpdatePassword}>Atualizar Senha</Button>
                                </form>
                            </Box>
                        ) : null
                    }
                </Container>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 7,
                        mb: 10,
                        width: 250,
                        height: 75,
                        margin: 5,
                        borderRadius: 5,
                        bgcolor: orange[700]
                    }}
                >
                    <Typography variant='h4'>
                        TESTE!
                    </Typography>

                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 7,
                        mb: 10,
                        width: 250,
                        height: 75,
                        margin: 5,
                        borderRadius: 5,
                        bgcolor: orange[700]
                    }}
                >
                    <Typography variant='h4'>
                        TESTE!
                    </Typography>

                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 250,
                        height: 75,
                        ml: 5,
                        borderRadius: 5,
                        bgcolor: orange[700]
                    }}
                >
                    <Typography variant='h4'>
                        TESTE!
                    </Typography>
                </Box>
                <Toast message={message} open={openSnack} severity={severitySnack} onClose={() => {setOpenSnack(false)}} />
            </SidebarSee>
        </>
    )
}

export default Home