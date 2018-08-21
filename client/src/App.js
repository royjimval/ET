import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import {setCurrentUser} from './accions/auhActions'

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
import AddProduct from './components/Admin/addProduct/addProduct'
import ReportsView from './components/Admin/Reports/ReportsView';
import AddIngredient from './components/Admin/addIngredient/addIngredient';
import Inventory from './components/Admin/Inventory/Inventory';

//check for tokens
if(localStorage.jwtToken){
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decode token to use data user
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user ans is aunthenticated
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Provider store = { store } >
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/ClientStart" component={ClientStart} />
            <Route exact path="/Menu" component={Item} />
            <Route exact path="/Admin" component={NavBarAdmin} />
            <Route path="/Order" component={Order} />
            <Route path="/Waiter" component={Waiter} />
            <Route path="/Chef" component={Chef} />
            <Route exact path="/Grafica" component={Grafica} />
            <Route path="/General" component={General} />
            <Route path="/User" component={Usuario} />
            <Route path="/Cashier" component={Cashier} />
            <Route path="/addProduct" component={AddProduct} />
            <Route path="/ReportsView" component={ReportsView} />
            <Route path="/addIngredient" component= {AddIngredient} />
            <Route path="/inventory" component={Inventory} />
          </div>
        </Router>
  </Provider>
    );
  }
}

export default App;
