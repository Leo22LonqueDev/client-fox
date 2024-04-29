import { Box, Container, Paper, Typography } from "@mui/material"
import SidebarSee from "../../components/Sidebar/Sidebar"
import { orange } from "@mui/material/colors"
import AuthContext from "../../context/AuthContext"
import { useContext, useEffect } from "react"

const Home = () => {

    const { name } = useContext(AuthContext)

    useEffect(() => {

    }, [name])

    return (
        <>
            <SidebarSee>
                <Container maxWidth sx={{ textAlign: 'center' }} component={Paper} elevation={7}>
                    <Box>
                        <Typography variant='h3'>
                            Bem-Vindo {name}!
                        </Typography>
                    </Box>
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

            </SidebarSee>
        </>
    )
}

export default Home