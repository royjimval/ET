import React, { Component } from 'react';
import { Row } from '../../../../../node_modules/react-materialize';
import Col from '../../../../../node_modules/react-materialize/lib/Col';
import NavBarAdmin from '../navbar/navbar';
import Inventory from './Inventory';
import './inventory.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-materialize';

class InventoryView extends Component {
    render() {
        const role = this.props.auth.user.role
        if (role === 'all') {
            return (
                <div>
                    <Row>
                        <NavBarAdmin />
                    </Row>
                    <div className="styleheaders center divHeader">
                        <div>
                            <img src='assets/favicon-57.png' />
                        </div>
                        <div className="divHeaderText">
                            Here you can select the product and edit it :D
                        </div>
                    </div>
                    <Row>
                        <Inventory history={this.props.history} />
                    </Row>
                </div>
            );
        }
        else {
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

InventoryView.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(InventoryView)