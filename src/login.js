import React from 'react';
import './index.css';

class Login extends React.Component {
    render() {
        return <div>
            <h1>Login</h1>
<form >
<div >Login: <input type="text" name="login" value="" /></div>
<div >Password: <input type="password" name="pass" value="" /></div>
<div ><button >Ввод</button> </div>
</form>
            
          </div>;
      }
}  

export default Login;
