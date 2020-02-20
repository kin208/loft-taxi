import React from 'react';
import './App.css';
import { Route  } from 'react-router-dom';
import Map from './components/map.js';
import Profile from './components/profile.js';
import Header from './components/header.js';
import Login from './components/login.js';
import Register from './components/register.js';
import Logout from './components/logout.js';
import PrivateRouter from "./PrivateRouter";

import AppBar from '@material-ui/core/AppBar'; 
import { CssBaseline } from '@material-ui/core';

function App() {
     
    return (
        <div className="App"  data-testid="AppContainer">
         <CssBaseline />

         <AppBar component="header" elevation={4}  style={{backgroundColor: '#ffffff'}} 
        position="static">
            <Header />
        </AppBar>
        <>
            <PrivateRouter path="/" component={Map} exact />
            <PrivateRouter path="/map" component={Map} exact /> 
            <Route path="/login" component={Login} exact />  
            
            <Route path="/register" component={Register} exact />  
            <Route path="/logout" component={Logout} exact />  
            
            <PrivateRouter path="/profile" component={Profile} exact />
        </>
        </div>
    ); 
} 

export default App;