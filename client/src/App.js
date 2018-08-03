import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import ClientStart from './components/start/ClientStart';
import Login from './components/start/login';
import Item from './components/item/product';
import Order from './components/order/order';
import Waiter from './components/waiter/waiter';
import Chef from './components/chef/Chef';
import NavBarAdmin from './components/Admin/navbar/navbar';
import Grafica from './components/Admin/Graficas/grafica';
import General from './components/Admin/General/General';
import Usuario from './components/Admin/Usuario/Usuario';
import Cashier from './components/cashier/cashier';
class App extends Component {
  render() {
    return (
      <Provider store = { store } >
        <Router>
          <div>
            <Route exact path="/" component={ClientStart} />      
            <Route exact path="/Login" component={Login} />      
            <Route exact path="/Menu" component={Item} />      
            <Route exact path="/Admin" component={NavBarAdmin} />
            <Route exact path="/Nav" component={Item} />
            <Route path="/Order" component={Order} />
            <Route path="/Waiter" component={Waiter} />
            <Route path="/Chef" component={Chef} />
            <Route exact path="/Grafica" component={Grafica} />
            <Route path="/General" component={General} />
            <Route path="/Usuario" component={Usuario} />
            <Route path="/Cashier" component={Cashier} />
          </div>
        </Router>
  </Provider>
    );
  }
}

export default App;
