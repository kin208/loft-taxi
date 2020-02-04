import React, { useContext } from 'react'; 
import PropTypes from "prop-types";
import Styles from '../css/commonCss';
import { MainContext } from '../context/mainContext';
import { withStyles } from '@material-ui/core/styles'; 
import { Paper, Grid, TextField, Button, Typography  } from '@material-ui/core';

function Reg(props) {

    const contextValue = useContext(MainContext);

    const goTo = (e, page) => {
       // console.log(e);
        e.preventDefault();
        props.subParentCallback(page);
    };
    
    const proceedForm = (e) => {
        e.preventDefault();
        
        contextValue.proceedLogin( {
                email: e.target.email.value, 
                password: e.target.password.value
            } 
        );
        
        props.subParentCallback('map');
    };
    
    
    return (
        <div className={props.classes.wrapper}>
            <Paper elevation={4}  className={props.classes.cc} >
                <Grid container={true} >
                    <Grid item={true} xs={12} >
                        <Typography variant="h4">Регистрация</Typography> 
                        <div>Уже зарегистрированы? <a 
                        href="#!" data-testid="loginLink"
                        onClick={ (e) => goTo(e, 'login') }>Войти</a></div>
                                        <div className={props.classes.emptyLine}> </div>

                        <form  onSubmit={ proceedForm }  data-testid="regForm" >

                        <div className={props.classes.ccc} > 
                        
                            <TextField type="text" fullWidth={true} name="email" className={props.classes.inp2}  
                             placeholder="E-mail *" /> 

                            <div className={props.classes.emptyLine}> </div>

                            <TextField type="text" fullWidth={true} name="name" className={props.classes.inp2}  
                             placeholder="Имя *" /> 

                            <div className={props.classes.emptyLine}> </div>

                            <TextField type="text" fullWidth={true} name="surname" className={props.classes.inp2}  
                             placeholder="Фамилия *" /> 

                            <div className={props.classes.emptyLine}> </div>

                            <TextField type="password" fullWidth={true} name="password" className={props.classes.inp2}  
                             placeholder="Пароль *" /> 

                            <div className={props.classes.emptyLine}> </div>

                            <Button type="submit" fullWidth={true} 
                             color="primary" >Регистрация</Button> 

                        </div>
                        </form>
                    </Grid>
                </Grid>
            </Paper>
          </div>
    );
    
}  

Reg.propTypes = {
    subParentCallback: PropTypes.func.isRequired
};

export default withStyles(Styles)(Reg);   