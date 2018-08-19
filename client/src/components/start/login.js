

import React, { Redirect, Component } from 'react'
// import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-materialize'
import './start.css'
import Input from '../../../../node_modules/react-materialize/lib/Input';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../../accions/auhActions'

class LogIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/ClientStart')
        }
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
    }

    render() {
        const { errors } = this.state

        const user = this.props.auth.isAuthenticated
        const role = this.props.auth.user.role
        if (user===false) {
            return (
                <div className='bg-img  valign-wrapper'>
                    <Row className='container white z-depth-5'>
                        <form onSubmit={this.onSubmit}>
                            <h2 className='center grey-text text-darken-3'>Login</h2>
                            <Col className='offset-s2 black-text' s={8}>
                                <div>
                                    <Input name="email" value={this.state.email} onChange={this.onChange} type="email" label="email" s={12} />
                                    <span style={{ color: "red" }}>{errors.email}</span>
                                </div>
                                <div>
                                    <Input name="password" value={this.state.password} onChange={this.onChange} type="password" label="password" s={12} />
                                    <span style={{ color: "red" }}>{errors.password}</span>
                                </div>
                            </Col>
                            <Col className='center' s={12}><Button className='green accent-4'>Login</Button></Col>
                        </form>
                        <Row></Row>
                    </Row>
                </div>
            )
        } else {
            switch(role){
                case 'all':{
                    this.props.history.push('/Admin')
                    console.log('adm')
                }
                break;
                case 'Table':{
                    this.props.history.push('/ClientStart')
                    console.log('ta')
                }
                break;
                case 'Chef':{
                    this.props.history.push('/Chef')
                    console.log('chef')
                }
                break;
                case 'Waiter':{
                    this.props.history.push('/Waiter')
                    console.log('wai')
                }
                break;
                case 'Cashier':{
                    this.props.history.push('/Cashier')
                    console.log('cash')
                }
                break;
            }
            return(
                <div>
                    <h1>{role}</h1>
                </div>
            )

        }
    }
}

LogIn.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(LogIn);