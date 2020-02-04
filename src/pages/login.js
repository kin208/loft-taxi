import React, { useContext } from 'react';
import PropTypes from "prop-types";

import { MainContext } from '../context/mainContext';
import { withStyles } from '@material-ui/core/styles'; 
import { Paper, Grid, TextField, Button, Typography  } from '@material-ui/core';
import Styles from '../css/commonCss';

function Login(props) {
    const contextValue = useContext(MainContext);

    const goTo = (e, page) => {
       // console.log(e);
        e.preventDefault();


        //MainContext.proceedLogin( {email: '111', password: '222'} );
        props.subParentCallback(page);
    };

    const proceedForm = (e) => {
        e.preventDefault();
        
        contextValue.proceedLogin( {
                email: e.target.login.value, 
                password: e.target.pass.value
            } 
        );
        
        props.subParentCallback('map');
    };
    
    return (
        <div className={props.classes.wrapper}>
            <Paper elevation={4}  className={props.classes.cc} >
                <Grid container={true} >
                    <Grid item={true} xs={12} >
                        <Typography variant="h4">Login</Typography> 
                            <div className={props.classes.emptyLine}> </div>
                        <form  onSubmit={ proceedForm }  data-testid="loginForm" >


                        <div className={props.classes.ccc} >
                            <TextField fullWidth={true} name="login" defaultValue={contextValue.email} className={props.classes.inp2}  
                             placeholder="Login" /> 

                            <div className={props.classes.emptyLine} ></div>

                            <TextField fullWidth={true} type="password" className={props.classes.inp2} 
                             placeholder="Password" name="pass" defaultValue=""  /> 
                            <div className={props.classes.emptyLine}> </div>
                            <Button type="submit" fullWidth={true} color="primary"
                            >Ввод</Button> 
                        </div>

                        <div style={{ textAlign: 'center' }}><a 
                            href="#!" 
                            onClick={ (e) => goTo(e, 'register') }  data-testid="registerLink" >или зарегистрируйтесь на сайте</a> </div>

                        </form>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

Login.propTypes = {
    subParentCallback: PropTypes.func.isRequired
};


export default withStyles(Styles)(Login);  
