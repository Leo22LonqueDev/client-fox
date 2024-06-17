import { Alert, Snackbar, TextField } from "@mui/material"
import { useState } from "react";
import { updateHoraAula } from "../../../_services/horaAula.service";

const QuantidadeHoraAula = ({ item }) => {

    const [quantidadeHoraAula, setQuantidadeHoraAula] = useState(item.quantidadeAulas)
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState('')
    const [message, setMessage] = useState('')

    const handleChange = async (e) => {
        const newQuantidade = e.target.value;
        setQuantidadeHoraAula(newQuantidade);
        try {
            const update = await updateHoraAula(item._id, newQuantidade);
            console.log(update);
            setOpen(true);
            setMessage('Hora Aula atualizada com sucesso!');
            setSeverity('success');
        } catch (error) {
            console.log(error);
            setOpen(true);
            setMessage('Erro ao atualizar Hora Aula!');
            setSeverity('error');
        }
    }

    return (
        <>
            <TextField type='number' label='Aulas' size='small' value={quantidadeHoraAula} onChange={handleChange}
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    style: {
                        borderRadius: '10px',
                    }
                }} sx={{ width: '150px' }}
            />
            <Snackbar open={open} autoHideDuration={5000} onClose={() => { setOpen(false) }}>
                <Alert severity={severity} variant='filled'>
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}
export default QuantidadeHoraAula