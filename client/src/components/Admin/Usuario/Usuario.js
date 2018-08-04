import React, { Component } from 'react'
import NavBarAdmin from '../navbar/navbar';
import Register from './Register';
import { Row } from '../../../../../node_modules/react-materialize';
import Col from '../../../../../node_modules/react-materialize/lib/Col';
import './Usuario.css';
import UserData from './UserData';
export default class Usuario extends Component {
    render() {
        return (
            <div class="">
                <Row >
                    <NavBarAdmin />
                </Row>
                <Row>
                    <Col  m={4}>
                        <Register />
                    </Col>
                    <Col  m={8}>
                        <UserData />
                    </Col>
                </Row>
            </div>
        )
    }
}
