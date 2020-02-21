import React from 'react'; 
import { Link, withRouter, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles'; 
import AllActions from '../modules/user/actions';
import Styles from '../css/commonCss';
import { useDispatch, useSelector  } from 'react-redux'; 
import AllSelectors from '../modules/user/selectors';
import { Paper, Grid, TextField, Button, Typography  } from '@material-ui/core';
import { compose  } from 'redux'; 
 
 
function Register(props) {  

  const successMessage = useSelector( AllSelectors.getSuccessMessage ); 
  const dispatch = useDispatch();
  const setRegisterRequest = (obj) => dispatch( AllActions.setRegisterRequest(obj));
  const errorMessages = useSelector( AllSelectors.getErrorMessages );  

  const proceedForm = (e) => {
      e.preventDefault();
      
      
      setRegisterRequest(
        {
          email: e.target.email.value, 
          password: e.target.password.value, 
          name: e.target.name.value, 
          surname: e.target.surname.value
        } 
      ); 
  };

  return (
    <>
      { successMessage ? (
        <Redirect to="/login" />
      ) : ( 
      <div className={props.classes.wrapper}>
        <Paper elevation={4}  className={props.classes.cc} >
            <Grid container={true} >
                <Grid item={true} xs={12} >
                    <Typography variant="h4">Регистрация</Typography> 
                    <div>Уже зарегистрированы? 
                      <Link  data-testid="loginLink" to="/login">Войти</Link></div>
                                    <div className={props.classes.emptyLine}> </div>

                    <form  onSubmit={ proceedForm }  data-testid="regForm" >

                    <div className={props.classes.emptyLine}> </div>
                            { errorMessages.general ? (
                            <div className={props.classes.error} data-testid="errorGeneral" >{errorMessages.general}</div>
                            ) : ('')}
                            
                    <div className={props.classes.ccc} > 
                    
                        <TextField type="text" fullWidth={true} name="email" className={props.classes.inp2}  
                         placeholder="E-mail *" /> 
                         { errorMessages.email ? (
                          <div className={props.classes.error} data-testid="errorEmail" >{errorMessages.email}</div>
                          ) : ('')}

                        <div className={props.classes.emptyLine}> </div>

                        <TextField type="text" fullWidth={true} name="name" className={props.classes.inp2}  
                         placeholder="Имя *" /> 
                         { errorMessages.name ? (
                          <div className={props.classes.error} >{errorMessages.name}</div>
                          ) : ('')}

                        <div className={props.classes.emptyLine}> </div>

                        <TextField type="text" fullWidth={true} name="surname" className={props.classes.inp2}  
                         placeholder="Фамилия *" /> 
                         { errorMessages.surname ? (
                          <div className={props.classes.error} >{errorMessages.surname}</div>
                          ) : ('')}

                        <div className={props.classes.emptyLine}> </div>

                        <TextField type="password" fullWidth={true} name="password" className={props.classes.inp2}  
                         placeholder="Пароль *" /> 
                         { errorMessages.password ? (
                          <div className={props.classes.error} >{errorMessages.password}</div>
                          ) : ('')}

                        <div className={props.classes.emptyLine}> </div>

                        <Button type="submit" fullWidth={true} 
                         color="primary" >Регистрация</Button> 

                    </div>
                    </form>
                </Grid>
            </Grid>
        </Paper>
      </div>
      )} 
    </>  
  );
} 

export default compose( 
  withRouter,
  withStyles(Styles)
)( Register );       