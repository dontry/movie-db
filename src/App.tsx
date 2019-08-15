import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import { theme } from "@primer/components";
import { configureStore } from 'store'
import { rootSaga } from 'sagas'
import Header from "layout/Header";
import { Login } from "views/Login";
import Home from "views/Home";
import { WatchlistView } from "views/WatchlistView";
import Auth from "views/Auth";
import ProtectedRoute from "components/ProtectedRoute";
import LoadingSpinner from "components/LoadingSpinner";
import "react-toastify/dist/ReactToastify.css";

const { store, persistor } = configureStore();
store.runSaga(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={"Loading"} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/auth" component={Auth} />
              <ProtectedRoute path="/">
                <ProtectedRoute component={Header} />
                <Switch>
                  <ProtectedRoute exact path="/" component={Home} />
                  <ProtectedRoute exact path="/watchlist" comonent={WatchlistView} />
                </Switch>
              </ProtectedRoute>
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
};

export default hot(App);
