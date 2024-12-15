import { ApiCall } from "./api"
const uri = process.env.REACT_BACKEND_FOX

export const createUser = async (data) => {
    return await new ApiCall('/users').post(data)
}

export const getUsers = async () => {
    return await new ApiCall('/users').get()
}

export const loginUser = async (body) => {
    return await new ApiCall(`/login`).post(body)
}