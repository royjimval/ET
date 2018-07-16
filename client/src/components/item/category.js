import React, { Component } from 'react'
import { Col, Row } from 'react-materialize'
import '../item/item.css'
import Nav from '../header/header'

import { getcategory} from '../../accions/categoryAccion';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createHash } from 'crypto';

class categoryItem extends Component {

    componentDidMount() {
        this.props.getcategory();        
    }

    render() {
        const { category } = this.props.category;

        return (
            <div>
                <Nav/>
                <Row>
                    {
                    category.map((category_item) => (
                        <Col s={8} m={3} l={3} className='push-s2 center' key={category_item._id}>
                        <div class=" cardd z-depth-3">
                            <div >
                                <Row>
                                    <Col s={12} m={12} l={12} xl={12} className="center-align">
                                        <h5>{category_item.name}</h5>
                                    </Col>
                                </Row>
                            </div>
                            <img class="crdImg" src={category_item.photo} alt=""></img>
                        </div>
                    </Col>
                    ))
                    }
                    </Row>
            </div>
        )
    }
}

categoryItem.propTypes = {
    getcategory: PropTypes.func.isRequired,
    category: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    category: state.category
});


export default connect(mapStateToProps, {getcategory })(categoryItem);
