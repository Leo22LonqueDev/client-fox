import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/login" element={<Login />} />
        </Routes>
    )
}

export default AppRoutes