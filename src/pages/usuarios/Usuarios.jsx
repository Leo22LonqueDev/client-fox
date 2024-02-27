import { Box, Button, Container, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import SidebarSee from "../../components/Sidebar/Sidebar"
import { orange } from "@mui/material/colors"
import { Search } from "@mui/icons-material"

const Usuarios = () => {
    return (
        <>
            <SidebarSee>
                <Container maxWidth>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mt: 2,
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
                            Usuários
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Button variant='contained' color='info' >Criar Usuários</Button>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <TextField size="small" type='text' variant='outlined' label='Buscar'
                            InputProps={{
                                style: {
                                    borderRadius: '10px',
                                },
                                startAdornment: <Search sx={{ mr: 1 }} />
                            }}
                            fullWidth />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <TableContainer component={Paper} elevation={3} sx={{ bgcolor: orange[700], borderRadius: '10px' }}>
                            <Table aria-label="simple table" >
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Nome</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>E-mail</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Setor</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Telefone</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Ativo</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Detalhes</TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </TableContainer>
                    </Box>
                </Container>
            </SidebarSee>
        </>
    )
}

export default Usuarios