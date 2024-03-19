import { Box, IconButton } from "@mui/material"
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import HailOutlinedIcon from '@mui/icons-material/HailOutlined';
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';
import { orange } from "@mui/material/colors";
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const SidebarSee = ({ children }) => {

    const [isOpen, setIsOpen] = useState(localStorage.getItem('isOpen') === 'true')

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        localStorage.setItem('isOpen', isOpen)
    }, [isOpen])

    return (
        <Box sx={{ display: 'flex', width: '100%' }} >
            <Sidebar collapsed={isOpen}>
                <Box display={'flex'} justifyContent={isOpen ? 'center' : 'end'} alignItems={'center'} height={'50px'} bgcolor={orange[700]}>
                    <IconButton color="inherit" onClick={toggleMenu}>
                        {isOpen ? <MenuIcon /> : <KeyboardArrowLeftIcon />}
                    </IconButton>
                </Box>
                <Menu iconShape='round'>
                    <MenuItem icon={<HomeOutlinedIcon />} component={<Link to={'/'} />} >Home</MenuItem>
                    <SubMenu icon={<ContactsOutlinedIcon />} label='Cadastro' >
                        <MenuItem icon={<TimeToLeaveOutlinedIcon />} component={<Link to={'/veiculos'} />} >Veículos</MenuItem>
                        <MenuItem icon={<HailOutlinedIcon />} component={<Link to={'/usuarios'} />} >Usuários</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<ChecklistRtlOutlinedIcon />} label='Planilhas' >
                        <MenuItem icon={<AttachMoneyOutlinedIcon />} component={<Link to={'/financeiro'} />} >Financeiro</MenuItem>
                        <MenuItem icon={<AccessTimeOutlinedIcon />} component={<Link to={'/horaaula'} />} >Hora Aula</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
            <Box width={'100%'} >
                <Box width={'100%'} height={'50px'} bgcolor={orange[700]} display={'flex'} justifyContent={'flex-end'}>
                    <ProfileMenu />
                </Box>
                <Box overflow={'auto'} style={{ height: 'calc(100vh - 50px)' }}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}

export default SidebarSee