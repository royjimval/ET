import React, { Component } from 'react'
import { Row } from 'react-materialize'
import '../waiter/waiter.css'

import TableCard from '../waiter/orderCard/TableCard'
import ChefDetail from './chefDetail'
import Barnav from '../header/navbar'

export default class Chef extends Component {
    render() {
        return (
            <div>
                <Barnav />
                <Row>
                    <TableCard />
                    <ChefDetail/>
                </Row>
            </div>
        )
    }
}
