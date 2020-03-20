import React from 'react';
import './styles/index.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import FirstPage from './containers/FirstPage';
import SecondPage from './containers/SecondPage';
import LastPage from './containers/LastPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={FirstPage} />
      <Route path="/second-page" render={SecondPage} />
      <Route path="/last-page" render={LastPage} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
