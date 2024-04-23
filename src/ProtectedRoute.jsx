import { useEffect, useContext } from "react"
import AuthContext from "./context/AuthContext"
import axios from "axios"

const ProtectedRoute = ({ children }) => {

    const { name, setName } = useContext(AuthContext)

    const verificarAcesso = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_BACKEND}/verifyAcesso`)
            setName(result.nome)
            console.log(result.data);

        } 
        catch (error) {
            console.log(error)
            window.location.replace('/login')
        }
    }

    useEffect(() => {
        verificarAcesso()
    }, [name])

    return (
        children
    )
}

export default ProtectedRoute