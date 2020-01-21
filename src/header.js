import React from 'react';
import logo from './mylogo.svg';


function Header(props) {

    const goTo = (e, page) => {
        // console.log(e);
         e.preventDefault();
         props.parentCallback(page);
     };
 
     return (
        <div>
            <a 
                href="#!" 
                onClick={ (e) => goTo(e, 'map') }>Карта</a>
            &nbsp;&nbsp;&nbsp;
            <a 
                href="#!" 
                onClick={ (e) => goTo(e, 'profile') }>Профиль</a>
            &nbsp;&nbsp;&nbsp;
            <a 
                href="#!" 
                onClick={ (e) => goTo(e, 'login') }>Login</a>
        </div>
     )
};

export default Header;