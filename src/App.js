import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/admin">
            <Routes.Admin />
          </Route>
          <Route path="/wine-note">
            <Routes.WineNote />
          </Route>
          <Route path="/">
            <Routes.Main />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
