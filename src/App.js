import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Routes.Home />
          </Route>
          <Route path="/admin">
            <Routes.Admin />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
