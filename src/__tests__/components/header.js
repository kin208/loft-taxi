import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles'; 
import { render, fireEvent, waitForElement  } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "loft-taxi-mui-theme"; // Импортируем саму тему
import Styles from '../../css/commonCss';

import Reducer from '../../modules/user/reducer';
import Header from '../../components/header';

import createStore from './../../store'; 
const store = createStore();

function renderWithRedux(
    ui,
    { initialState, store = createStore(Reducer, initialState) } = {}
) {
    return {
    ...render(
        <Provider store={store}>
        <BrowserRouter>
                <MuiThemeProvider theme={theme}>
                    {ui}
                </MuiThemeProvider>
            </BrowserRouter>
        </Provider>
    ), 
    store,
    }
}

it("renders correctly", () => { 
    
    
    const { queryByTestId } = renderWithRedux( 
        <Header />
    );

    expect(queryByTestId("headerContainer")).toBeTruthy();
});
