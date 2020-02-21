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
import ProfileForm from '../../forms/profileForm';

import createStore from './../../store'; 
const store = createStore();


it("Submit button works", () => {

    const cardData = { 
        cardNumber: 1, 
        expiryDate: 2, 
        cardName: 3, 
        cvc: 4, 
    };

    
    const proceedForm = jest.fn();

    const Mock = () => (
        <ProfileForm cardData={cardData} 
                    errorMessages={{}} 
                    proceedForm={proceedForm}
                    />
    );
    const { queryByTestId } = render(<Mock />);

    fireEvent.submit(
        queryByTestId('profileForm'),
        {
            target: {
                cardNumber: {value: '111'},
                expiryDate: {value: '222'},
                cardName: {value: '333'},
                cvc: {value: '444'},
            }
        }
    );
 
    expect(proceedForm).toBeCalled();

});
