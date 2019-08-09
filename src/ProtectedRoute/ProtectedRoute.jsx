import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...otherProps }) => {
    return (
      <Route
        {...otherProps}
        render={props => {
          return (
            <Redirect
              to={{
                pathname: "/",
               
              }}
            />
          );
        }}
      />
    );
  };
  
  export default ProtectedRoute;
  