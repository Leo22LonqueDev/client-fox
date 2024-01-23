"use client";

import { Box, Button, Container, TextField } from "@mui/material";

export default function Home() {
    return (
        <>
            <Container>
                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", alignContent: "center" }}>
                    <h2>Auto-escola FOX</h2>
                    <TextField type="email" label="E-mail" variant="standard" />
                    <br />


                    <TextField type="password" label="Senha" variant="standard" />

                    <br />

                    <Button>
                        Login
                    </Button>
                </Box>
            </Container>
        </>
    )
}