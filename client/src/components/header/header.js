import React, { Component } from 'react'
import { Parallax, Row, Col, Button, Navbar, NavItem } from 'react-materialize'
import { Link } from 'react-router-dom';
import Assist from '../modal/assist'

import '../header/header.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <Row>
                    <div className='container'>
                        <h1 className='centered'>
                            Menu
                        </h1>
                    </div>
                    <div>
                        <Parallax className='header' imageSrc="https://images.pexels.com/photos/326281/pexels-photo-326281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </div>
                    <div>
                        <Row className='center'>
                        <Navbar  className='black center'>
                            <NavItem componentClass={Link} href="/Menu" to="/Menu">Menu</NavItem>
                            <NavItem componentClass={Link} href="/Categories" to="/Categories">Categories</NavItem>
                            <NavItem componentClass={Link} href="/Order" to="/Order">Order</NavItem>
                        </Navbar>

                        </Row>
                    </div>
                </Row>
                <Row className='right-align'>
                    <Col m={4} className='offset-m7'>
                        <Button className='black' data-target="modal1">Assist</Button>

                    </Col>
                </Row>
                <Assist />
            </div>
        )
    }
}
