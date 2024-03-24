import { TextField } from "@mui/material"
import axios from "axios";
import { useState } from "react";

const QuantidadeHoraAulaExtra = ({ item, setFlushHook }) => {

    const [quantidadeHoraAulaExtra, setQuantidadeHoraAulaExtra] = useState(item.quantidadeAulasExtra)

    const atualizarQuantidadeHoraAulaExtra = async (_id, quantidadeHoraAulaExtra) => {
        try {
            const update = await axios.put(`${process.env.REACT_APP_BACKEND}/horaAula/updateQuantidadeAulaExtra`, {
                _id: _id,
                quantidadeHoraAulaExtra: quantidadeHoraAulaExtra
            })
            console.log(update);
            setFlushHook(true)
        } catch (error) {
            console.log(error);
        }
    }

    return (
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
    )
}
export default QuantidadeHoraAulaExtra