import React, { Component } from 'react';
import { Row } from '../../../../../node_modules/react-materialize';
import Col from '../../../../../node_modules/react-materialize/lib/Col';
import NavBarAdmin from '../navbar/navbar';
import Inventory from './Inventory';
/* import './Reports.css' */

export default class InventoryView extends Component {
    render() {
        return (
            <div>
                <div>
                    <Row>
                        <NavBarAdmin />
                    </Row>
                    <Row >
                        <Col m={12} >
                            <Inventory />
                        </Col>
                    </Row>
                    <Row >
                        <Col m={12} >
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}