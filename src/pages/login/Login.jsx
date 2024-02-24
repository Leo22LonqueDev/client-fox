import { Box, Button, Container, TextField } from "@mui/material"
import { orange } from "@mui/material/colors"
import logo from '../../imgs/logo.png'
import { useState } from "react"

const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = async (e) => {

    }

    return (
        <>
            <Container maxWidth sx={{ bgcolor: orange[600], height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: orange[50], padding: '40px', borderRadius: '15px', height: '400px' }}>
                    <img src={logo} alt='LogoFox' />
                    <TextField type='email' label='E-mail' onChange={(e) => { setEmail(e.target.value) }} value={email} variant='standard' sx={{ width: '300px' }} />
                    <br />
                    <TextField type='password' label='Senha' onChange={(e) => { setSenha(e.target.value) }} value={senha} variant='standard' sx={{ width: '300px' }} />
                    <br />
                    <Button type='submit' variant='contained' onClick={handleSubmit} >LOGIN</Button>
                </Box>
            </Container>
        </>
    )
}

export default Login