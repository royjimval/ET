import React, { Component } from 'react'
import NavBarAdmin from '../navbar/navbar';
import Register from './Register';
import { Row } from '../../../../../node_modules/react-materialize';
import Col from '../../../../../node_modules/react-materialize/lib/Col';
import './Usuario.css';
import UserData from './UserData';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Usuario extends Component {
    render() {
        const role = this.props.auth.user.role
        return (
            <div class="">
                <Row >
                    <NavBarAdmin />
                </Row>
                <Row>
                    <Col m={6}>
                        <Register />
                    </Col>
                    <Col m={6}>
                        <UserData />
                    </Col>
                </Row>
            </div>
        )
    }
}

Usuario.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Usuario)
