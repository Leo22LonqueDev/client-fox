import { ApiCall } from "./api"

export const createUser = async (data) => {
    return await new ApiCall('/users').post(data)
}

export const getUsers = async () => {
    return await new ApiCall('/users').get()
}

export const loginUser = async (body) => {
    return await new ApiCall(`/auth/login`).post(body)
}

export const updatePassword = async (data) => {
    return await new ApiCall(`/users/updatePassword`).put(data)
}

export const verifyCode = async (data) => {
    return await new ApiCall(`/auth/verify`).post(data)
}