import { Stack,Drawer,Box,List,ListItem,ListItemIcon,ListItemButton,ListItemText,AppBar,IconButton,Toolbar,LinkComponent} from "@mui/material";
import { Link,Outlet } from "react-router-dom";
import { useState } from "react";

import adminMenu from "../../json-api/menu.json"



const Admin =() =>{

    const [active,setActive] = useState(true);
    const [width,setWidth] = useState(250);

    const controlDrawer = () =>{
            setActive(!active);
            active ? setWidth(0) : setWidth(250)
            
    }
    
    const Nav = ({item}) =>{
        const navDesign = (
            <>
             <ListItem disablePadding>
               <ListItemButton>
                <ListItemIcon>
                    <span class="material-icons">{item.icon}</span>
                </ListItemIcon>
               <ListItemText primary={item.label} />
              </ListItemButton>
             </ListItem>
            </>
        );
        return navDesign
    }

    const design = (
        <>
       <Stack>
        <Drawer variant="persistent"
        open={active}
        sx= {{
            width: width,
            "& .MuiDrawer-paper" : {
                width : width,
                bgcolor:"#f5f5f8",
                transition : ".3s"
            }
        }}>
            <List>
            {
                adminMenu.map((item,index)=>{
                    return <Nav key={index} item={item} />
                })
            }
            </List>
        </Drawer>
        <AppBar
        sx={{
            position : "fixed",
            width : `calc(100% - ${width}px)`,
            transition : ".3s"
        }}>
            <Toolbar>
                <IconButton color="inherit" onClick={controlDrawer}>
                    <span class="material-icons">menu</span>
                </IconButton>
            </Toolbar>
        </AppBar>
        <Stack
        sx={{
            ml:`${width}px`,
            p:3,
            mt:4,
            transition : ".3s"
        }}>
            <h1>Just for code</h1>
        </Stack>
       </Stack>
        </>

    );
    return design;
}
export default Admin;