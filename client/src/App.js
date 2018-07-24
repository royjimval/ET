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
import NavBarAdmin from './components/Admin/navbar/navbar';
import Grafica from './components/Admin/Graficas/grafica';
import General from './components/Admin/General/General';
import Usuario from './components/Admin/Usuario/Usuario';

class App extends Component {
  render() {
    return (
      <Provider store = { store } >
        <Router>
          <div>
            <Route exact path="/Menu" component={Item} />      
            <Route exact path="/Admin" component={NavBarAdmin} />
            <Route exact path="/Nav" component={Item} />
            <Route path="/Categories" component={Cat} />
            <Route path="/Order" component={Order} />
            <Route path="/Waiter" component={Waiter} />
            <Route path="/Chef" component={Chef} />
            <Route exact path="/Grafica" component={Grafica} />
            <Route path="/General" component={General} />
            <Route path="/Usuario" component={Usuario} />
            <Foot/>
          </div>
        </Router>
  </Provider>
    );
  }
}

export default App;
