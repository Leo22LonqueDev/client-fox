import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, TextField } from "@mui/material"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useState } from "react";
import axios from "axios";

const EditarVeiculos = ({ id, modeloCarro, placaCarro, anoDeFabricacaoCarro, corCarro, marcaCarro, setFlushHook, }) => {
    const [modelo, setModelo] = useState(modeloCarro)
    const [placa, setPlaca] = useState(placaCarro)
    const [anoDeFabricacao, setAnoDeFabricacao] = useState(anoDeFabricacaoCarro)
    const [cor, setCor] = useState(corCarro)
    const [marca, setMarca] = useState(marcaCarro)
    const [openDetails, setOpenDetails] = useState(false)
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState('')
    const [message, setMessage] = useState('')

    const handleClose = () => {
        setOpenDetails(false)
    }
    const handleOpenDetails = () => {
        setOpenDetails(true)
    }
    const handleUpdate = async () => {
        try {
            if (modelo === "" || placa === "" || anoDeFabricacao === "" || cor === "" || marca === "") {
                setOpen(true)
                setSeverity("warning")
                setMessage("Este campo não pode ficar vazio, por favor insira os dados.")
                return
            }
            const update = await axios.put(`${process.env.REACT_APP_BACKEND}/veiculos/`,{
                id, modelo, placa, anoDeFabricacao, cor, marca
                
            })
            
            setOpen(true)
            setSeverity("success")
            setMessage("Dados atualizados com sucesso.")
            setFlushHook(true)
            setOpenDetails(false)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Button onClick={handleOpenDetails} color='inherit'><EditOutlinedIcon /></Button>
            <Dialog
                open={openDetails}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {`Detalhes do carro:`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <TextField label='Modelo' margin="normal" type="text" value={modelo} onChange={(e) => { setModelo(e.target.value) }}

                                InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                    },
                                }} />
                            <TextField label='Placa' margin="normal" type="text" value={placa} onChange={(e) => { setPlaca(e.target.value) }}
                                InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                    },
                                }} />


                            <TextField label='Ano de Fabricação' margin="normal" type="text" value={anoDeFabricacao} onChange={(e) => { setAnoDeFabricacao(e.target.value) }}

                                InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                    },
                                }} />
                            <TextField label='Cor' margin="normal" type="text" value={cor} onChange={(e) => { setCor(e.target.value) }}
                                InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                    },
                                }} />


                            <TextField label='Marca' margin="normal" type="text" value={marca} onChange={(e) => { setMarca(e.target.value) }}

                                InputProps={{
                                    style: {
                                        borderRadius: '10px',
                                    },
                                }} />
                            {/* <TextField label='' margin="normal" type="text" value={cpf} onChange={(e) => { setCpf(e.target.value) }} */}
                            {/* InputProps={{ */}
                            {/* style: { */}
                            {/* borderRadius: '10px', */}
                            {/* }, */}
                            {/* }} /> */}

                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error" >Fechar</Button>
                    <Button onClick={handleUpdate} color="success" autoFocus>
                        Salvar
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar open={open} autoHideDuration={5000} onClose={() => { setOpen(false) }}>
                <Alert severity={severity} variant='filled'>
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default EditarVeiculos