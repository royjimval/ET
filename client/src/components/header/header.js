import React, { Component } from 'react'
import { Modal, Parallax, Row, Input, Button, Navbar, NavItem } from 'react-materialize'
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
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: '',
            errors: ''
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: [e.target.value] })
    }

    componentDidMount() {
        flag = 1;
        counter = 0;
        this.props.getItems()
        this.setState({ error: {} })
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
            toast.info(this.InfoForToast(), {
                position: toast.POSITION.TOP_RIGHT,
                className: 'foo-bar'
            });
        }

        this.props.getItems()
        const { items } = this.props.item
        console.log(items)

    }

    InfoForToast() {
        return (
            <div className="center ">
                <Row>
                    <img className='menu-icon-w' src='assets/waiter.svg' width='50px' />
                </Row>
                <Row>
                    <h6>A waiter will attend you soon :3<br /></h6>
                </Row>
            </div>
        )
    }

    CheckNavForUser(role) {
        switch (role) {
            case 'Table': {
                return (
                    <div>
                        <NavItem componentClass={Link} href="/Menu" to="/Menu"><img className='menu-icon' src='assets/menu.svg' width='30px' />MENU</NavItem>

                        <NavItem className='right' onClick={() => console.log("")}>
                            <form onSubmit={this.handleSubmit}>
                                <Button className='transparent white-text wb' flat><img className='menu-icon-w' src='assets/waiter.svg' width='30px' />Waiter
                                    <input type="button" className='hide' value={this.props.auth.user.name} required type="text" ref={(Table) => this.getTable = Table}></input>
                                </Button>
                            </form>
                        </NavItem>
                        <NavItem className='left' componentClass={Link} href="/Order" to="/Order"><img className='menu-icon' src='assets/fast-delivery.svg' width='30px' />My Order</NavItem>
                    </div>
                )
            } break;
            case 'all': {
                return (
                    <div>
                        <NavItem componentClass={Link} href="/Menu" to="/Menu"><img className='menu-icon' src='assets/menu.svg' width='30px' />MENU</NavItem>
                        <NavItem className='left' componentClass={Link} href="/Order" to="/Order"><img className='menu-icon' src='assets/fast-delivery.svg' width='30px' />My Order</NavItem>
                    </div>
                )
            } break;
            case 'Chef': {
                return (
                    <div>
                        <NavItem onClick={() => this.logOutUser()}><img className='menu-icon' src='https://image.flaticon.com/icons/svg/1085/1085311.svg' width='30px' /></NavItem>
                    </div>
                )
            } break;
            case 'Cashier': {
                return (
                    <div>
                        <NavItem onClick={() => this.logOutUser()}><img className='menu-icon' src='https://image.flaticon.com/icons/svg/1085/1085311.svg' width='30px' /></NavItem>
                    </div>
                )
            } break;
        }
    }

    logOutUser() {
        if (this.props.auth.user.email === this.state.userEmail[0]) {
            this.setState({errors:""})
            if (this.props.auth.user.role === this.state.userPassword[0]) {
                this.setState({errors:""})
                window.localStorage.clear()
                setTimeout(()=>{window.location = '/'},500)
            } else {
                this.setState({ errors: 'You did not fill the current email user' })
            }
        } else {
            this.setState({ errors: 'You did not fill the current role user' })
        }
    }

    render() {
        const role = this.props.auth.user.role
        return (
            <div>
                <Row className="no-marg-b">
                    <div className='container'>
                        <h1 className='centered ls'>
                            {this.props.Title}
                        </h1>
                    </div>
                    <div>
                        <div className='bt1'>
                            <Button data-target='foo' className='bt white-text'>x</Button>
                        </div>
                        <Parallax className='header' imageSrc="https://images.pexels.com/photos/326281/pexels-photo-326281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </div>
                    <div>
                        <Row className='center no-marg-b'>
                            <Navbar className='nav-color  center'>
                                {this.CheckNavForUser(role)}

                            </Navbar>
                        </Row>
                        <ToastContainer />
                    </div>
                    <Modal
                        id='foo'
                        header='Log Out'>
                        <Row>
                            <div>
                                <Input name='userEmail' onChange={this.onChange} type="email" label="Email" s={12} />
                            </div>
                            <div>
                                <Input name='userPassword' onChange={this.onChange} type="text" label="Role" s={12} />
                            </div>
                                <span style={{ color: "red" }}>{this.state.errors}</span>
                        </Row>
                        <Button onClick={() => { this.logOutUser() }}>Log Out</Button>
                    </Modal>
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