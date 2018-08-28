import React, { Component } from 'react'
import NavBarAdmin from '../navbar/navbar';
import { Button } from 'react-materialize';
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
                <div>
                    <Row >
                        <NavBarAdmin history={this.props.history} />
                    </Row>
                    <div className="styleheaders center divHeader">
                        <div>
                            <img src='assets/favicon-57.png' />
                        </div>
                        <div className="divHeaderText">
                            Create your Eatable account
                        </div>
                    </div>
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
        } else {
            return (
                <div className='bg-img  valign-wrapper'>
                    <div className="cntr center-align z-depth-2">
                        <h1 className="white-text">Go back</h1>
                        <h5 className="white-text">you shouldn't be here</h5>
                        <Button onClick={() => this.props.history.push('/')}>go back</Button>
                    </div>
                </div>
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
