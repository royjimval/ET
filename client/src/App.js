import React, { Component } from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
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
import InventoryView from './components/Admin/Inventory/Inventoryview';
import NoMatch from './components/NoMatch';

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
            <Switch>
            <Route exact path="/" exact component={Login} />
            <Route exact path="/ClientStart" exact component={ClientStart} />
            <Route exact path="/Menu" exact component={Item} />
            <Route exact path="/Admin" exact component={NavBarAdmin} />
            <Route path="/Order" exact component={Order} />
            <Route path="/Waiter" exact component={Waiter} />
            <Route path="/Chef" exact component={Chef} />
            <Route exact path="/Grafica" exact component={Grafica} />
            <Route path="/General" exact component={General} />
            <Route path="/User" exact component={Usuario} />
            <Route path="/Cashier" exact component={Cashier} />
            <Route path="/addProduct" exact component={AddProduct} />
            <Route path="/ReportsView" exact component={ReportsView} />
            <Route path="/addIngredient" exact component= {AddIngredient} />
            <Route path="/InventoryView" exact component= {InventoryView} />
            <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
  </Provider>
    );
  }
}

export default App;
