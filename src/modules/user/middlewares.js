import {
    setLoginRequest,
    setLoginSuccess,
    setLoginFail, 
    setLogoutRequest,
    setLogoutSuccess, 

    setRegisterRequest,
    setRegisterSuccess,
    setRegisterFail,
    
    setProfileRequest,
    setProfileSuccess,
    setProfileFail,

    getProfileRequest,
    getProfileFail,
    getProfileSuccess,
  } from './actions';

  const helperValidateEmail = (mail) => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) )
    {
      return true
    } 
    else
    {
      return false
    }
  }

  export const myMid = store => next => action => {

    if (action.type === setLoginRequest.toString()) {
      
      let errorMessages = {}; 
      let isError = false; 

      if( !action.payload.email ) 
      {
        errorMessages.email = 'Empty email!';
        isError = true;
      }
      else if( !helperValidateEmail(action.payload.email ) ) 
      {
        errorMessages.email = 'Wrong email format!';
        isError = true;
      }

      if( !action.payload.password ) 
      {
        errorMessages.password = 'Empty password!';
        isError = true;
      }
      
      if( !isError )
      {
        fetch('https://loft-taxi.glitch.me/auth',
          {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "email": action.payload.email, 
              "password": action.payload.password
            })
          }
        )
        .then(response => response.json())
        .then(result => {
          if( result.success )
            store.dispatch(setLoginSuccess({token: result.token, email: action.payload.email, successMessage: 'Вы успешно авторизованы!'}));
          else
            store.dispatch(setLoginFail({general: result.error}));
        })
        .catch(error => {
          if( error )
            store.dispatch(setLoginFail({general: error}));
        });
      }
      else
      { 
        store.dispatch(  setLoginFail(errorMessages) );
      }      
    }
    else if (action.type === setLogoutRequest.toString()) {  
      store.dispatch(  setLogoutSuccess() );
    }
    else if (action.type === setRegisterRequest.toString()) {

      let errorMessages = {};
      let isError = false; 

      if( !action.payload.email ) 
      {
        errorMessages.email = 'Empty email!';
        isError = true; 
      }
      else if( !helperValidateEmail(action.payload.email ) ) 
      {
        errorMessages.email = 'Wrong email format!';
        isError = true; 
      }

      if( !action.payload.password ) 
      {
        errorMessages.password = 'Empty password!';
        isError = true; 
      }

      if( !action.payload.name ) 
      {
        errorMessages.name = 'Empty name!';
        isError = true; 
      }

      if( !action.payload.surname ) 
      {
        errorMessages.surname = 'Empty surname!';
        isError = true; 
      }


      if( !isError )
      {
        fetch('https://loft-taxi.glitch.me/register',
          { 
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "email": action.payload.email, 
              "password": action.payload.password, 
              "name": action.payload.name, 
              "surname": action.payload.surname
            })
          }
        )
        .then(response => response.json())
        .then(result => {
          if( result.success )
            store.dispatch(setRegisterSuccess({successMessage: "Вы успешно зарегистрированы!"}));
          else
            store.dispatch(setRegisterFail({general: result.error}));
        })
        .catch(error => {
          if( error )
            store.dispatch(setRegisterFail({general: error}));
        });
      }
      else
      { 
        store.dispatch(  setRegisterFail(errorMessages) );
      }      
    } 


    else if (action.type === setProfileRequest.toString()) {  

      fetch('https://loft-taxi.glitch.me/card',
      { 
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "cardNumber": action.payload.cardNumber, 
          "expiryDate": action.payload.expiryDate, 
          "cardName": action.payload.cardName, 
          "cvc": action.payload.cvc, 
          "token": action.payload.token
        })
        }
      )
      .then(response => response.json())
      .then(result => {
        if( result.success ){
          store.dispatch(setProfileSuccess({
            successMessage: "Данные карты успешно сохранены!",
            "cardNumber": action.payload.cardNumber, 
            "expiryDate": action.payload.expiryDate, 
            "cardName": action.payload.cardName, 
            "cvc": action.payload.cvc, 
          }));
        }
        else
          store.dispatch(setProfileFail({general: result.error}));
      })
      .catch(error => {
        if( error )
          store.dispatch(setProfileFail({general: error}));
      });
 
    }
    else if (action.type === getProfileRequest.toString()) {  
      fetch('https://loft-taxi.glitch.me/card?token='+action.payload.token)
      .then(response => response.json())
      .then(result => {
        if( result.id ){
          store.dispatch(getProfileSuccess({ 
            "cardNumber": result.cardNumber, 
            "expiryDate": result.expiryDate, 
            "cardName": result.cardName, 
            "cvc": result.cvc, 
          }));
        }
        else
          store.dispatch(getProfileFail({general: result.error}));
      });
    } 
    
    const result = next(action); 
    return result;
  };