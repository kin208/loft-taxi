import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {  
  setLoginSuccess,
  setLoginFail,  
  setLogoutSuccess,
  setLogoutFail,
   
  setRegisterSuccess,
  setRegisterFail ,
  setRegisterRequest,
 
  setProfileSuccess,
  setProfileFail, 
  getProfileSuccess,
  getProfileFail,
  getProfileRequest,
  
  setMapCoord,
} from './actions';  

const isLogged = handleActions(
  {
   [setLoginSuccess]: () => true,
   [setLogoutSuccess]: () => false, 
  },
  false,
);

const userData = handleActions(
  { 
    [setRegisterRequest]: (_state, action) => { 
      return {
        email: action.payload.email,
        password: action.payload.password,
        name: action.payload.name,
        surname: action.payload.surname, 
      }
    },
    [setLoginSuccess]: (_state, action) => { 
      return {email: action.payload.email}
    },
    [setRegisterSuccess]: (_state, action) => action.payload,
    [setProfileSuccess]: (_state, action) => {
      return action.payload;
    }
  },
  false,
);


const cardData = handleActions(
  {  
    [getProfileSuccess]: (_state, action) => {
      return {
        cardNumber: action.payload.cardNumber, 
        expiryDate: action.payload.expiryDate, 
        cardName: action.payload.cardName, 
        cvc: action.payload.cvc
      }
    },
    [setProfileSuccess]: (_state, action) => {
      return {
        cardNumber: action.payload.cardNumber, 
        expiryDate: action.payload.expiryDate, 
        cardName: action.payload.cardName, 
        cvc: action.payload.cvc
      }
    },
    [setLogoutSuccess]: () => false,
  },
  false,
);

const successMessage = handleActions(
  { 
    [setRegisterSuccess]: (_state, action) => action.payload.successMessage,
    [setProfileSuccess]: (_state, action) => action.payload.successMessage,
    [setLoginSuccess]: (_state, action) => action.payload.successMessage,
    [getProfileRequest]: () => false,
  },
  false,
);

const errorMessages = handleActions(
  { 
    [setLoginFail]: (_state, action) => action.payload,
    [setRegisterFail]: (_state, action) => action.payload,
    [setLogoutFail]: (_state, action) => action.payload,
    [setProfileFail]: (_state, action) => action.payload,
    [getProfileFail]: (_state, action) => action.payload,
    
    [setLoginSuccess]: () => false,
    [setRegisterSuccess]: () => false,
    [setLogoutSuccess]: () => false,
    [setProfileSuccess]: () => false,
  },
  false,
);

const error = handleActions(
  {
    [setRegisterFail]: () => true,
    [setLogoutFail]: () => true,
    [setLoginFail]: () => true,
    [setProfileFail]: () => true,
    
    [setRegisterSuccess]: () => false,
    [setLogoutSuccess]: () => false,
    [setLoginSuccess]: () => false, 
    [setProfileSuccess]: () => false, 
  },
  null,
);

const authToken = handleActions(
  {
    [setLoginSuccess]: (_state, action) => {  
      return action.payload.token;
    },
    [setLogoutSuccess]: () => false,
  },
  false
);

const coord = handleActions(
  {
   [setMapCoord]: (_state, action) => { 
     return action.payload;
  },
  },
  {
    lng: 60.597465,
    lat: 56.838011,
    zoom: 12
  }
);

export default combineReducers({ 
    isLogged,
    error,
    coord,
    userData,
    authToken,
    errorMessages,
    successMessage,
    cardData
});