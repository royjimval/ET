import React, { Component } from 'react';
import { Row } from '../../../../../node_modules/react-materialize';
import Col from '../../../../../node_modules/react-materialize/lib/Col';
import Reports from './Reports';
import NavBarAdmin from '../navbar/navbar';
/* import './Reports.css' */

export default class ReportsView extends Component {
    render() {
        return (
            <div>
                <div>
                    <Row>
                        <NavBarAdmin />
                    </Row>
                    <Row >
                        <Col m={12} >
                            <Reports />
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