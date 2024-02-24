import { Box, Container, Paper, Typography } from "@mui/material"
import SidebarSee from "../../components/Sidebar/Sidebar"

const Home = () => {
    return (
        <>
            <SidebarSee>
                <Container maxWidth sx={{ textAlign: 'center' }} component={Paper} elevation={7}>
                    <Box>
                        <Typography>
                            Bem-Vindo!
                        </Typography>
                    </Box>
                </Container>
            </SidebarSee>
        </>
    )
}

export default Home