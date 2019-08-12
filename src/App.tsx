import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
// import { theme } from 'styled-system'


const App = () => {
  return (
    <Provider>
      <ThemeProvider>
        <BrowserRouter>
          <Switch>
            <Route path="*" component={Header} />
            <Route exact path="/">Home</Route>
            <Route exact path="/login">Login</Route>
            <Route exact path="/watch-list">Watch List</Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
