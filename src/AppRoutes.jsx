import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import Usuarios from "./pages/usuarios/Usuarios"
import Veiculos from "./pages/veiculos/Veiculos"
import Financeiro from "./pages/financeiro/Financeiro"
import HoraAula from "./pages/horaAula/HoraAula"


const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/veiculos' element={<Veiculos />} />
            <Route exact path='/usuarios' element={<Usuarios />} />
            <Route exact path='/financeiro' element={<Financeiro />} />
            <Route exact path='/horaaula' element={<HoraAula/>} />
        </Routes>
    )
}

export default AppRoutes