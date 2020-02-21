import React from 'react'; 
import { render, fireEvent, waitForElement  } from '@testing-library/react';
import {
    setLoginRequest,
    setLoginSuccess,
    setLoginFail,
    setLogoutRequest,
    setLogoutSuccess,
    setLogoutFail,
    setRegisterRequest,
    setRegisterSuccess,
    setRegisterFail, 
    setMapCoord,
    
    setProfileRequest,
    setProfileSuccess,
    setProfileFail,
    
    getProfileRequest,
    getProfileSuccess,
    getProfileFail,
} from '../../../modules/user/actions';

import createStore from './../../../store'; 
const store = createStore();

describe('Test actions ', () => {

    test('action setLoginSuccess', () => {
        let data = {
            token: 111, 
            email: 'kin208spam@gmail.com', 
            successMessage: 'Вы успешно авторизованы!'
        };

        let result = {
            type: "LOGGED_SUCCESS",
            payload: data
        };


        expect(
            store.dispatch(
                setLoginSuccess(
                    data
                )
            )
        ).toEqual(result);
    });
});