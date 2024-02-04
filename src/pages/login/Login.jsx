import { Box, Button, Container, TextField } from "@mui/material"
import { orange } from "@mui/material/colors"
import logo from '../../imgs/logo.png'

const Login = () => {
    return (
        <>
            <Container maxWidth sx={{ bgcolor: orange[600], height: '100vh' }}>
                <Box maxWidth={400} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: orange[50], padding: '10px' }}>
                    <img src={logo} alt='LogoFox' />
                    <TextField type='email' label='E-mail' variant='standard' />
                    <TextField type='password' label='Senha' variant='standard' />
                    <br />
                    <Button type='submit' variant='contained'>LOGIN</Button>
                </Box>
            </Container>
        </>
    )
}

export default Login