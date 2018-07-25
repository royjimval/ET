import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-materialize'
import './start.css'
import Input from '../../../../node_modules/react-materialize/lib/Input';

export default class LogIn extends Component {
    render() {
        return (
            <div className='bg-img  valign-wrapper'>
                <Row className='container white z-depth-5'>
                <h2 className='center grey-text text-darken-3'>Login</h2>
                    <Col className='offset-s2 black-text' s={8}><Input type="text" label="user" s={12} /></Col>
                    <Col className='offset-s2 black-text' s={8}><Input type="password" label="password" s={12}/></Col>
                    <Col className='center' s={12}><Button className='green accent-4'>Login</Button></Col>
                </Row>            
            </div>
        )
    }
}
