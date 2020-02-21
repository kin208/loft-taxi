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
import Logout from '../../components/logout';

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
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
    }
}

it("renders correctly", () => { 
    
    
    const { queryByTestId } = renderWithRedux( 
        <Logout />
    );


    expect(queryByTestId("logoutWrapper")).toBeTruthy();
});
