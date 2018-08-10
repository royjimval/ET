import React, { Component } from 'react';
import './Register.css';
import { Input, Icon } from '../../../../../node_modules/react-materialize';

export default class Register extends Component {
    render() {
        return (
            <div class="RegisterUsers">
                <form>
                    <figure>
                        <img src="assets/user.png" class="user" />
                    </figure>

                    <div class="row cbxTypeUser">
                        <Input className="white-text" s={12} type='select' label='Select the type of user' icon={<Icon className='iuser'>people</Icon>} defaultValue='1'>
                            <option value='1'>Select the type of user</option>
                            <option value='2'>Chef</option>
                            <option value='3'>Table</option>
                            <option value='4'>Employee</option>
                        </Input>
                    </div>

                    <div class="input-field">
                        <i class="material-icons prefix iuser">account_circle</i>
                        <input id="icon_prefix" type="text" class="validate" />
                    </div>


                    <div class="input-field">
                        <i class="material-icons prefix iuser">email</i>
                        <input id="icon_prefix" type="text" class="validate" />
                        <label for="icon_prefix">Email</label>
                    </div>
                    <div class="input-field">
                        <i class="material-icons prefix iuser">lock</i>
                        <input id="icon_prefix" type="password" class="validate" />
                        <label for="icon_prefix">Password</label>
                    </div>
                    <div class="input-field">
                        <i class="material-icons prefix iuser">lock</i>
                        <input id="icon_prefix" type="password" class="validate" />
                        <label for="icon_prefix">Confirm password</label>
                    </div>
                    <input type="submit" name="" value="Save" />
                </form>
            </div>
        );
    }
}