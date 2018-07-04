import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/header/header'
import Item from './components/item/product';
import Cat from './components/item/category';
import Order from './components/order/order';
import Foot from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/Menu" component={Item} />
          <Route path="/Categories" component={Cat} />
          <Route path="/Order" component={Order} />
          <Foot/>
        </div>
      </Router>

    );
  }
}

export default App;
