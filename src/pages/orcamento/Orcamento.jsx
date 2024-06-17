import { Box, Container, Paper, Typography, TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Button, TextField, Snackbar, Alert, Pagination, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import SidebarSee from "../../components/Sidebar/Sidebar"
import { orange } from "@mui/material/colors"
import { Clear, Search } from "@mui/icons-material"
import moment from "moment"
import { useEffect, useState } from "react"
import { filterOrcamento } from "../../_services/orcamento.service"
import ModalCreateOrcamento from "./components/ModalCreateOrcamento"

const Orcamento = () => {

    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState('')
    const [message, setMessage] = useState('')

    const [nome, setNome] = useState('')
    const [categoria, setCategoria] = useState('')
    const [dia, setDia] = useState('')
    // const [situacaoinicial, setSituacaoInicial] = useState('')
    // const [situacaofinal, setSituacaoFinal] = useState('')

    const [flushHook, setFlushHook] = useState(false)
    const [orcamentos, setOrcamentos] = useState([])

    const [page, setPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(false)

    const fetchFilterData = async () => {
        setLoading(true)
        try {
            const result = await filterOrcamento(
                nome,
                categoria,
                dia,
                page,
                rowsPerPage
            )
            setOrcamentos(result.filter)
            setTotalPages(result.total)
            setOpen(true)
            setSeverity('success')
            setMessage('Dados Filtrados!')
            console.log(result);
        } catch (error) {
            console.log(error);
            setOpen(true)
            setSeverity('error')
            setMessage('Erro!')
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchFilterData()
        setFlushHook(false)
    }, [flushHook, nome, categoria, dia, page, rowsPerPage])

    return (
        <>
            <SidebarSee>
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mt: 2,
                            mb: 10
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 'bold',
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '30%',
                                    height: '2px',
                                    bottom: 0,
                                    left: '0%',
                                    backgroundColor: 'currentColor',
                                    transition: 'width 0.3s ease-in-out, left 0.3s ease-in-out',
                                },
                                '&:hover::after': {
                                    width: '100%',
                                    left: '0%',
                                },
                            }}
                        >
                            Orçamento
                        </Typography>
                        <ModalCreateOrcamento setFlushHook={setFlushHook} />
                    </Box>
                    <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                        <TextField size="small" type='text' variant='outlined' label='Nome' value={nome} onChange={(e) => { setNome(e.target.value) }}
                            InputProps={{
                                style: {
                                    borderRadius: '10px',
                                },
                                startAdornment: <Search />
                            }}
                            fullWidth
                            sx={{ mr: 2 }}
                        />
                        <FormControl size='small' fullWidth>
                            <InputLabel>Categoria</InputLabel>
                            <Select label='Categoria' value={categoria} onChange={(e) => { setCategoria(e.target.value) }} sx={{ borderRadius: '10px', mr: 2 }}>
                                <MenuItem value={'Moto'}>MOTO - (A)</MenuItem>
                                <MenuItem value={'Carro'}>CARRO - (B)</MenuItem>
                                <MenuItem value={'Moto e Carro'}>MOTO E CARRO - (A/B)</MenuItem>
                            </Select>
                        </FormControl>
                        {/* <TextField size="small" type='text' variant='outlined' label='Categoria' value={categoria} onChange={(e) => { setCategoria(e.target.value) }}
                            InputProps={{
                                style: {
                                    borderRadius: '10px',
                                },
                                startAdornment: <Search />
                            }}
                            fullWidth
                            sx={{ mr: 2 }}
                        /> */}
                        <TextField size="small" type='date' variant='outlined' label='Data' value={dia} onChange={(e) => { setDia(e.target.value) }}
                            InputProps={{
                                style: {
                                    borderRadius: '10px',
                                },
                                startAdornment: <Search />
                            }}
                            fullWidth
                            sx={{ mr: 2 }}
                        />
                        <Button variant="contained" onClick={() => {
                            setNome('')
                            setCategoria('')
                            setDia('')
                            setFlushHook(true)
                        }} sx={{ borderRadius: '10px' }}><Clear /></Button>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'} sx={{ mb: 2, mt: 2 }}>
                        <FormControl size="small" disabled={loading}>
                            <InputLabel>Linhas</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Linhas"
                                sx={{ width: '100px', borderRadius: '10px' }}
                                value={rowsPerPage}
                                onChange={(e) => setRowsPerPage(e.target.value)}
                            >
                                <MenuItem value={10} >10</MenuItem>
                                <MenuItem value={20} >20</MenuItem>
                                <MenuItem value={30} >30</MenuItem>
                                <MenuItem value={40} >40</MenuItem>
                                <MenuItem value={50} >50</MenuItem>
                                <MenuItem value={100} >100</MenuItem>
                            </Select>
                        </FormControl>
                        <Pagination count={
                            totalPages % rowsPerPage === 0 ?
                                Math.floor(totalPages / rowsPerPage) :
                                Math.floor(totalPages / rowsPerPage) + 1
                        } page={page} onChange={(e, value) => setPage(value)} disabled={loading} />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <TableContainer component={Paper} elevation={3} sx={{ borderRadius: '10px' }}>
                            <Table aria-label="simple table" size='small' >
                                <TableHead sx={{ bgcolor: orange[700] }}>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Nome</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Telefone</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Situação inicial</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Categoria</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Dia</TableCell>
                                        <TableCell align='center' sx={{ color: 'white', fontSize: '15px' }}>Situação Final</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {orcamentos.map((item) => (
                                        <TableRow key={item._id}>
                                            <TableCell></TableCell>
                                            <TableCell>{item.nome}</TableCell>
                                            <TableCell>{item.telefone}</TableCell>
                                            <TableCell>{item.situacaoInicial}</TableCell>
                                            <TableCell>{item.categoria}</TableCell>
                                            <TableCell>{moment(item.dia).format('DD/MM/YYYY')}</TableCell>
                                            <TableCell>{item.situacaoFinal}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Snackbar open={open} autoHideDuration={5000} onClose={() => { setOpen(false) }}>
                            <Alert severity={severity} variant='filled'>
                                {message}
                            </Alert>
                        </Snackbar>
                    </Box>
                </Container>
            </SidebarSee>
        </>
    )
}

export default Orcamento