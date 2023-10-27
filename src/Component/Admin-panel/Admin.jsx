import { Stack,Drawer,Box,List,ListItem,ListItemIcon,ListItemButton,ListItemText,AppBar,IconButton,Toolbar,LinkComponent} from "@mui/material";
import { Link,Outlet } from "react-router-dom";
import {Dashboard,Menu,Logout} from '@mui/icons-material';
import { useState } from "react";


const Admin =() =>{

    const [active,setActive] = useState(false);


    const design = (
        <>
        <Drawer open = {active} onClick={()=>setActive(!active)}>
            <Box sx={{width:200}}>
                <list>
                <ListItem disablePadding>
                   <ListItemButton LinkComponent={ Link } to="dashboard">
                    <ListItemIcon>
                     <Dashboard />
                    </ListItemIcon>
                   <ListItemText primary="Dashboard" />
                  </ListItemButton>
               </ListItem>
                </list>
            </Box>
        </Drawer>
        <Stack>
            <AppBar sx={{background:"white"}} position="static">
               <Stack direction={"row"} justifyContent={"space-between"}>
               <Toolbar>
                 <IconButton onClick={()=>setActive(!active)}>
                   <Menu />
                </IconButton>
              </Toolbar>
              <Toolbar>
                 <IconButton>
                   <Logout />
                </IconButton>
              </Toolbar>
               </Stack>
            </AppBar>
            <Box>
                <Outlet />
            </Box>
        </Stack>
        </>

    );
    return design;
}
export default Admin;