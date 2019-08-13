import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "@primer/components";
import { Header } from "Header";
import { PrivateRoute } from "components/ProtectedRoute";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route exact path="/login">
          Login
          </Route>
        <PrivateRoute path="/">
          <Switch>
            <Route path="*" component={Header} />
            <Route exact path="/">
              Home
          </Route>
            <Route exact path="/watch-list">
              Watch List
          </Route>
          </Switch>
        </PrivateRoute>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default hot(App);
