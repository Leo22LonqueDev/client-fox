'use client';

import { Box, Container, TextField } from "@mui/material";
import { useState } from "react";

export default function Home() {

  const [email, setEmail] = useState('')

  return (
    <>
      <Container>
        <Box>
          <h1>
            funciona
          </h1>
          <TextField onChange={(e) => { setEmail(e.target.value) }} label='E-mail' />
        </Box>
      </Container>

    </>
  )
}
