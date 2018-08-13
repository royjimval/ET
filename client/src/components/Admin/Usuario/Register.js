import React, { Component } from 'react';
import './Register.css';

import { Input, Icon, Collapsible, CollapsibleItem, Row } from '../../../../../node_modules/react-materialize';
import { connect } from 'react-redux';
import {registerUser} from '../../../accions/auhActions'
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

    componentWillReceiveProps(nextProps){
        if(nextProps.errors && nextProps.rightRe=== 'Not Right'){
            this.setState({errors: nextProps.errors});
        }
        if(nextProps.rightRe=== 'all Right'){
            this.setState({name:''})
            this.setState({lastname:''})
            this.setState({email:''})
            this.setState({password:''})
            this.setState({password2:''})
            this.setState({role:''})
            this.setState({errors:{}})
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
                <form onSubmit={this.onSubmit} id="create-course-form">
                    <figure>
                        <img src="assets/user.png" class="user" />
                    </figure>

                    <div class="row cbxTypeUser">
                        <Input name="role" value={this.state.role} onChange={this.onChange} className="white-text" s={12} type='select' label='Select the type of user' icon={<Icon className='iuser'>people</Icon>} defaultValue='1'>
                            <option value='1'>Select the type of user</option>
                            <option value='Chef'>Chef</option>
                            <option value='Table'>Table</option>
                            <option value='Waiter'>Waiter</option>
                            <option value='Cashier'>Cashier</option>
                        </Input>
                        <span style={{ color: "red" }}>{errors.role}</span>
                    </div>

                    <div class="input-field">
                        <i class="material-icons prefix iuser">account_circle</i>
                        <input name="name" id="icon_prefix" type="text" class="validate" value={this.state.name} onChange={this.onChange} />
                        <label for="icon_prefix">Name</label>
                        <span style={{ color: "red" }}>{errors.name}</span>
                    </div>
                    <div class="input-field">
                        <i class="material-icons prefix iuser">lastname</i>
                        <input name="lastname" id="icon_prefix" type="text" class="validate" value={this.state.lastname} onChange={this.onChange} />
                        <label for="icon_prefix">Lastname</label>
                        <span style={{ color: "red" }}>{errors.lastname}</span>
                    </div>

                    <div class="input-field">
                        <i class="material-icons prefix iuser">email</i>
                        <input name="email" id="icon_prefix" type="email" class="validate" value={this.state.email} onChange={this.onChange} />
                        <label for="icon_prefix">Email</label>
                        <span style={{ color: "red" }}>{errors.email}</span>
                    </div>
                    <div class="input-field">
                        <i class="material-icons prefix iuser">lock</i>
                        <input name="password" id="icon_prefix" type="password" class="validate" value={this.state.password} onChange={this.onChange} />
                        <label for="icon_prefix">Password</label>
                        <span style={{ color: "red" }}>{errors.password}</span>
                    </div>
                    <div class="input-field">
                        <i class="material-icons prefix iuser">lock</i>
                        <input name="password2" id="icon_prefix" type="password" class="validate" value={this.state.password2} onChange={this.onChange} />
                        <label for="icon_prefix">Confirm password</label>
                        <span style={{ color: "red" }}>{errors.password2}</span>
                    </div>
                    <div className="input-field ">
                        <i class="material-icons prefix iuser">accessibility</i>
                        <Collapsible className="acordionRegisterUser " accordion defaultActiveKey={1}>
                            <CollapsibleItem header='Permissions' className="acordionRegister" >
                                <div className="scrolleablepermisos" >
                                    <Row>
                                        <Input name='group1' type='checkbox' value='green' label='permiso1' className='filled-in permisos' defaultChecked='checked' />
                                        <Input name='group1' type='checkbox' value='green' label='permiso1' className='filled-in permisos' defaultChecked='checked' />
                                        <Input name='group1' type='checkbox' value='green' label='permiso1' className='filled-in permisos' defaultChecked='checked' />
                                        <Input name='group1' type='checkbox' value='green' label='permiso1' className='filled-in permisos' defaultChecked='checked' />
                                    </Row>
                                </div>
                            </CollapsibleItem>
                        </Collapsible >
                    </div>
                    <input type="submit" name="" value="Save" />
                </form>
            </div>
        );
    }
}

Register.propTypes={
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    rightRe: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    auth: state.auth,
    errors: state.errors,
    rightRe: state.rightRe
})

export default connect(mapStateToProps,{registerUser})(Register);