"use client";

import { Box, Button, Container, Paper, TextField } from "@mui/material";
import logoFox from "@/imgs/logoFox.svg"

export default function Home() {
    return (
        <>
            <Container>
                <Box component={Paper} sx={{ width: '30%', display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
                    <img src={logoFox} alt="Logo Fox" srcSet="logo Fox" />
                    <TextField type="email" label="E-mail" variant="standard" sx={{ width: '300px' }} />
                    <br />
                    <TextField type="password" label="Senha" variant="standard" sx={{ width: '300px' }} />
                    <br />
                    <Button type='submit' variant='contained'>Login</Button>
                    <br />
                </Box>
            </Container>
        </>
    )
}