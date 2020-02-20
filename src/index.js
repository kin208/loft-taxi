import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "loft-taxi-mui-theme"; // Импортируем саму тему

import createStore from './store';
const store = createStore();

ReactDOM.render(
    
       <Provider store={store}>
           <BrowserRouter>
                <MuiThemeProvider theme={theme}>
                    <App />
                </MuiThemeProvider>
            </BrowserRouter>
        </Provider> , 
document.getElementById('root'));
 