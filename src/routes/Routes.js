import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from '../components/Nav/Nav';
import TestListContainer from '../containers/TestListContainer/TestListContainer';
import TestContainer from '../containers/TestContainer/TestContainer';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Route path="/" exact component={TestListContainer}></Route>
        <Route path="/test" component={TestContainer}></Route>
      </Router>
    );
  }
}

export default Routes;