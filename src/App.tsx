import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "@primer/components";
import { Header } from "layout/Header";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="*" component={Header} />
          <Route exact path="/">
            Home
          </Route>
          <Route exact path="/login">
            Login
          </Route>
          <Route exact path="/watch-list">
            Watch List
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default hot(App);
