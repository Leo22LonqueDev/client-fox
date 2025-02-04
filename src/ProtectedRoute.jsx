import { useEffect, useContext } from "react"
import AuthContext from "./context/AuthContext"
import { verifyCode } from "./_services/user.service"

const ProtectedRoute = ({ children }) => {

    const { name, setName } = useContext(AuthContext)

    const verifyAccess = async () => {
        try {
            const result = await verifyCode()
            setName(result.nome)
        } 
        catch (error) {
            console.log(error)
            window.location.replace('/login')
        }
    }

    useEffect(() => {
        verifyAccess()
    }, [name])

    return (
        children
    )
}

export default ProtectedRoute