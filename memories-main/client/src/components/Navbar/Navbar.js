import React ,{useState,useEffect} from 'react'
import {AppBar,Avatar,Button,Toolbar,Typography} from '@material-ui/core'
import {Link} from 'react-router-dom';
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import memories from '../'
import decode from 'jwt-decode';
import memories from '../../images/memories.png';
const Navbar = () => {
    const classes=useStyles();
    const dispatch=useDispatch();
    const history=useNavigate();
    // const user=null;
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    const logout=()=>{
dispatch({type:'LOGOUT'});
history('/');
setUser(null);
    }
  
    console.log(user);
    useEffect(()=>{
        const token=user?.token;
        //jwt
        if (token) {
            const decodedToken = decode(token);
      
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
          }
        setUser(JSON.parse(localStorage.getItem('profile')))
    } );
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
    <Typography  conponent={Link} to="/" className={classes.heading} variant="h2" align="center">
      Memories
    </Typography>
    <img className={classes.image} src={memories} alt="icon" height="60" />
    </div>
    <Toolbar className={classes.toolbar}>
        {user?(
            <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                <Button  variant="contained" className={classes.logout} color="secondry" onClick={logout}>logout</Button>
            </div>
        ):(
<Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
    </Toolbar>
  </AppBar>
  )
};
export default Navbar;
