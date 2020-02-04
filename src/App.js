import React, { useState, useContext } from "react";
import './App.css';
import Header from './header';
import Page from './page';

import AppBar from '@material-ui/core/AppBar';
import { MainContext } from './context/mainContext'; 


function App() {

  const [page, setPage] = useState('map');
  const contextValue = useContext( MainContext );

  console.log("contextValue (1): "+contextValue);

  const parentCallback = (page) => {
    setPage(page);
  };
  
  return (
    <div  data-testid="AppContainer" >
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