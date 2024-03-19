import { Box, Container, Paper, Typography, ThemeProvider, TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Button, TextField, IconButton } from "@mui/material"
import SidebarSee from "../../components/Sidebar/Sidebar"
import * as React from 'react'
import { orange } from "@mui/material/colors"
import { useState } from "react"
import { Search } from "@mui/icons-material"






const HoraAula = () => {

    const [open, setOpen] = useState(false)
    const [openHoraAula, setOpenHoraAula] = useState(false)

    const handleClose = async () => {
        setOpen(false)
        setOpenHoraAula(false)
    }

    const openCriarFinanceiro = async () => {
        setOpenHoraAula(true)
    }
    return (
        <>
            <SidebarSee>
                <Container>
                <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mt: 2,
                            mb: 10
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 'bold',
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '30%',
                                    height: '2px',
                                    bottom: 0,
                                    left: '0%',
                                    backgroundColor: 'currentColor',
                                    transition: 'width 0.3s ease-in-out, left 0.3s ease-in-out',
                                },
                                '&:hover::after': {
                                    width: '100%',
                                    left: '0%',
                                },
                            }}
                        >
                            Hora Aula
                        </Typography>
                        <Button type='Button' variant='contained' color='info' onClick={openHoraAula} >Adicionar hora Aula</Button>
                    </Box>
                    <Box
                        sx={{ mt: 10 }}
                    >
                        <form action="">
                            <TextField size="small" type='text' variant='outlined' label='Buscar'
                                InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                    },
                                    startAdornment: <IconButton type='submit' size='small'><Search sx={{ mr: 1 }} /></IconButton>
                                }}
                                fullWidth />
                        </form>
                    </Box>
                    <Box
                        sx={{ mt: 2 }}
                    >
                        <TableContainer component={Paper} elevation={3} sx={{ borderRadius: '10px' }}>
                            <Table aria-label="simple table" size='small'>
                                <TableHead sx={{ bgcolor: orange[700] }}>
                                    <TableRow>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Veículo</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Tipo</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Instrutor</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Data</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Mês</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Aulas</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Aula Extra</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Container>
            </SidebarSee>
        </>
    )
}

export default HoraAula