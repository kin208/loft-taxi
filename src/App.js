import React, { useState } from "react";
import './App.css';
import Header from './header';
import Page from './page';

import AppBar from '@material-ui/core/AppBar'; 
import { CssBaseline } from '@material-ui/core';

function App() {

  const [page, setPage] = useState('map'); 

  const parentCallback = (page) => {
    setPage(page);
  };
  
  return (
    <div  data-testid="AppContainer" >
      <CssBaseline />
      <AppBar component="header" elevation={4}  style={{backgroundColor: '#ffffff'}} 
        position="static">
        
          <Header page={page} parentCallback={parentCallback} /> 
        
      </AppBar>
 
        <>
          <Page page={page}  parentCallback={parentCallback}/> 
        </>
    </div>
  );

}


export default App;