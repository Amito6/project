import { Stack,Drawer,Box,List,ListItem,ListItemIcon,ListItemButton,ListItemText,AppBar,IconButton,Toolbar,LinkComponent, ListSubheader,Collapse,Avatar,MenuItem,Menu,Divider,breadcrumbsClasses,Typography, Breadcrumbs} from "@mui/material";
import { Link,Outlet,useResolvedPath,useMatch,useLocation } from "react-router-dom";
import { useState } from "react";
import { deepOrange } from "@mui/material/colors";
import MediaQuery from "react-responsive";

import adminMenu from "../../json-api/menu.json"



const Admin =() =>{

    const [active,setActive] = useState(true);
    const [width,setWidth] = useState(250);
    const [collapse,setCollapse] = useState(false);
    const [parent,setParent] = useState(null);
    const [activeOnMobile,setActiveOnMobile] = useState(false)
    const location= useLocation();
    const routing =location.pathname.split("/");
    //console.log(routing);
    

    const open = Boolean(parent)

    const openProfileMenu = (e)=>{
    const el = e.currentTarget;
    setParent(el);
    }

    const controlDrawerOnDesktop = () =>{
            //setActive(!active);
            width==250 ? setWidth(70) : setWidth(250)
            
    }
    const controlDrawerOnMobile = () =>{
            setActiveOnMobile(!activeOnMobile);
            activeOnMobile ? setWidth(0) : setWidth(250)
            
    }

    const MenuList = ({item}) =>{
       //console.log(item.menus);
       const menuDesign = (
        <>
        <List subheader=
        {
        <ListSubheader>
            {item.cat}
        </ListSubheader>
        }>
            {
                item.menus.map((menu,index)=>{
                    return <Nav key={index} menu={menu} />
                })
            }
        </List>
        </>
       );
       return menuDesign;
    }
    
    const Nav = ({menu}) =>{
        const resolved = useResolvedPath(menu.link? menu.link : null)
       //console.log(resolved.pathname);

       const activeLink = useMatch({
        path : resolved.pathname,
        end:true
       })
      // console.log(activeLink);
        const navDesign = (
            <>
             <ListItem sx={{py:0}}>
               <ListItemButton 
               LinkComponent={Link}
               to={menu.link? menu.link : null}
               onClick={menu.isDropDown ? ()=>setCollapse(!collapse) : null}
               sx={{
                bgcolor : activeLink && menu.link?  deepOrange[500] :null,
                color : activeLink && menu.link?  "white" :null,
                "&:hover" : {
                    bgcolor: activeLink && menu.link?  deepOrange[300] :null
                }
               }}>
                <ListItemIcon>
                    <span className="material-icons-outlined"
                    style={{color : activeLink && menu.link?  "white" :null}}
                    >{menu.icon}</span>
                </ListItemIcon>
               <ListItemText primary={menu.label} />
               {
                menu.isDropDown ? <span className="material-icons-outlined">expand_more</span> : null
               }
              </ListItemButton>
             </ListItem>
             {
                menu.isDropDown ? <Dropdown dMenu={menu.dropDownMenu} /> : null
             }
            </>
        );
        return navDesign
    }
    
    const Dropdown = ({dMenu}) =>{
            //console.log(dMenu);
            const dropDownDesign =(
                <>
                <Collapse sx={{ml:4}} in = {collapse}>{
                    dMenu.map((data,index)=>{
                        return <Nav menu={data} key={index} />
                    })
                }
                </Collapse>
                </>
            );
            return dropDownDesign;
    }
    
    const DesktopDrawer = () =>{
        const tmp =(
            <>
                   <Drawer variant="persistent"
             open={active}
             onMouseOver={()=>setWidth(250)}
             sx= {{
                 width: width,
                 "& .MuiDrawer-paper" : {
                     width : width,
                     bgcolor:"#fff",
                     transition : ".3s"
                 }
             }}>
                 <List sx={{mt:1,mb:0}} subheader={<ListSubheader>
                     <img src="images/logo.png" width={"150"} alt="brand-logo" />
                 </ListSubheader>} />
                 {
                     adminMenu.map((item,index)=>{
                         return  <MenuList key={index} item={item} />
                     })
                 }
                
                   </Drawer>
            </>
        );
        return tmp;
    }
    const MobileDrawer = () =>{
        const tmp =(
            <>
                   <Drawer variant="temporary"
             open={activeOnMobile}
             onClick={()=>controlDrawerOnMobile}
             sx= {{
                 width: width,
                 "& .MuiDrawer-paper" : {
                     width : width,
                     bgcolor:"#fff",
                     transition : ".3s"
                 }
             }}>
                 <List sx={{mt:1,mb:0}} subheader={<ListSubheader>
                     <img src="images/logo.png" width={"150"} alt="brand-logo" />
                 </ListSubheader>} />
                 {
                     adminMenu.map((item,index)=>{
                         return  <MenuList key={index} item={item} />
                     })
                 }
                
                   </Drawer>
            </>
        );
        return tmp;
    }
        const design = (
            <>
        <Stack>
        <MediaQuery minWidth={1224}>
            <DesktopDrawer />
        </MediaQuery>
        <MediaQuery maxWidth={1224}>
            <MobileDrawer />
        </MediaQuery>
         <AppBar
         elevation={0} //for shadow
         position="fixed"
         sx={{
              
            width : {
                xs:"100%",
                md:`calc(100% - ${width}px)`
            }, 
             transition : ".3s",
             background:"white"
         }}>
             <Stack direction={"row"} justifyContent={"space-between"}>
            <Toolbar>
                <MediaQuery minWidth={1224}>
                <IconButton onClick={controlDrawerOnDesktop}>
                    <span className="material-icons-outlined">menu</span>
                </IconButton>
                </MediaQuery>
                <MediaQuery maxWidth={1224}>
                <IconButton onClick={controlDrawerOnMobile}>
                    <span className="material-icons-outlined">menu</span>
                </IconButton>
                </MediaQuery>
                <IconButton >
                    <span className="material-icons-outlined">email</span>
                </IconButton>
                <IconButton>
                    <span className="material-icons-outlined">web_asset</span>
                </IconButton>
                <IconButton>
                    <span className="material-icons-outlined">star</span>
                </IconButton>
            </Toolbar>
            <Toolbar>
                <IconButton>
                    <span className="material-icons-outlined">notifications</span>
                </IconButton>
                <IconButton>
                    <span className="material-icons-outlined">shopping_cart</span>
                </IconButton>
                <IconButton>
                    <span className="material-icons-outlined">search</span>
                </IconButton>
                <IconButton onClick={openProfileMenu}>
                     <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                </IconButton>
                <Menu open={open} anchorEl={parent} onClick={()=>setParent(null)}
                 PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem>
                    <Avatar />Profile
                    </MenuItem>
                    <MenuItem>
                      My Account
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                    <ListItemIcon>
                        <span style={{marginRight:"12px"}}  className="material-icons-outlined">person_add</span>
                       Add AnotherAccount
                    </ListItemIcon>
                    </MenuItem>
                    <MenuItem>
                    <ListItemIcon>
                        <span style={{marginRight:"12px"}}  className="material-icons-outlined">settings</span>
                       Settings
                    </ListItemIcon>
                    </MenuItem>
                    <MenuItem>
                    <ListItemIcon>
                        <span style={{marginRight:"12px"}} className="material-icons-outlined">logout</span>
                       Logout
                    </ListItemIcon>
                    </MenuItem>
                    
                </Menu>
            </Toolbar>
            </Stack>
        </AppBar>
        <Stack
        sx={{
            ml: {
                xs : 0,
                md : `${width}px`
            },
            p:3,
            mt:4,
            transition : ".3s",
            bgcolor:"#f5f5f5",
            minHeight: "100vh"
        }}>
            <Breadcrumbs sx={{my:4}}>
                {
                    routing.map((item,index)=>{
                        if(index>0)
                        {
                            return <Typography key={index}>{item}</Typography>
                        }
                    })
                }
            </Breadcrumbs>
            <Outlet />
        </Stack>
       </Stack>
        </>

        );
         return design;
}
export default Admin;