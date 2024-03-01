import { ApiCall } from "./api"

export const createUser = async (data) => {
    return await new ApiCall('/users').post(data)
}

export const getUsers = async () => {
    return await new ApiCall('/users').get()
}