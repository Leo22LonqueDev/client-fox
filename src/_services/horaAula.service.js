import { ApiCall } from "./api"

export const updateHoraAula = async (_id, quantidadeHoraAula) => {
    return await new ApiCall(`/horaAula/updateQuantidadeAula?_id=${_id}&quantidadeHoraAula=${quantidadeHoraAula}`).put()
}

export const updateHoraAulaExtra = async (_id, quantidadeHoraAulaExtra) => {
    return await new ApiCall(`/horaAula/updateQuantidadeAulaExtra?_id=${_id}&quantidadeHoraAulaExtra=${quantidadeHoraAulaExtra}`).put()
}

export const filterHoraAula = async (modeloVeiculo, instrutor, mes) => {
    return await new ApiCall(`/horaAula/filterHoraAula?modeloVeiculo=${modeloVeiculo}&instrutor=${instrutor}&mes=${mes}`).get()
}

