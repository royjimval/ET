import React, { Component } from 'react';
import Nav from '../header/header';
import '../item/item.css';
import BreakfastComponent from './Breakfast'
import MealComponent from './Meals'
import Diner from './Dinner'
import Drink from './Drinks'

export default class Item extends Component {

    render() {
        return (
            <div>
                <Nav />
                <BreakfastComponent />
                <MealComponent/>
                <Diner/>
                <Drink/>

            </div >
        )
    }
}

