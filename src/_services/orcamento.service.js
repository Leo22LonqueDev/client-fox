import { ApiCall } from "./api"

export const createOrcamento = async (data) => {
    return await new ApiCall(`/orcamento/createOrcamento`).post(data)
}

export const filterOrcamento = async (nome, categoria, dia, page, rowsPerPage) => {
    return await new ApiCall(`/orcamento/filterOrcamentos?nome=${nome}&categoria=${categoria}&dia=${dia}&page=${page}&limit=${rowsPerPage}`).get()
}
