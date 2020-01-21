import React from 'react';
import './styles.css';

import Profile from './pages/profile';
import Map from './pages/map';
import Login from './pages/login';
import Reg from './pages/reg';

function Page(props) {

    console.log(props);

    const subParentCallback = (page) => {
        props.parentCallback(page);
    };
  
   if( props.page === 'profile' )
    {
        return <Profile  subParentCallback={subParentCallback} />;
    }
    else if( props.page === 'map' )
    {
        return <Map  subParentCallback={subParentCallback} />;
    }
    else if( props.page === 'login' )
    {
        return <Login  subParentCallback={subParentCallback} />;
    }
    else if( props.page === 'register' )
    {
        return <Reg subParentCallback={subParentCallback} />;
    }
}

export default Page;