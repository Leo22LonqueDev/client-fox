import { Box, Container, Typography } from "@mui/material"
import { blueGrey } from "@mui/material/colors"

const Home = () => {
    return (
        <>
            <Container maxWidth sx={{ bgcolor: blueGrey[400] }}>
                <Box>
                    <Typography>
                        Funciona
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default Home