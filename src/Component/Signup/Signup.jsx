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
        const key = input.name
        const isRequired =  required(input);
        setError((oldData)=>{
        return{
            ...oldData,
            [key]:isRequired
        }

       })
    }
    const emailValidation = (e)=>{
        const input = e.target;
        const key = input.name
        const isRequired =  required(input);
        const isEmail = emailSyntax(input);
        console.log(isEmail);
        setError((oldData)=>{
        return{
            ...oldData,
            [key]: (isRequired.state && isRequired) || isEmail
        }

       })
    }

    const required = (input)=>{
        let value = input.value; 
        if(value.length === 0){
            return{
                state:true,
                message: "This Field is required"
            }
        }
        else{
            return{
                state:false,
                message: ""
            }
        }
        }

    const emailSyntax = (input) =>{
        const value= input.value.trim();
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
        if(regexp.test(value)){
           return{
            state: false,
            message: ""
           }
        }
        else{
            return {
                state:true,
                message:"This is not valid email"
            }
        }
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
            <Grid item sm={7} xs={12}>
                <img src="images/auth-big.avif" width="100%" alt="" />
            </Grid>
            <Grid item sx={{
                p:{
                    xs:3,
                    sm:7
                }
            }} sm={5} xs={12} >
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
                        <TextField error={error.fullName.state} helperText={error.fullName.message} label="FullName" name="fullName" value={input.fullName} onChange={updateValue} onBlur={requiredValidation} onInput={requiredValidation} />
                        <TextField error={error.mobile.state} helperText={error.mobile.message} label="Mobile" type="number" name="mobile" value={input.mobile} onChange={updateValue} onBlur={requiredValidation} onInput={requiredValidation}  />
                        <TextField error={error.email.state} helperText={error.email.message} label="Email" name="email" value={input.email} onChange={updateValue} onBlur={emailValidation} onInput={emailValidation}  />
                        <TextField error={error.password.state} helperText={error.password.message} label="Password" type="Password" name="password" value={input.password} onChange={updateValue} onBlur={requiredValidation} onInput={requiredValidation}  />
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