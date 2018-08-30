import React, { Component } from 'react';
import './Register.css';

import { Input, Button, Row, Col } from '../../../../../node_modules/react-materialize';
import { connect } from 'react-redux';
import { registerUser } from '../../../accions/auhActions'
import PropTypes from 'prop-types';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            lastname: '',
            email: '',
            password: '',
            password2: '',
            role: '',
            permissions: ['all'],
            errors: {}
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors && nextProps.rightRe === 'Not Right') {
            this.setState({ errors: nextProps.errors });
        }
        if (nextProps.rightRe === 'all Right') {
            this.setState({ name: '' })
            this.setState({ lastname: '' })
            this.setState({ email: '' })
            this.setState({ password: '' })
            this.setState({ password2: '' })
            this.setState({ role: '' })
            this.setState({ errors: {} })
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const newUser = {
            name: this.state.name,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            role: this.state.role,
            permissions: this.state.permissions
        };
        this.props.registerUser(newUser)
    }

    render() {
        const { errors } = this.state;

        return (
            <div class="RegisterUsers">
                <Row className="no-marg-b">
                    <form onSubmit={this.onSubmit} id="create-course-form">
                        <div className="center headerimage">
                            <figure>
                                <img src="assets/user.png" alt="UserRegister" class="user" />
                            </figure>
                        </div>
                        <Row className="stylerow" >
                            <Col s={12} m={6} className="stylecolum">
                                <div class="input-field">
                                    <i class="material-icons prefix">
                                        <img className='menu-icon iconnav' src='assets/man.svg' width='30px' />
                                    </i>
                                    <input name="name" id="icon_prefix" type="text" className="black-text validate" value={this.state.name} onChange={this.onChange} />
                                    <label for="icon_prefix">Name</label>
                                    <span style={{ color: "red" }}>{errors.name}</span>
                                </div>
                                <div class="row cbxTypeUser">
                                    <Input name="role" value={this.state.role} onChange={this.onChange} s={12} type='select' icon={<i class="material-icons prefix">
                                        <img className='menu-icon iconnav' src='assets/friendship.svg' width='30px' />
                                    </i>} defaultValue='1'>
                                        <option value='1'>Select the type of user</option>
                                        <option value='Chef'>Chef</option>
                                        <option value='Waiter'>Waiter</option>
                                        <option value='Cashier'>Cashier</option>
                                        <option value='all'>Admin</option>
                                    </Input>
                                    <span style={{ color: "red" }}>{errors.role}</span>
                                </div>
                                <div class="input-field">
                                    <i class="material-icons prefix">
                                        <img className='menu-icon iconnav' src='assets/padlock.svg' width='30px' />
                                    </i>
                                    <input name="password" id="icon_prefix" type="password" class="validate" value={this.state.password} onChange={this.onChange} />
                                    <label for="icon_prefix">Password</label>
                                    <span style={{ color: "red" }}>{errors.password}</span>
                                </div>
                            </Col>
                            <Col s={12} m={6}>
                                <div class="input-field">
                                    <i class="material-icons prefix">
                                        <img className='menu-icon iconnav' src='assets/man.svg' width='30px' />
                                    </i>
                                    <input name="lastname" id="icon_prefix" type="text" class="validate" value={this.state.lastname} onChange={this.onChange} />
                                    <label for="icon_prefix">Lastname</label>
                                    <span style={{ color: "red" }}>{errors.lastname}</span>
                                </div>
                                <div class="input-field">
                                    <i class="material-icons prefix">
                                        <img className='menu-icon iconnav' src='assets/email.svg' width='30px' />
                                    </i>
                                    <input name="email" id="icon_prefix" type="email" class="validate" value={this.state.email} onChange={this.onChange} />
                                    <label for="icon_prefix">Email</label>
                                    <span style={{ color: "red" }}>{errors.email}</span>
                                </div>
                                <div class="input-field">
                                    <i class="material-icons prefix">
                                        <img className='menu-icon iconnav' src='assets/padlock.svg' width='30px' />
                                    </i>
                                    <input name="password2" id="icon_prefix" type="password" class="validate" value={this.state.password2} onChange={this.onChange} />
                                    <label for="icon_prefix">Confirm password</label>
                                    <span style={{ color: "red" }}>{errors.password2}</span>
                                </div>
                            </Col>
                        </Row>
                        <div className="center">
                            <Button type="submit" value="Save" className="waves-effect waves-light RegisterUserButton" large> Save</Button>
                        </div>
                    </form>
                </Row>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    rightRe: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    rightRe: state.rightRe
})

export default connect(mapStateToProps, { registerUser })(Register);