import React from 'react';
import './../index.css';

function Reg(props) {


    const goTo = (e, page) => {
       // console.log(e);
        e.preventDefault();
        props.subParentCallback(page);
    };

    return (
        <div>
            <h1>Регистрация</h1>
            <div>Уже зарегистрированы? <a 
            href="#!" 
            onClick={ (e) => goTo(e, 'login') }>Войти</a></div>
            <div>
                <input type="text" name="email" placeholder="E-mail *" />
            </div>
            <div>
                <input type="text" name="name" placeholder="Имя *" />
            </div>
            <div>
                <input type="text" name="surname" placeholder="Фамилия *" />
            </div>

            <div>
                <input type="password" name="password" placeholder="Пароль *" />
            </div>

            <div>
                <input type="submit" value="Регистрация" onClick={ (e) => goTo(e, 'map') } />
            </div>

          </div>
    );
    
}  

export default Reg;