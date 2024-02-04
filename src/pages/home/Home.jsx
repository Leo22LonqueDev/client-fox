import { Box, Button, Container, TextField } from "@mui/material"
import { blueGrey } from "@mui/material/colors"

const Home = () => {
    return (
        <>
            <Container maxWidth sx={{ bgcolor: blueGrey[400] }}>
                <Box>
                    <TextField type='email' label='E-mail' />
                    <TextField type='password' label='Senha' />
                    <Button type='submit'>LOGIN</Button>
                </Box>
            </Container>
        </>
    )
}

export default Home