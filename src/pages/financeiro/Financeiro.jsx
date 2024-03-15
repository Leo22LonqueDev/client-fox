import { Alert, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Paper, Select, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import SidebarSee from "../../components/Sidebar/Sidebar"
import { orange } from "@mui/material/colors"
import axios from "axios"
import { useEffect, useState } from "react"
import moment from "moment"

const Financeiro = () => {

    const [open, setOpen] = useState(false)
    const [openFinanceiro, setOpenFinanceiro] = useState(false)
    const [severity, setSeverity] = useState('')
    const [message, setMessage] = useState('')
    const [nomeProduto, setNomeProduto] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [tipoPagamento, setTipoPagamento] = useState('')
    const [dataPagamento, setDataPagamento] = useState('')
    const [valor, setValor] = useState('')
    const [flushHook, setFlushHook] = useState(false)
    const [financeiro, setFinanceiro] = useState([])

    const handleClose = async () => {
        setOpen(false)
    }

    const openCriarFinanceiro = async () => {
        setOpenFinanceiro(true)
    }

    const handleAddFinanceiro = async () => {
        try {
            if ((nomeProduto === '') || (quantidade === '') || (tipoPagamento === '') || (valor === '') || (dataPagamento === '')) {
                setOpen(true)
                setMessage('Dados faltando, favor inserir todos os campos!')
                setSeverity('warning')
                return
            }
            const criarFinanceiro = await axios.post(`${process.env.REACT_APP_BACKEND}/financeiro/createFinanceiro`, {
                nomeProduto: nomeProduto,
                quantidade: quantidade,
                tipoPagamento: tipoPagamento,
                valor: valor,
                dataPagamento: dataPagamento,
            })
            console.log(criarFinanceiro);
            setOpen(true)
            setMessage('Financeiro criado com sucesso!')
            setSeverity('success')
            return
        } catch (error) {
            console.log(error);
        }
    }

    const fetchData = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_BACKEND}/financeiro/getFinanceiro`)
            console.log(result);
            setFinanceiro(result.data)
            return
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
        setFlushHook(false)
    }, [flushHook])

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
                            Financeiro
                        </Typography>
                        <Button type='button' variant='contained' color='info' onClick={openCriarFinanceiro} >Adicionar Financeiro</Button>
                    </Box>
                    <Dialog
                        open={openFinanceiro}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Informe os dados do novo Usuario"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" sx={{ display: 'flex', flexDirection: 'column' }}>
                                <TextField type='text' label='Nome Produto/Item' onChange={(e) => { setNomeProduto(e.target.value) }} sx={{ mt: 2 }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                                <TextField type='text' label='Quantidade' onChange={(e) => { setQuantidade(e.target.value) }} sx={{ mt: 2 }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                                <TextField type='text' label='Valor' onChange={(e) => { setValor(e.target.value) }} sx={{ mt: 2 }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                                <FormControl margin='normal' >
                                    <InputLabel id="demo-simple-select-label">Tipo de Pagamento</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={tipoPagamento}
                                        label='Tipo de depagamento'
                                        onChange={(e) => { setTipoPagamento(e.target.value) }}
                                    >
                                        <MenuItem value={'pix'} >PIX</MenuItem>
                                        <MenuItem value={'dinheiro'}>DINHEIRO</MenuItem>
                                        <MenuItem value={'boleto'}>BOLETO</MenuItem>
                                        <MenuItem value={'cheque'}>CHEQUE</MenuItem>
                                        <MenuItem value={'cartaoCredito'}>CARTÃO CRÉDITO</MenuItem>
                                        <MenuItem value={'cartaoDebito'}>CARTÃO DÉBITO</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField type='date' label='Data Realização Pagamento' onChange={(e) => { setDataPagamento(e.target.value) }} sx={{ mt: 2 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        style: {
                                            borderRadius: '10px',
                                        }
                                    }} />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color='error'>Fechar</Button>
                            <Button onClick={handleAddFinanceiro} color='success' autoFocus>Criar</Button>
                        </DialogActions>
                    </Dialog>
                    <Snackbar open={open} autoHideDuration={5000} onClose={() => { setOpen(false) }}>
                        <Alert severity={severity} variant='filled'>
                            {message}
                        </Alert>
                    </Snackbar>
                    <Box
                        sx={{ mt: 10 }}
                    >
                        <TableContainer component={Paper} elevation={3} sx={{ borderRadius: '10px' }}>
                            <Table aria-label="simple table" size='small'>
                                <TableHead sx={{ bgcolor: orange[700] }}>
                                    <TableRow>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Nome Produto/Item</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Data Realização Pagamento</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Quantidade</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Tipo Pagamento</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Valor</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Total</TableCell>
                                        <TableCell sx={{ color: 'white', fontSize: '15px' }}>Ações</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {financeiro.map((item) => (
                                        <TableRow>
                                            <TableCell>{item.nomeProduto}</TableCell>
                                            <TableCell>{moment(item.dataPagamento).format('DD/MM/YYYY')}</TableCell>
                                            <TableCell>{item.quantidade}</TableCell>
                                            <TableCell>{item.tipoPagamento.toUpperCase()}</TableCell>
                                            <TableCell>{item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Container>
            </SidebarSee>
        </>
    )
}

export default Financeiro