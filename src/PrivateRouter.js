  
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { 
    getIsLogged
} from './modules/user';
import AllSelectors from './modules/user/selectors';

import {  useSelector  } from 'react-redux'; 
const PrivateRouter = ({ component: Component, ...rest }) => {
  const isLogged = useSelector(AllSelectors.getIsLogged);

  return <Route
    {...rest}
    render={props =>
        isLogged ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
};

const mapStateToProps = state => (
    {
        isLogged: getIsLogged(state)
    }
);

export default connect(
    mapStateToProps,
    {}
  )( PrivateRouter );