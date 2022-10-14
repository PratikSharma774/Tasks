import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField, Icon } from '@material-ui/core'
import Input from './input'
import jwt_decode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import icon from './icon'
// import {gapi} from 'gapi-script'
// import {GoogleLogin} from 'react-google-login'
import { GoogleLogin } from '@react-oauth/google'
import { GoogleOAuthProvider } from '@react-oauth/google'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlinedIcon'
import useStyles from './styles'
import { signin, signup } from '../../actions/auth'
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmpassword: '' }
const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const [isSignup, setIsSignup] = useState(false)
    const [formdata, setFormdata] = useState(initialState);
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleSubmit = (e) => {
        // submits formdata ab=nd dispatch to action auth.js
        e.preventDefault();
        if (isSignup) {
            dispatch(signup(formdata, history))
        }
        else {
            dispatch(signin(formdata, history))
        }
        console.log(formdata)
    }

    const handleChange = (e) => {
        // changes values
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }

    const switchMode = () => {
        // switch between signin and signup
        setIsSignup((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        console.log(res)
        const decoded = jwt_decode(res.credential);
        console.log(decoded);
        const token = res?.email;
        // const token = res?.tokenId;
        console.log(token);
       

    }
    const googleFailure = (error) => {
        console.log(error)
        console.log("Google Sign in was unsuccessful")
    }

    return (
        // SIgn in form and sign in form
        <Container component="main" mazwidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    {/* <LockOutlinedIcon/> */}
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" autoFocus xs={6} />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} autoFocus xs={6} />

                        {isSignup && <Input name="confirmpassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullwidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
{/* Google Authenticator */}
                    <GoogleOAuthProvider clientId="593953295731-6e59iuv3hhkcnv576dus7lh3qgnkg70e.apps.googleusercontent.com"  >
                        <GoogleLogin
                            // clientId="593953295731-6e59iuv3hhkcnv576dus7lh3qgnkg70e.apps.googleusercontent.com"

                            render={(renderProps) => (
                                <Button className={classes.googleButton}
                                    color="primary"
                                    fullwidth
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    startIcon={<Icon />}
                                    variant="contained">Google sign in</Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookyPolicy="single_host_origin"
                        />


                    </GoogleOAuthProvider>
{/* Logic for turning between signup and signin */}

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already Have an Account?Sign In' : "Donot have an Account?Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </Paper>
        </Container>
    )
};

export default Auth;
