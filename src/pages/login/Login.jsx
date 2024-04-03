import { Box, Button, CircularProgress, Container, TextField } from "@mui/material"
import { orange } from "@mui/material/colors"
import logo from '../../imgs/logo.png'
import { useState } from "react"
import axios from "axios"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

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
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: orange[50], padding: '40px', borderRadius: '15px', height: '400px' }}>
                            <img src={logo} alt='LogoFox' />
                            <TextField type='email' label='E-mail' onChange={(e) => { setEmail(e.target.value) }} value={email} variant='standard' sx={{ width: '300px' }} />
                            <br />
                            <TextField type='password' label='Senha' onChange={(e) => { setPassword(e.target.value) }} value={password} variant='standard' sx={{ width: '300px' }} />
                            <br />
                            <Button type='submit' variant='contained' onClick={handleSubmit} >LOGIN</Button>
                        </Box>
                    )
                }
            </Container>
        </>
    )
}

export default Login