import React from "react"
import { Route, Redirect } from "react-router-dom"
import { clientAPI } from "api";


export const PrivateRoute = ({ component: Component, ...rest }: any) => {
    return (
        <Route {...rest} render={props =>
            !!clientAPI.getSessionID() ? <Component {...props} /> : (
                <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
            )
        } />
    )
}

