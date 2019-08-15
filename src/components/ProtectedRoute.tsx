import React from "react";
import { connect } from 'react-redux'
import { Route, Redirect } from "react-router-dom";
import { clientAPI } from "api";
import { RootState } from "reducers/state";

export const ProtectedRoute = ({ component: Component, user, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={props =>
        !!user ? (
          <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
          )
      }
    />
  );

};

const mapStateToProps = (state: RootState) => ({
  user: state.user
})

export default connect(mapStateToProps)(ProtectedRoute)
