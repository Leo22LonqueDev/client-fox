import { Alert, AlertTitle, Box, Button, CircularProgress, Container, IconButton, InputAdornment, TextField, Tooltip } from "@mui/material"
import { orange } from "@mui/material/colors"
import logo from '../../imgs/logo.png'
import { useState } from "react"
import axios from "axios"
import { RemoveRedEyeOutlined, Visibility, VisibilityOff, VisibilityOffOutlined } from "@mui/icons-material"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [seeSenha, setSeeSenha] = useState(false);
    const [changeVisualizarSenha, setChangeVisualizarSenha] = useState('password');
    const [error, setError] = useState(false)

    const handleToggleSenhaVisibility = () => {
        setSeeSenha(!seeSenha);
        setChangeVisualizarSenha(seeSenha ? 'password' : 'text');
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const result = await axios.post(`${process.env.REACT_APP_BACKEND}/login`, {
                email,
                password
            })
            console.log(result);
            if (result.status === 200) {
                const values = result.data
                localStorage.setItem('values', values)

                window.location.replace('/')
            }
        } catch (error) {
            console.log(error);
            setError(true)
            setLoading(false)
        }
    }

    return (
        <>
            <Container maxWidth sx={{ bgcolor: orange[600], height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {
                    loading ? (
                        <CircularProgress />
                    ) : (
                        <form>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: orange[50], padding: '40px', borderRadius: '15px', height: '400px' }}>
                                <img src={logo} alt='LogoFox' />
                                <TextField type='email' label='E-mail' onChange={(e) => { setEmail(e.target.value) }} value={email} variant='standard' sx={{ width: '300px' }} />
                                <br />
                                <TextField
                                    variant="standard"
                                    label='Senha'
                                    placeholder='Senha'
                                    sx={{ width: '100%', mt: 2 }}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={changeVisualizarSenha}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton size='small' onClick={handleToggleSenhaVisibility}>
                                                    {
                                                        changeVisualizarSenha === 'password' ? (
                                                            <Tooltip title='Verificar senha' >
                                                                <RemoveRedEyeOutlined />
                                                            </Tooltip>
                                                        ) : (
                                                            <Tooltip title='Esconder senha' >
                                                                <VisibilityOffOutlined />
                                                            </Tooltip>
                                                        )
                                                    }
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                        style: { borderRadius: '10px' }
                                    }}
                                />
                                <br />
                                <Button type='submit' variant='contained' onClick={handleSubmit} sx={{ mb: 15 }} >LOGIN</Button>
                                {
                                    error ? (
                                        <Alert variant='filled' color='error'>
                                            <AlertTitle>Erro ao entrar</AlertTitle>
                                            Senha ou e-mail incorretos!
                                        </Alert>
                                    ) : null
                                }
                            </Box>
                        </form>
                    )
                }

            </Container>
        </>
    )
}

export default Login