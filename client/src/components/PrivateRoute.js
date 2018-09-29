import React from "react";
import {Redirect, Route} from "react-router-dom";
import authHelpers from "../helpers/auth.helpers"

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props => {
        const validToken = authHelpers.isValid()
        console.log("Token is", validToken)
        if(!validToken) {
          authHelpers.logout();
          return (<Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />)
        }
        else {
          return  <Component {...props} />
        }
      }
    }
    />
  );
  export default PrivateRoute