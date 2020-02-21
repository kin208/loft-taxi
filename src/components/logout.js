import React from 'react'; 
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles'; 
import Styles from '../css/commonCss';
import AllActions from '../modules/user/actions';
import { Paper, Grid, Typography  } from '@material-ui/core';
import { useDispatch } from 'react-redux'; 
import { compose  } from 'redux'; 
 
function Logout(props) {  

    
    const dispatch = useDispatch();
    dispatch( AllActions.setLogoutRequest() );

    return (
        <> 
            <div className={props.classes.wrapper} data-testid="logoutWrapper" >
                <Paper elevation={4}  className={props.classes.cc} >
                    <Grid container={true} >
                        <Grid item={true} xs={12} >
                            <Typography variant="h4">Logout</Typography> 
                                <div className={props.classes.emptyLine}> </div>
                                <div>Вы успешно вышли из аккаунта</div>
                                <Link to="/login">Авторизоваться снова</Link>
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
  )( Logout );    