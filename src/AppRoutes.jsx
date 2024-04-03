import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import Usuarios from "./pages/usuarios/Usuarios"
import Veiculos from "./pages/veiculos/Veiculos"
import Financeiro from "./pages/financeiro/Financeiro"
import HoraAula from "./pages/horaAula/HoraAula"
import Orcamento from "./pages/orcamento/Orcamento"
import ProtectedRoute from "./ProtectedRoute"


const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route exact path='/veiculos' element={<Veiculos />} />
            <Route exact path='/usuarios' element={<Usuarios />} />
            <Route exact path='/financeiro' element={<Financeiro />} />
            <Route exact path='/horaaula' element={<HoraAula />} />
            <Route exact path='/orcamento' element={<Orcamento />} />
        </Routes>
    )
}

export default AppRoutes