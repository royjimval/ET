import React, { Component } from 'react'
import { Row, Col, Collection, CollectionItem, Button } from 'react-materialize'
import Nav from '../header/header'
import { getPreorder } from '../../accions/preorderAccions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class Order extends Component {

    componentDidMount() {
        this.props.getPreorder();
    }

    render() {
        const { preorder } = this.props.preorder;
        return (
            <div>
                <Nav />
                <Row>
                    <Col m={8} className='offset-m2 '>
                        <Collection header='Order' className='z-depth-3'>
                            {
                                preorder.map((preorder_item) => (
                                    <CollectionItem>
                                        <Row>
                                            <Col m={8}>
                                                <h5>{preorder_item.name}</h5>
                                            </Col>
                                            <Col m={4}>
                                                <h5>${preorder_item.price}</h5>
                                            </Col>
                                            <Col m={12} >
                                                <p>{preorder_item.ingredients}</p>
                                            </Col>
                                            <Button className=' red right' waves='light'>Remove</Button>
                                        </Row>
                                    </CollectionItem>
                                ))
                            }
                            <CollectionItem>
                                <Row>
                                    <Col m={6}>
                                        <h4 className='right'>Total:</h4>
                                    </Col>
                                    <Col m={6}>
                                        <h4 className='left red-text'>$  {Math.floor(Math.random() * 30.01)}.48</h4>
                                    </Col>
                                </Row>
                            </CollectionItem>
                        </Collection>
                    </Col>

                </Row>
                <Row>
                    <Col m={12} className=' center'>
                        <Button className='green' waves='light'>Make Order</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

Order.propTypes = {
    getPreorder: PropTypes.func.isRequired,
    preorder: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    preorder: state.preorder
});


export default connect(mapStateToProps, { getPreorder })(Order);
