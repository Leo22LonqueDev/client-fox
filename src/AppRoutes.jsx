import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
// import { AuthProvider } from "./context/AuthContext.jsx";
// import ProtectedRoute from "./ProtectedRoute.jsx";


const AppRoutes = () => {
    return (
        // <AuthProvider>
        <Routes>
            <Route exact path="/login" element={<Login />} />

            <Route exact path="/" element={<Home />} />
        </Routes>
        // </AuthProvider>
    )
}

export default AppRoutes