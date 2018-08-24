import React, { Component } from 'react';
import './UserData.css';
import { connect } from 'react-redux';
import { getUsers } from '../../../accions/getuserAction'
import PropTypes from 'prop-types'
import { Row } from '../../../../../node_modules/react-materialize';


class UserData extends Component {
    componentDidMount() {
        this.props.getUsers()
        this.interval = setInterval(() => this.props.getUsers(), 4000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { users } = this.props.users;
        console.log(users)
        return (
            <div class="loginBoxUserData">
                <Row className="no-marg-b">
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
                                users.map(user => (
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </Row>
            </div>
        );
    }
}

UserData.propTypes = {
    getUsers: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    users: state.users
})

export default connect(mapStateToProps, { getUsers })(UserData)