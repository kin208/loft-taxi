import React from 'react'; 
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles'; 
import Styles from '../css/commonCss';
import Profileform from '../forms/profileForm';
import AllActions from '../modules/user/actions';
import AllSelectors from '../modules/user/selectors';
import { Paper, Grid, TextField, Button, Typography  } from '@material-ui/core';
import { useDispatch, useSelector  } from 'react-redux'; 
import { compose  } from 'redux'; 
 
function Profile(props) {  
  const dispatch = useDispatch();
  const cardData = useSelector( AllSelectors.getCardData ); 
  const successMessage = useSelector( AllSelectors.getSuccessMessage ); 
  const errorMessages = useSelector( AllSelectors.getErrorMessages ); 
  const setProfileRequest = (obj) => dispatch( AllActions.setProfileRequest(obj));
  const authToken = useSelector( AllSelectors.getAuthToken );
  
  const getProfileRequest = (obj) => dispatch( AllActions.getProfileRequest(obj));

  if( !cardData )
    getProfileRequest({token: authToken});

  const proceedForm = (e) => { 

    setProfileRequest(
      {
        cardNumber: e.target.cardNumber.value, 
        expiryDate: e.target.expiryDate.value, 
        cardName: e.target.cardName.value, 
        cvc: e.target.cvc.value, 
        token: authToken
      } 
    );  
  };


  return (
    <>
      <div className={props.classes.wrapper} data-testid="profileWrapper">
        <Paper elevation={4}  className={props.classes.cc} >
            
                <Typography variant="h4">Profile</Typography>  
                            { errorMessages.general ? (
                            <div className={props.classes.error} >{errorMessages.general}</div>
                            ) : ('')}

                  <Grid container={true} >
                      <Grid item={true} xs={12} >

                    
                      { cardData ? (
                        <div data-testid="profileFormContainer">
                        <Profileform 
                          classes={props.classes}
                          cardData={cardData} 
                          errorMessages={errorMessages}  
                          proceedForm={proceedForm}
                          successMessage={successMessage}
                          
                        />
                        </div>
                        ) : (
                          <div  data-testid="loading">Загрузка данных...</div>
                        )}
                      </Grid>
            </Grid>
                      
        </Paper>
      </div>
    </>
  );
} 

export default compose( 
  withRouter,
  withStyles(Styles)
)( Profile );      