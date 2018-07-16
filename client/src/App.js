import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Item from './components/item/product';
import Cat from './components/item/category';
import Order from './components/order/order';
import Foot from './components/footer/footer';
import Waiter from './components/waiter/waiter';
import Chef from './components/chef/Chef';


class App extends Component {
  render() {
    return (
      <Provider store = { store } >
        <Router>
          <div>
            <Route exact path="/Menu" component={Item} />
            <Route path="/Categories" component={Cat} />
            <Route path="/Order" component={Order} />
            <Route path="/Waiter" component={Waiter} />
            <Route path="/Chef" component={Chef} />
            <Foot/>
          </div>
        </Router>
  </Provider>
    );
  }
}

export default App;
