import React, { useContext } from 'react'; 

import { makeStyles } from '@material-ui/core/styles';
import {Logo} from 'loft-taxi-mui-theme'; 
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar'; 
import PropTypes from "prop-types";
import { MainContext } from './context/mainContext'; 

function Header(props) {

    const contextValue = useContext(MainContext);
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
        variant="text" component="a" onClick={ (e) => goTo({ev: e, page: item.id}) }>{item.name}</Button>;
    }

    Elem.propTypes = {
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    };
    
    const goTo = (item) => {
        item.ev.preventDefault();

        if( item.page === 'logout' )
        {
            contextValue.logout();
            props.parentCallback('login');
        }
        else
        {
            props.parentCallback(item.page);
        }
    };
     
    return (
        <Toolbar disableGutters={false} data-testid="headerContainer">
            <Typography  component="p" className={classes.cc}  > 
                    <Logo /> 
            </Typography>

            { contextValue.isLogin ? (
                <>
                    <span data-testid="userInfo">Привет, {contextValue.email} ! Координаты: {contextValue.coord.lng} / {contextValue.coord.lat} / zoom: {contextValue.coord.zoom} </span>
                </>
               )
             : ( 
                <span  data-testid="noUserInfo" ></span>
            )}

            <Elem name="Карта" id="map" />

            { contextValue.isLogin ? (
                <>
                    <Elem name="Профиль" id="profile" />
                    <Elem name="Выход" id="logout" />
                </>
            ) : (
                <Elem name="Login" id="login" /> 
            )}
 
            
            
            
        </Toolbar>
    );

};

Header.propTypes = {
    page: PropTypes.string.isRequired,
    parentCallback: PropTypes.func.isRequired
};


export default Header;