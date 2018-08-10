import React, { Component } from 'react'
import { Parallax, Row, Button, Navbar, NavItem, Icon, Col } from 'react-materialize'
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
                            <Navbar className='nav-color  center'>
                                <NavItem componentClass={Link} href="/Menu" to="/Menu"><img className='menu-icon' src='assets/menu.svg' width='30px'/> MENU</NavItem>
                                <NavItem className='right'>
                                    <form onSubmit={this.handleSubmit}>
                                        <Button className='transparent white-text wb' flat><img className='menu-icon-w' src='assets/waiter.svg' width='30px'/>Waiter
                                        <input type="button" className='hide' value="2" required type="text" ref={(Table) => this.getTable = Table}></input>
                                        </Button>
                                    </form>
                                </NavItem>
                                <NavItem className='right' componentClass={Link} href="/Order" to="/Order"><img className='menu-icon' src='assets/fast-delivery.svg' width='30px'/>My Order</NavItem>
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