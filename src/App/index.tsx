import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from '../components/Header';
import Home from '../pages/Home'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about">

        </Route>
        <Route path="/works">
          
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;