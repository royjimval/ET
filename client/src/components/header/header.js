import React, { Component } from 'react'
import { Parallax, Row, Button, Navbar, NavItem, Icon, Col, Dropdown } from 'react-materialize'
import { Link } from 'react-router-dom';
import Assist from '../modal/assist'
import { connect } from 'react-redux';
import { addItem } from '../../accions/itemAccions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../header/header.css'

class Header extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const idtable = this.getTable.value;
        const data = {
            idtable
        }
        console.log(data);
        this.props.addItem(data);
        toast.info("A waiter will attend you soon :)", {
            position: toast.POSITION.TOP_RIGHT,
            className: 'foo-bar'
        });
    }
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
                            <Navbar className='green accent-4 center'>
                                <NavItem componentClass={Link} href="/Menu" to="/Menu">MENU</NavItem>
                                <Dropdown trigger={
                                    <NavItem className='nav-width'>FOOD</NavItem>
                                }>
                                    <NavItem componentClass={Link} href="/Breakfast" to="/Breakfast">BREAKFAST</NavItem>
                                    <NavItem componentClass={Link} href="/Meals" to="/Meals">MEALS</NavItem>
                                    <NavItem componentClass={Link} href="/Dinner" to="/Dinner">DINNER</NavItem>
                                </Dropdown>
                                <NavItem componentClass={Link} href="/Drinks" to="/Drinks">DRINKS</NavItem>
                                <NavItem componentClass={Link} href="/Desserts" to="/Desserts">DESSERTS</NavItem>
                                <NavItem className='right'>
                                    <form onSubmit={this.handleSubmit}>
                                        <Button className='transparent white-text' flat>Waiter
                                        <input type="button" className='hide' value="1" required type="text" ref={(Table) => this.getTable = Table}></input>
                                        </Button>
                                    </form>
                                </NavItem>
                                <NavItem className='right' componentClass={Link} href="/Order" to="/Order"><Icon>shopping_cart</Icon></NavItem>
                            </Navbar>
                        </Row>
                        <ToastContainer />
                    </div>
                </Row>
                <Row className='right-align'>
                    <Col m={4} className='offset-m7'> </Col>
                </Row>
                <Assist />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, { addItem })(Header);