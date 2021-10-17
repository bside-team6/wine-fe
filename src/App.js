import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin" component={Routes.Admin} />
      </Switch>
    </Router>
  );
}

export default App;
