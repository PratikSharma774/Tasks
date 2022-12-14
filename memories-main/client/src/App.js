import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {BrowserRouter,Switch,Routes,Route} from 'react-router-dom'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from "./components/Auth/Auth";
const App = () => {
  // const [currentId, setCurrentId] = useState(0);
  // const dispatch = useDispatch();
  // const classes = useStyles();

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId, dispatch]);

  return (
    <>
    <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar/>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
      {/* <Home/> */}
    </Container>
    </BrowserRouter>
    </>
  );
};

export default App;
