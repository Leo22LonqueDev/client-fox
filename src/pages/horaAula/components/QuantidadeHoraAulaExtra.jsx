import { Alert, Snackbar, TextField } from "@mui/material"
import { useState } from "react";
import { updateHoraAulaExtra } from "../../../_services/horaAula.service";

const QuantidadeHoraAulaExtra = ({ item }) => {

    const [quantidadeHoraAulaExtra, setQuantidadeHoraAulaExtra] = useState(item.quantidadeAulasExtra)
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState('')
    const [message, setMessage] = useState('')

    const atualizarQuantidadeHoraAulaExtra = async (_id, quantidadeHoraAulaExtra) => {
        try {
            const update = await updateHoraAulaExtra(
                _id,
                quantidadeHoraAulaExtra
            )
            console.log(update);
            setOpen(true);
            setMessage('Hora Aula Extra atualizada com sucesso!');
            setSeverity('success');
        } catch (error) {
            console.log(error);
            setOpen(true);
            setMessage('Erro ao atualizar Hora Aula Extra!');
            setSeverity('error');
        }
    }

    return (
        <>
            <TextField type='number' label='Aulas Extra' size='small' value={quantidadeHoraAulaExtra} onChange={(e) => { setQuantidadeHoraAulaExtra(e.target.value) }}
                onBlur={() => { atualizarQuantidadeHoraAulaExtra(item._id, quantidadeHoraAulaExtra) }}
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    style: {
                        borderRadius: '10px',
                    }
                }} sx={{ width: '150px' }} />
            <Snackbar open={open} autoHideDuration={5000} onClose={() => { setOpen(false) }}>
                <Alert severity={severity} variant='filled'>
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}
export default QuantidadeHoraAulaExtra