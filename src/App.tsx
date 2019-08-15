import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "@primer/components";
import { configureStore } from 'store'
import { rootSaga } from 'sagas'
import Header from "layout/Header";
import { Login } from "views/Login";
import { Home } from "views/Home";
import { WatchListView } from "views/WatchListView";
import Auth from "views/Auth";
import ProtectedRoute from "components/ProtectedRoute";

const store = configureStore();
store.runSaga(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
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
      </ThemeProvider>
    </Provider>
  );
};

export default hot(App);
