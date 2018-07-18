import React, { Component } from 'react'
import { Row, Col, Collection, CollectionItem, Button } from 'react-materialize'
import Nav from '../header/header'
import { getPreorder, deletePreorder } from '../../accions/preorderAccions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
let total = 0;

class Order extends Component {
    componentDidMount() {
        this.props.getPreorder();
    }

    onDeletePreorder = (id) => {     
        this.props.deletePreorder(id);
        total = 0;
    };

    
    sumPrice(price){
        total = total + price
        console.log(total)

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
                                                <h5  >${preorder_item.price}</h5>
                                                {this.sumPrice(preorder_item.price)}
                                            </Col>
                                            <Col m={12} >
                                                <p>{preorder_item.ingredients}</p>
                                            </Col>
                                            <Button className=' red right' waves='light' onClick={() => this.onDeletePreorder(preorder_item._id)} >Remove</Button>
                                            
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
                                        <h4 className='left red-text'>{total}$</h4>
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


export default connect(mapStateToProps, { getPreorder, deletePreorder})(Order);
