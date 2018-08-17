import React, { Component } from 'react';
import { Row } from '../../../../../node_modules/react-materialize';
import Col from '../../../../../node_modules/react-materialize/lib/Col';
import Reports from './Reports';
import NavBarAdmin from '../navbar/navbar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ReportsView extends Component {
    render() {
        const role = this.props.auth.user.role
        if (role === 'all') {
            return (
                <div>
                    <div>
                        <Row>
                            <NavBarAdmin />
                        </Row>
                        <Row >
                            <Col m={12} >
                                <Reports />
                            </Col>
                        </Row>
                        <Row >
                            <Col m={12} >
                            </Col>
                        </Row>
                    </div>
                </div>
            )
        } else {
            return (
                <h1>No se puede mi joven</h1>
            )
        }
    }
}

ReportsView.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(ReportsView)