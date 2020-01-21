import React from 'react';
import './../index.css';

function Login(props) {

    const goTo = (e, page) => {
       // console.log(e);
        e.preventDefault();
        props.subParentCallback(page);
    };

    return (
        <div>
        <h1>Login</h1> 
        <form >
            <div >Login: <input type="text" name="login" defaultValue="" /></div>
            <div >Password: <input type="password" name="pass" defaultValue="" /></div>

            <div ><button type="button" onClick={ (e) => goTo(e, 'map') } >Ввод</button> </div>
           
           <div ><a 
            href="#!" 
            onClick={ (e) => goTo(e, 'register') }>или зарегистрируйтесь на сайте</a> </div>

        </form>
            
        </div>
    );
}

export default Login;
