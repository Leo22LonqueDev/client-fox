import { useEffect, useContext } from "react"
import AuthContext from "./context/AuthContext"
// import { verificarToken } from "./_services/auth.service"
import { verifyCode } from "./_services/user.service"

const ProtectedRoute = ({ children }) => {

    const { name, setName } = useContext(AuthContext)

    const verifyAcess = async () => {
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
        verifyAcess()
    }, [name])

    return (
        children
    )
}

export default ProtectedRoute