"use client";

import { Box, Button, Container, Paper, TextField } from "@mui/material";
import logoFox from "@/imgs/logoFox.svg"
import Image from "next/image";
import { grey, orange } from "@mui/material/colors";

export default function Home() {
    return (
        <>
            <Container maxWidth='xl' sx={{ bgcolor: orange[500], borderRadius: '15px', height: "98vh" }}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}>
                    <Box component={Paper} elevation={9} sx={{height: "200px",width: "200px"}}></Box>
                    <Box component={Paper} elevation={9} sx={{height: "200px",width: "200px"}}></Box>
                    <Box component={Paper} elevation={9} sx={{height: "200px",width: "200px"}}></Box>
                </Box>
            </Container >
        </>
    )
}