import React, { Component } from 'react';
import './UserData.css';
import { connect } from 'react-redux';
import { getUsers, deleteUser } from '../../../accions/getuserAction'
import PropTypes from 'prop-types'
import { Row, Col, Button } from '../../../../../node_modules/react-materialize';


class UserData extends Component {
    componentDidMount() {
        this.props.getUsers()
        this.interval = setInterval(() => this.props.getUsers(), 4000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onDeleteUser = (id) => {
        this.props.deleteUser(id);
    };

    remove(user) {
        if (user.role === "all" || user.role === "Table") {
            return (
                <Col m={6}>
                    <div className='valign-wrapper'>
                        <h6>Can't Remove</h6>
                    </div>
                </Col>
            )
        }
        else {
            return (
                <Col m={6}>
                    <div className='valign-wrapper'>
                        <Button className='red right' waves='light' onClick={() => this.onDeleteUser(user._id)} >Remove</Button>

                    </div>
                </Col>
            )
        }
    }

    render() {
        const { users } = this.props.users;
        console.log(users)
        return (
            <div class="loginBoxUserData scrolleable">
                <Row className="no-marg-b">
                    <table>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Type User</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody className="tbbodyUserData scrolleable">
                            {
                                users.map(user => (
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            {this.remove(user)}
                                        </td>
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
    users: PropTypes.object.isRequired,
    deleteUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    users: state.users
})

export default connect(mapStateToProps, { getUsers, deleteUser })(UserData)