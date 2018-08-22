import React, { Component } from 'react'
import { Parallax, Row, Button, Navbar, NavItem } from 'react-materialize'
import { Link } from 'react-router-dom';
import Assist from '../modal/assist'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem, getItems } from '../../accions/itemAccions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../header/header.css'


let flag = 0; let counter = 0;

class Header extends Component {

    componentDidMount() {
        flag = 1;
        counter = 0;
        this.props.getItems()
        this.interval1 = setInterval(() => { this.getDataItem() }, 60000);
    }

    componentWillUnmount() {
        clearInterval(this.interval1);
    }

    getDataItem() {
        counter = 0;
        this.props.getItems()
    }

    checkAttention() {
        const { items } = this.props.item
        console.log(items)
        items.map(alertW => {
            if (alertW.idtable === this.props.auth.user.name) {
                counter++;
            }
        })
        if (counter === 0) {
            flag = 0;
        } else {
            flag = 1;
        }
        this.props.getItems()
        console.log(items)
    }



    handleSubmit = (e) => {
        e.preventDefault();



        this.checkAttention()

        if (flag === 0) {
            flag = 1;
            const idtable = this.getTable.value;
            const data = {
                idtable
            }

            this.props.addItem(data);
            toast.info(this.InfoForToast() , {
                position: toast.POSITION.TOP_RIGHT,
                className: 'foo-bar'
            });
        }

        this.props.getItems()
        const { items } = this.props.item
        console.log(items)

    }

    InfoForToast(){
        return(
            <div className="center ">
            <Row>
                <img className='menu-icon-w' src='assets/waiter.svg' width='50px' />
            </Row>
            <Row>
                <h6>A waiter will attend you soon :3<br/></h6>
            </Row>
            </div>
        )
    }


    render() {
        return (
            <div>
                <Row className="no-marg-b">
                    <div className='container'>
                        <h1 className='centered ls'>
                            {this.props.Title}
                        </h1>
                    </div>
                    <div>
                        <Parallax className='header' imageSrc="https://images.pexels.com/photos/326281/pexels-photo-326281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </div>
                    <div>
                        <Row className='center no-marg-b'>
                            <Navbar className='nav-color  center'>
                                <NavItem componentClass={Link} href="/Menu" to="/Menu"><img className='menu-icon' src='assets/menu.svg' width='30px' />MENU</NavItem>

                                <NavItem className='right' onClick={() => console.log("")}>
                                    <form onSubmit={this.handleSubmit}>

                                        <Button className='transparent white-text wb' flat><img className='menu-icon-w' src='assets/waiter.svg' width='30px' />Waiter
                                        <input type="button" className='hide' value={this.props.auth.user.name} required type="text" ref={(Table) => this.getTable = Table}></input>
                                        </Button>

                                    </form>
                                </NavItem>
                                <NavItem className='left' componentClass={Link} href="/Order" to="/Order"><img className='menu-icon' src='assets/fast-delivery.svg' width='30px' />My Order</NavItem>
                            </Navbar>
                        </Row>
                        <ToastContainer />
                    </div>
                </Row>
                <Assist />
            </div>
        )
    }
}

Header.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    item: state.item,
    auth: state.auth

});

export default connect(mapStateToProps, { addItem, getItems })(Header);