import React from 'react';
import logo from './mylogo.svg';


class Header extends React.Component { 
    render() {
        return <div>
            <button onClick={this.props.parentCallback.bind(this, 'map')} >Карта</button> 
            <button onClick={this.props.parentCallback.bind(this, 'profile')} >Profile</button> 
            <button onClick={this.props.parentCallback.bind(this, 'login')}>Login</button> 
        </div>;
    }

  
}

export default Header;