import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "@primer/components";
import { Header } from "Header";
import { Login } from "./views/Login"
import { Home } from "./views/Home";
import { Auth } from "./views/Auth";
import { WatchListView } from "./views/WatchListView";
import { ProtectedRoute } from "components/ProtectedRoute";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/auth" component={Auth} />
          <ProtectedRoute path="/">
            <ProtectedRoute component={Header} />
            <Switch>
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/watch-list" comonent={WatchListView} />
            </Switch>
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </ThemeProvider >
  );
};

export default hot(App);
