import React from "react";
import { Container } from "@mui/material";
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import App from "./page";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Container>
                <App />
            </Container>
        </BrowserRouter>
    </React.StrictMode>,
)