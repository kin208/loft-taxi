import { createSelector } from 'reselect';
   
export const getMapCoord = createSelector(
  state => {
    return state.user.coord;
  },
  coord => {
    return coord;
  }
);

export const getErrorMessages = createSelector(
  state => {
    return state.user.errorMessages;
  },
  errorMessages => {
    return errorMessages;
  }
);

export const getCurrentUserData = createSelector(
  state => {
    return state.user.userData;
  },
  userData => {
    return userData;
  }
); 

export const getCardData = createSelector(
  state => {
    return state.user.cardData;
  },
  cardData => {
    return cardData;
  }
);


export const getAuthToken = createSelector(
  state => {
    return state.user.authToken;
  },
  authToken => {
    return authToken;
  }
);

export const getSuccessMessage = createSelector(
  state => {
    return state.user.successMessage;
  },
  successMessage => {
    return successMessage;
  }
);

export const getIsLogged = createSelector(
  state => {
    return state.user.isLogged;
  },
  isLogged => {
    return isLogged;
  }
); 
 
export default {  
  getIsLogged, 
  getCurrentUserData,
  getMapCoord,
  getErrorMessages,
  getSuccessMessage,
  getAuthToken,
  getCardData
}
