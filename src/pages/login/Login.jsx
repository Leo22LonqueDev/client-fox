import { Box, Button, Container, TextField } from "@mui/material"
import { orange } from "@mui/material/colors"

const Login = () => {
    return (
        <>
        <h1>Funciona</h1>
            <Container maxWidth sx={{ bgcolor: orange[600] }}>
                <Box>
                    <TextField type='email' label='E-mail' />
                    <TextField type='password' label='Senha' />
                    <Button type='submit'>LOGIN</Button>
                </Box>
            </Container>
        </>
    )
}

export default Login