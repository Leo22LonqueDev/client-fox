import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import Usuarios from "./pages/usuarios/Usuarios"
import Veiculos from "./pages/veiculos/Veiculos"
import Financeiro from "./pages/financeiro/Financeiro"
import HoraAula from "./pages/horaAula/HoraAula"
import Orcamento from "./pages/orcamento/Orcamento"
import ProtectedRoute from "./ProtectedRoute"
import { AuthProvider } from "./context/AuthContext"


const AppRoutes = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route exact path='/veiculos' element={<ProtectedRoute><Veiculos /></ProtectedRoute>} />
                <Route exact path='/usuarios' element={<ProtectedRoute><Usuarios /></ProtectedRoute>} />
                <Route exact path='/financeiro' element={<ProtectedRoute><Financeiro /></ProtectedRoute>} />
                <Route exact path='/horaaula' element={<ProtectedRoute><HoraAula /></ProtectedRoute>} />
                <Route exact path='/orcamento' element={<ProtectedRoute><Orcamento /></ProtectedRoute>} />
            </Routes>
        </AuthProvider>
    )
}

export default AppRoutes