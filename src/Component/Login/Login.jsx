import { Grid, Container, Stack, Button, TextField,Checkbox,FormControlLabel } from "@mui/material";
import { Link , useNavigate} from "react-router-dom";

const Login =() =>{

    const navigate = useNavigate();

    const login = (e) =>{
        e.preventDefault();
        navigate("/admin-panel")
    }
    
    const design = (
        <>
        <Container>
        <Grid container >
            <Grid item sm="6" xs="12"  > <h1>One</h1></Grid>
            <Grid item sm="6" xs ="12"> 
            <h1>Login</h1>
            <form onSubmit={login}>
                <Stack direction={"column"} spacing={3}>
                   <TextField name ="username" label="username" variant="outlined" />
                   <TextField name ="password" label="password" variant="outlined" type="password" />
                   <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                      <FormControlLabel control={<Checkbox />} label="Remember Me !" />
                      <Button sx={{px:4,fontWeight:"600"}} type="Submit" variant="contained" color="secondary">
                          Login
                      </Button>
                   </Stack> 
                   <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Link to="#" style={{textDecoration: "none"}} >Create New Account</Link>
                    <Link to="#" style={{textDecoration: "none"}} > Forgot Password !</Link>
                   </Stack> 
                </Stack>
            </form>
            </Grid>
        </Grid>
        </Container>
        </>

    );
    return design;
}
export default Login;