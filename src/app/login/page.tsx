"use client";

import { Alert, Box, Button, CircularProgress, Container, Paper, Snackbar, TextField } from "@mui/material";
import logoFox from "@/imgs/logoFox.svg"
import Image from "next/image";
import { orange } from "@mui/material/colors";
import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const login = async (e: any) => {
        e.preventDefault()
        console.log(email, password);
        setLoading(true)
        try {
            localStorage.setItem('email', email)
            localStorage.setItem('password', password)
            window.location.replace('/')
        } catch (error) {
            console.log(error);
            setError(true)
        }
    }

    const handleCloseInput = () => {
        setError(false)
    }

    return (
        <>
            {
                loading ? (
                    <CircularProgress style={{ position: 'absolute', top: '50%', left: '49%' }} />
                ) : null
            }
            < Container maxWidth='xl' sx={{ bgcolor: orange[500], borderRadius: '15px' }}>
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
                        <TextField type="email" label="E-mail" variant="standard" onChange={e => setEmail(e.target.value)} sx={{ width: '300px' }} />
                        <br />
                        <TextField type="password" label="Senha" variant="standard" onChange={e => setPassword(e.target.value)} sx={{ width: '300px' }} />
                        <br />
                        <Button type='submit' variant='contained' onClick={login}>Login</Button>
                        <br />
                    </Box>
                </Box>
                <Snackbar open={error} autoHideDuration={6000} onClose={handleCloseInput}>
                    <Alert variant="filled" onClose={handleCloseInput} severity="error" sx={{ width: '100%' }}>
                        E-mail ou senha incorreta!
                    </Alert>
                </Snackbar>
            </Container >
        </>
    )
}

export default Login