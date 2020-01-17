import React from 'react';
import './styles.css';

import Profile from './profile';
import Map from './map';
import Login from './login';


class Page extends React.Component {

    render() {
        if( this.props.page == 'profile' )
        {
            return <Profile />;
        }
        else if( this.props.page == 'map' )
        {
            return <Map />;
        }
        else if( this.props.page == 'login' )
        {
            return <Login />;
        }
    }
    
}

export default Page;