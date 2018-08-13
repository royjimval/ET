import React, { Component } from 'react';
import './UserData.css';

import axios from 'axios'


export default class UserData extends Component {
    constructor() {
        super();
        this.state = {
            user: []
        };
    };
    componentDidMount() {
        this.interval = setInterval(() => this.updateUserTable(), 4000);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    updateUserTable() {
        axios.get('http://localhost:4000/api/user/allUser')
            .then(res => {
                const user = res.data;
                this.setState({ user });
            })
    }

    render() {
        return (
            <div class="loginBoxUserData">
                <table>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Type User</th>
                        </tr>
                    </thead>
                    <tbody className="tbbodyUserData">
                        {
                            this.state.user.map(user => (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}