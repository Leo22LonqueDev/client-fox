import { useEffect } from "react"
import AuthContext from "./context/AuthContext"
import axios from "axios"
import { useContext } from "react"

const ProtectedRoute = ({ children }) => {

    const { nome, setNome } = useContext(AuthContext)

    const verificarAcesso = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_BACKEND}/verifyAcesso`)
            setNome(result.nome)

        } catch (error) {
            console.log(error)
            window.location.replace('/login')
        }
    }

    useEffect(() => {
        verificarAcesso()
    }, [nome])

    return (
        children
    )
}

export default ProtectedRoute