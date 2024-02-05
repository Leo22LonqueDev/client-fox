import { Box, Button, Container, TextField } from "@mui/material"
import { orange } from "@mui/material/colors"
import logo from '../../imgs/logo.png'
import { useState } from "react"

const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault
    }

    return (
        <>
            <Container maxWidth sx={{ bgcolor: orange[600], height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box maxWidth={400} maxHeight={500} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: orange[50], padding: '10px', borderRadius: '15px' }}>
                    <img src={logo} alt='LogoFox' />
                    <TextField type='email' label='E-mail' onChange={(e) => { setEmail(e.target.value) }} variant='standard' />
                    <TextField type='password' label='Senha' onChange={(e) => { setSenha(e.target.value) }} variant='standard' />
                    <br />
                    <Button type='submit' variant='contained' onClick={handleSubmit} >LOGIN</Button>
                </Box>
            </Container>
        </>
    )
}

export default Login