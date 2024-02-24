import { Box, Menu } from "@mui/material"
import { MenuItem, Sidebar, SubMenu } from "react-pro-sidebar"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from "react-router-dom";

const SidebarSee = () => {
    return (
        <>
            <Box sx={{ display: 'flex', width: '100%' }} >
                <Sidebar>
                    <Menu iconShape='round'>
                        <MenuItem
                            icon={<HomeOutlinedIcon />} 
                            component={<Link to={'/'} />} >Home</MenuItem>
                        <SubMenu>
                            <MenuItem>Financeiro</MenuItem>
                            <MenuItem></MenuItem>
                            <MenuItem></MenuItem>
                        </SubMenu>
                    </Menu>
                </Sidebar>
            </Box>
        </>
    )
}

export default SidebarSee