import { Button, Typography,Grid,Stack,TextField,Checkbox,FormControlLabel, FormGroup } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";


const Signup =() =>{

    const signupForm = {
        fullName :"",
        mobile:"",
        email:"",
        password:""
    }

    const signupFormValidation = {
        fullName :{
            state:false,
            message:""
        },
        mobile:{
            state:false,
            message:""
        },
        email:{
            state:false,
            message:""
        },
        password:{
            state:false,
            message:""
        }
    }

    const [input,setInput] =useState(signupForm);
    const [error,setError] =useState(signupFormValidation);

    const requiredValidation = (e)=>{
        const input = e.target;
        required(input);
    }

    const required = (input)=>{
        alert();
    }
    
    const updateValue = (e)=>{
        const input = e.target;
        const key = input.name;
        const value = input.value;
        setInput((oldData)=>{
            return {
                ...oldData,
                [key]: value
            }
        })
    }

    const design = (
        <>
        <Grid container>
            <Grid item sm="7" xs="12">
                <img src="images/auth-big.avif" width="100%" alt="" />
            </Grid>
            <Grid item sx={{
                p:{
                    xs:3,
                    sm:7
                }
            }} sm="5" xs="12" >
                <Typography sx={{
                    mt:{
                        xs:0,
                        sm:3
                    },
                    mb:4
                }} variant="h4">
                    Register
                </Typography>
                {
                    JSON.stringify(input)
                }
                <form>
                    <Stack spacing={3} >
                        <TextField error={error.fullName.state} helperText={error.fullName.message} label="FullName" name="fullName" value={input.fullName} onChange={updateValue} onBlur={requiredValidation} />
                        <TextField error={error.mobile.state} label="Mobile" type="number" name="mobile" value={input.mobile} onChange={updateValue} />
                        <TextField error={error.email.state} label="Email" name="email" value={input.email} onChange={updateValue} />
                        <TextField error={error.password.state} label="Password" type="Password" name="password" value={input.password} onChange={updateValue} />
                        <Stack direction={"row"}
                        justifyContent="space-between"
                        alignItems="center">
                            <FormGroup>
                                <FormControlLabel
                                label="I accept terms and conditions!"
                                control={<Checkbox color="info" />}/>
                            </FormGroup>
                            <Button
                            LinkComponent={Link}
                            to="login"
                            >   
                                Already Have an account
                            </Button>
                        </Stack>
                        <div>
                        <Button variant="contained">Register</Button>
                        </div>
                    </Stack>
                </form>
            </Grid>
        </Grid>
        </>

    );
    return design;
}
export default Signup;