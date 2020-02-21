import React from 'react'; 

import { Link, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Logo} from 'loft-taxi-mui-theme'; 
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';  
import { useSelector  } from 'react-redux'; 
import { compose  } from 'redux'; 
import { withStyles } from '@material-ui/core/styles'; 
import Styles from '../css/commonCss';

import AllSelectors from '../modules/user/selectors';

function Header(props) {

    const isLogged = useSelector( AllSelectors.getIsLogged );
    const userData = useSelector( AllSelectors.getCurrentUserData );
    const useStyles = makeStyles({ 
        cc: {
            flexGrow: 1
        },
        links: {
            fontWeight: 'normal'
        }
    });

    const classes = useStyles(); 
    const Elem = (item) => {

        return <Button 
        variant="text" component={Link} to={item.to} >{item.name}</Button>;
    }

    //  Координаты: {contextValue.coord.lng} / {contextValue.coord.lat} / zoom: {contextValue.coord.zoom} 
    
    return (
        <Toolbar disableGutters={false} data-testid="headerContainer">
            <Typography  component="p" className={classes.cc}  > 
                    <Logo /> 
            </Typography>
            { isLogged ? (
                <>
                    <span data-testid="userInfo">Привет, {userData.email} !</span>
                </>
               )
             : ( 
                <span  data-testid="noUserInfo" ></span>
            )} 
 
             <Elem  to="/map" id="map" name="Карта" /> 

            { isLogged ? (
                <>
                <Elem  to="/profile" id="profile" name="Профиль" />  
                <Elem  to="/logout" id="logout" name="Выход" />  
                </>
            ) : (
                <Elem  to="/login" id="login" name="Login" />   
            )}
        </Toolbar>
    );
};



export default compose( 
    withRouter,
    withStyles(Styles)
  )( Header );   