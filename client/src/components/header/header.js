import React, { Component } from 'react'
import { Parallax, Row, Col, Button, Navbar, NavItem, Icon } from 'react-materialize'
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
        const idtable = this.getTitle.value;
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
                                <NavItem componentClass={Link} href="/Menu" to="/Menu">Menu</NavItem>
                                <NavItem componentClass={Link} href="/Categories" to="/Categories">Categories</NavItem>
                                <NavItem className='right' componentClass={Link} href="/Order" to="/Order"><Icon>shopping_cart</Icon></NavItem>
                            </Navbar>

                        </Row>
                        <ToastContainer />
                    </div>
                </Row>
                <Row className='right-align'>
                    <Col m={4} className='offset-m7'> </Col>
                </Row>
                <Row className='center-align'>
                    <Col m={12} s={12}>
                        <Button data-target="modal1" floating fab='vertical' icon='add' className='amber darken-3' large style={{ bottom: '45px', right: '24px' }}>
                            <form onSubmit={this.handleSubmit}>
                                <input className="hide" value="2" required type="text" ref={(input) => this.getTitle = input}
                                    placeholder="Enter Post Title" />
                                <button className='btn-r green'>
                                    <img src='./assets/camarero2.svg' alt='' width='50px' height='50px'></img>
                                </button>
                            </form>
                        </Button>
                    </Col>
                </Row>
                <Assist />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps,{ addItem })(Header);