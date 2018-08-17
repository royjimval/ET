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
        if (role === 'all') {
            return (
                <div class="">
                    <Row >
                        <NavBarAdmin />
                    </Row>
                    <Row>
                        <Col m={4}>
                            <Register />
                        </Col>
                        <Col m={8}>
                            <UserData />
                        </Col>
                    </Row>
                </div>
            )
        } else{
            console.log(role)
            return(
              <h1>No se puede mi joven</h1>
            )
        }
    }
}

Usuario.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Usuario)
