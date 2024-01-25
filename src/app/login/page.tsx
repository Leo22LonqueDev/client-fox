"use client";

import { Box, Button, Container, Paper, TextField } from "@mui/material";
import logoFox from "@/imgs/logoFox.svg"
import Image from "next/image";
import { orange } from "@mui/material/colors";

export default function Home() {
    return (
        <>
            <Container maxWidth='xl' sx={{ bgcolor: orange[500], borderRadius: '15px' }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '98vh',
                }}>
                    <Box component={Paper} elevation={9} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '15px',
                        height: '400px',
                        width: '350px'
                    }}>
                        <Image src={logoFox} alt="Logo Fox" />
                        <TextField type="email" label="E-mail" variant="standard" sx={{ width: '300px' }} />
                        <br />
                        <TextField type="password" label="Senha" variant="standard" sx={{ width: '300px' }} />
                        <br />
                        <Button type='submit' variant='contained'>Login</Button>
                        <br />
                    </Box>
                </Box>
            </Container >
        </>
    )
}