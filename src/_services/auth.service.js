import { ApiCall } from "./api";

export const verificarToken = async () => {
    return await new ApiCall('/verifyToken').get()
}

export const iniciarPadrao = async (data) => {
    return await new ApiCall('/controleAtividade/iniciarPadrao').post(data)
}