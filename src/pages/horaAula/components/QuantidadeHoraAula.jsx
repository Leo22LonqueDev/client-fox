import { TextField } from "@mui/material"
import axios from "axios";
import { useState } from "react";

const QuantidadeHoraAula = ({ item, setFlushHook }) => {

    const [quantidadeHoraAula, setQuantidadeHoraAula] = useState(item.quantidadeAulas)

    const atualizarQuantidadeHoraAula = async (_id, quantidadeHoraAula) => {
        try {
            const update = await axios.put(`${process.env.REACT_APP_BACKEND}/horaAula/updateQuantidadeAula`, {
                _id: _id,
                quantidadeHoraAula: quantidadeHoraAula
            })
            console.log(update);
            setFlushHook(true)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TextField type='number' label='Aulas' size='small' value={quantidadeHoraAula} onChange={(e) => { setQuantidadeHoraAula(e.target.value) }}
            onBlur={() => { atualizarQuantidadeHoraAula(item._id, quantidadeHoraAula) }}
            InputLabelProps={{
                shrink: true,
            }}
            InputProps={{
                style: {
                    borderRadius: '10px',
                }
            }} sx={{ width: '150px' }}
        />
    )
}
export default QuantidadeHoraAula