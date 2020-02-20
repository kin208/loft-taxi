import React from 'react'; 
import { Link, withRouter, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles'; 
import AllActions from '../modules/user/actions';
import AllSelectors from '../modules/user/selectors';
import Styles from '../css/commonCss';
import { Paper, Grid, TextField, Button, Typography  } from '@material-ui/core';

import { useDispatch, useSelector   } from 'react-redux'; 

function Login(props) {  

  const dispatch = useDispatch();
     
  const successMessage = useSelector( AllSelectors.getSuccessMessage ); 
  const isLogged = useSelector( AllSelectors.getIsLogged ); 
  const userData = useSelector( AllSelectors.getCurrentUserData ); 
  const errorMessages = useSelector( AllSelectors.getErrorMessages ); 
  const setLoginRequest = (obj) => dispatch( AllActions.setLoginRequest(obj)); 

  const proceedForm = (e) => {
    e.preventDefault();

     let res = setLoginRequest(
      {
        email: e.target.login.value, 
        password: e.target.pass.value
      } 
    ); 
  };

  return (
    <>
    { isLogged ? (
      <>
        <Redirect to="/map" />

        { successMessage ? (
        <div className={props.classes.success} data-testid="successMessage"  >{successMessage}</div>
        ) : ('')}
      </>
      ) : ( 
       <div className={props.classes.wrapper}>
            <Paper elevation={4}  className={props.classes.cc} >
                <Grid container={true} >
                    <Grid item={true} xs={12} >
                        <Typography variant="h4">Login</Typography> 
                            <div className={props.classes.emptyLine}> </div>
                            { errorMessages.general ? (
                            <div className={props.classes.error} >{errorMessages.general}</div>
                            ) : ('')}



                        <form  onSubmit={ proceedForm }  data-testid="loginForm" >


                        <div className={props.classes.ccc} >
                            <TextField fullWidth={true} name="login" defaultValue={userData.email} className={props.classes.inp2}  
                             placeholder="Login" data-testid="login" /> 
                             { errorMessages.email ? (
                              <div className={props.classes.error} data-testid="loginError" >{errorMessages.email}</div>
                              ) : ('')}

                            <div className={props.classes.emptyLine} ></div>

                            <TextField fullWidth={true} data-testid="pass"  type="password" className={props.classes.inp2} 
                             placeholder="Password" name="pass" defaultValue=""  />  
                             { errorMessages.password ? (
                              <div className={props.classes.error} data-testid="passError"  >{errorMessages.password}</div>
                              ) : ('')}

                            <div className={props.classes.emptyLine}> </div>
                            <Button type="submit" fullWidth={true} color="primary"  data-testid="submitButton" 
                            >Ввод</Button> 
                        </div>

                        <div style={{ textAlign: 'center' }}>
                          <Link to="/register" data-testid="registerLink" >
                            или зарегистрируйтесь на сайте
                          </Link> </div>

                        </form>
                    </Grid>
                </Grid>
            </Paper>
        </div>
      )} 
    </>
  );
} 
 
export default withRouter( withStyles(Styles)(Login) ); 