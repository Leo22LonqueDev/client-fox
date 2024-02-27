import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import Carros from "./pages/carros/Carros"
import Usuarios from "./pages/usuarios/Usuarios"


const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/carros' element={<Carros />} />
            <Route exact path='/usuarios' element={<Usuarios />} />
        </Routes>
    )
}

export default AppRoutes