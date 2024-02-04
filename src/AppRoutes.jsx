import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<Home />} />
        </Routes>
    )
}

export default AppRoutes