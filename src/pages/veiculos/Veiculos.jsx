import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from "@mui/material"
import SidebarSee from "../../components/Sidebar/Sidebar"
import { useState } from "react"

const Veiculos = () => {

    const [adicionarVeiculo, setAdicionarVeiculo] = useState(false)
    const [modelo, setModelo] = useState(false)
    const [placa, setPlaca] = useState(false)
    const [anoDeFabricacao, setAnoDeFabricacao] = useState(false)
    const [cor, setCor] = useState(false)
    const [marca, setMarca] = useState(false)

    console.log(modelo);

    const handleClickAddVeiculo = async () => {
        setAdicionarVeiculo(true)
    }

    const handleClose = async () => {
        setAdicionarVeiculo(false)
    }



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
                            Veículos
                        </Typography>
                        <Button type='button' variant='contained' onClick={handleClickAddVeiculo} >Adicionar Veículo</Button>
                    </Box>
                    <Dialog
                        open={adicionarVeiculo}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Informe o Veículo"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" sx={{ display: 'flex', flexDirection: 'column' }}>
                                <TextField type='text' label='Modelo' onBlur={(e) => { setModelo(e.target.value) }} sx={{ mt: 2 }} InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                    }
                                }} />
                                <TextField type='email' label='Placa' sx={{ mt: 2 }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                                <TextField type='date' label='Ano de Fabricação' sx={{ mt: 2 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                                <TextField type='text' label='Cor' sx={{ mt: 2 }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                                <TextField type='text' label='Marca' sx={{ mt: 2 }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color='error'>Fechar</Button>
                            <Button onClick={handleClose} color='success' autoFocus>Criar</Button>
                        </DialogActions>
                    </Dialog>
                    <Box>

                    </Box>
                </Container>
            </SidebarSee>
        </>
    )
}

export default Veiculos