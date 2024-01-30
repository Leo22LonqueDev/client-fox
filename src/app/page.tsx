"use client";

import { Box, Container, Paper, Typography, } from "@mui/material";

const Home = () => {
    return (
        <>
            <Container maxWidth='xl' sx={{ borderRadius: '15px', height: "98vh" }}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}>
                    <Box component={Paper} elevation={9} sx={{ height: "200px", width: "350px", margin: 1 }}>
                        <Typography>
                            Financeiro
                        </Typography>
                    </Box>
                    <Box component={Paper} elevation={9} sx={{ height: "200px", width: "350px", margin: 1 }}>
                        <Typography>
                            Contagem Aulas/Instrutores
                        </Typography>
                    </Box>
                    <Box component={Paper} elevation={9} sx={{ height: "200px", width: "350px", margin: 1 }}>
                        <Typography>
                            Orçamentos
                        </Typography>
                    </Box>
                </Box>
            </Container >
        </>
    )
}

export default Home