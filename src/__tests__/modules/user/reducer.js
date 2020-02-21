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

import Reducer from '../../../modules/user/reducer';

import createStore from './../../../store'; 
const store = createStore();

const defaultData = {
    cardData: false,
    isLogged: false,
    error: null,
    coord: {
      lat: 56.838011,
      lng: 60.597465,
      zoom: 12,
    },
    userData: false,
    authToken: false,
    errorMessages: false,
    successMessage: false,
};

describe('user reducer ', () => {

    test('Test default data', () => {

        let res = Reducer({}, { type: null }); 
        expect( res ).toEqual(
            defaultData
        );
    });

    test('Test LOGGED_SUCCESS', () => {
 
        let payloadData = { 
            email: 'kin208spam@gmail.com',
            pass: '123123',
            successMessage: 'Вы успешно авторизованы!'
        }; 
        let res = Reducer({}, { type: 'LOGGED_SUCCESS', payload: payloadData });
          
        expect( res.isLogged ).toBeTruthy();
    });


    test('Test LOGGED_FAIL', () => {
 
        let payloadData = {}; 

        let res = Reducer({}, { type: 'LOGGED_FAIL', payload: payloadData });
          
        expect( res.isLogged ).toBeFalsy();
    });

    test('Test LOGGED_REQUEST', () => {
 
        let payloadData = {}; 
        
        let res = Reducer({}, { type: 'LOGGED_FAIL', payload: payloadData });
          
        expect( res.isLogged ).toBeFalsy();
    });


    test('Test REGISTER_REQUEST', () => {
 
        let payloadData = {
            
            email: 'sdfsdfsdf',
            name: 'test',
            surname: 'surname',
            password: 'password',
        }; 
        
        let res = Reducer({}, { type: 'REGISTER_REQUEST', payload: payloadData });
         
        expect( res.userData ).toEqual(payloadData);
    });


    test('Test REGISTER_SUCCESS', () => {
 
        let payloadData = {successMessage: "Вы успешно зарегистрированы!"}; 
        
        let res = Reducer({}, { type: 'REGISTER_SUCCESS', payload: payloadData });
        
        expect( res.successMessage ).toEqual( payloadData.successMessage );
    });

    test('Test REGISTER_SUCCESS', () => {
 
        let payloadData = {successMessage: "Вы успешно зарегистрированы!"}; 
        
        let res = Reducer({}, { type: 'REGISTER_SUCCESS', payload: payloadData });
         
        expect( res.successMessage ).toEqual( payloadData.successMessage );
    });

    test('Test REGISTER_FAIL', () => {
 
        let payloadData = {general: 'error1'}; 
        
        let res = Reducer({}, { type: 'REGISTER_FAIL', payload: payloadData });
        
        expect( res.errorMessages ).toEqual( payloadData );
    });

    test('Test LOGOUT_REQUEST', () => {
 
        let payloadData = {}; 
        
        let res = Reducer({}, { type: 'LOGOUT_REQUEST', payload: payloadData });
        

        expect( res.isLogged ).toBeFalsy();
    });

    test('Test LOGOUT_SUCCESS', () => {
 
        let payloadData = {}; 
        
        let res = Reducer({isLogged: true}, { type: 'LOGOUT_SUCCESS', payload: payloadData });
         
        expect( res.isLogged ).toBeFalsy();
    });

    test('Test LOGOUT_FAIL', () => {
 
        let payloadData = {}; 
        
        let res = Reducer({isLogged: true}, { type: 'LOGOUT_FAIL', payload: payloadData });
         
        expect( res.isLogged ).toBeTruthy();
    });


    test('Test PROFILE_REQUEST', () => {
 
        let payloadData = {}; 
        
        let res = Reducer({isLogged: true}, { type: 'PROFILE_REQUEST', payload: payloadData });
         
        expect( res.isLogged ).toBeTruthy();
    });


    test('Test PROFILE_SUCCESS', () => {
 
        let payloadData = {
            successMessage: "Данные карты успешно сохранены!",
            "cardNumber": 111, 
            "expiryDate": 222, 
            "cardName": 333, 
            "cvc": 444, 
        }; 
        
        let res = Reducer({isLogged: true}, { type: 'PROFILE_SUCCESS', payload: payloadData });
        
        expect( res.cardData ).toEqual( {
            
            "cardNumber": payloadData.cardNumber, 
            "expiryDate": payloadData.expiryDate, 
            "cardName": payloadData.cardName, 
            "cvc": payloadData.cvc, 
        }  );

        expect( res.successMessage ).toEqual(  payloadData.successMessage 
         );
    });


    test('Test PROFILE_FAIL', () => {
 
        let payloadData = {general: 'err1'}; 
        
        let res = Reducer({isLogged: true}, { type: 'PROFILE_FAIL', payload: payloadData });
        
        expect( res.errorMessages ).toEqual( payloadData );
    });

    test('Test PROFILE_GET_SUCCESS', () => {
 
        let payloadData = { 
            "cardNumber": 111, 
            "expiryDate": 222, 
            "cardName": 333, 
            "cvc": 444, 
        }; 
        
        let res = Reducer({isLogged: true}, { type: 'PROFILE_GET_SUCCESS', payload: payloadData });
        
        expect( res.cardData ).toEqual( payloadData );
    });

    test('Test PROFILE_GET_FAIL', () => {
 
        let payloadData = {general: 'err1'}; 
        
        let res = Reducer({isLogged: true}, { type: 'PROFILE_GET_FAIL', payload: payloadData });
        
        expect( res.errorMessages ).toEqual( payloadData );
    });

});