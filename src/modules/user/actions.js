import { createAction } from 'redux-actions';

// Log-In
export const setLoginRequest = createAction('LOGGED_REQUEST');
export const setLoginSuccess = createAction('LOGGED_SUCCESS');
export const setLoginFail = createAction('LOGGED_FAIL');

// Log-out
export const setLogoutRequest = createAction('LOGOUT_REQUEST');
export const setLogoutSuccess = createAction('LOGOUT_SUCCESS');
export const setLogoutFail = createAction('LOGOUT_FAIL');

// Register
export const setRegisterRequest = createAction('REGISTER_REQUEST');
export const setRegisterSuccess = createAction('REGISTER_SUCCESS');
export const setRegisterFail = createAction('REGISTER_FAIL');
   
// Profile
export const setProfileRequest = createAction('PROFILE_REQUEST');
export const setProfileSuccess = createAction('PROFILE_SUCCESS');
export const setProfileFail = createAction('PROFILE_FAIL');

export const getProfileRequest = createAction('PROFILE_GET_REQUEST');
export const getProfileSuccess = createAction('PROFILE_GET_SUCCESS');
export const getProfileFail = createAction('PROFILE_GET_FAIL');


// Coordinates
export const setMapCoord = createAction('SET_COORD');

export default {
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
} 