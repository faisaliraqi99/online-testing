import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from './components/Nav/Nav';
import TestListContainer from './containers/TestListContainer/TestListContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Route path="/" exact component={TestListContainer}></Route>
      </Router>
    );
  }
}

export default App;
