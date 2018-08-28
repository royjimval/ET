import React, { Component } from 'react';
import { Button, Row, Navbar, NavItem } from '../../../../../node_modules/react-materialize';
import { Link } from 'react-router-dom';
import './General.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Clock from './Clock';


class General extends Component {

    render() {

        const role = this.props.auth.user.role
        if (role === 'all') {

            return (
                <div >
                    <Navbar className="nabAdmin">
                        <NavItem className="conteinernav" componentClass={Link} href="/General" to="/General">
                            <img className='menu-icon iconnav' src='assets/general.svg' width='31px' />
                            General
                         </NavItem>

                        <NavItem className="conteinernav" componentClass={Link} href="/User" to="/User">
                            <img className='menu-icon iconnav' src='assets/boy.svg' width='31px' />
                            Users
                        </NavItem>

                        <NavItem className="conteinernav" componentClass={Link} href="/InventoryView" to="/InventoryView">
                            <img className='menu-icon iconnav' src='assets/warehouse.svg' width='31px' />
                            Inventory
                        </NavItem>

                        <NavItem className="conteinernav" componentClass={Link} href="/cashier" to="/cashier">
                            <img className='menu-icon iconnav' src='assets/cashier.svg' width='31px' />
                            Cashier
                        </NavItem>

                        <NavItem className="conteinernav" componentClass={Link} href="/ReportsView" to="/ReportsView">
                            <img className='menu-icon iconnav' src='assets/report.svg' width='31px' />
                            Reports
                        </NavItem>

                        <NavItem className="conteinernav" componentClass={Link} href="/addProduct" to="/addProduct">
                            <img className='menu-icon iconnav' src='assets/menu.svg' width='30px' />
                            Add Product
                        </NavItem>

                        <NavItem className="conteinernav" componentClass={Link} href="/addIngredient" to="/addIngredient">
                            <img className='menu-icon iconnav' src='assets/harvest.svg' width='30px' />
                            Add Ingredient
                        </NavItem>

                        <NavItem className="conteinernav right" onClick={() => this.logOutUser()}>
                            <img className='menu-icon iconnav' src='assets/stand-by.svg' width='30px' />
                            Logout
                        </NavItem>
                    </Navbar>

                    <div className='backscreen'>
                    <div className='center-screen'>
                    <Row className='center-align white-text'>
                        <h1 className='ttl'> Welcome back {this.props.auth.user.name} </h1>
                        <Clock/>
                    </Row>
                    </div>
                    </div>
                </div>
            );
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

General.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(General)
