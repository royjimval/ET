import React, { Component } from 'react'
import { Row, Col, Collection, CollectionItem, Button, Preloader, Icon } from 'react-materialize'
import Nav from '../header/header'
import { getPreorder, deletePreorder, putPreorder } from '../../accions/preorderAccions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './order.css'
let total = 0;

class Order extends Component {
    componentDidMount() {
        this.props.getPreorder();
    }

    onDeletePreorder = (id) => {
        this.props.deletePreorder(id);
        total = 0;
    };

    onPutPreorder = (preorder) => {
        preorder.map((item) => (
            putPreorder(item._id, item.idtable, item.name, item.ingredients, item.price, item.start, item.finished, item.delivered, item.noOrder)
        ))
    };

    sumPrice(price) {
        total = total + price
        console.log(total)

    }

    isCooked(preorder_item) {
        console.log(preorder_item.finished)
        if (preorder_item.finished === true) {
            return(
            <Row>
                <Col s={4} className='secondary-content'>
                    <Icon>check_circle</Icon>
                </Col>
            </Row>)
        } else {
            return(
            <Row>
                <Col s={4} className='secondary-content'>
                    <Preloader size='small' />
                </Col>
            </Row>)
        }
    }

    isSended(preorder_item) {
        if (preorder_item.sended === true) {
            return (
                <CollectionItem className="disabled grey lighten-4" >
                    <Row>
                        <Col m={1} >
                            {
                                this.isCooked(preorder_item)
                            }
                            {/* <Row>
                                <Col s={4} className='secondary-content'>
                                    <Preloader size='small' />
                                </Col>
                            </Row> */}
                        </Col>
                        <Col m={8}>
                            <h5>{preorder_item.name}</h5>
                        </Col>
                        <Col m={3} className='right-align'>
                            <h5  >${preorder_item.price}</h5>
                            {this.sumPrice(preorder_item.price)}
                        </Col>
                        <Col m={12}>
                            <p>{preorder_item.ingredients}</p>
                        </Col>



                    </Row>

                </CollectionItem>)
        } else {
            return (
                <CollectionItem>
                    <Row>
                        <Col m={8}>
                            <h5>{preorder_item.name}</h5>
                        </Col>
                        <Col m={4}>
                            <h5  >${preorder_item.price} </h5>
                            {this.sumPrice(preorder_item.price)}
                        </Col>
                        <Col m={12} >
                            <p>{preorder_item.ingredients}<th></th></p>
                        </Col>
                        <Button className=' red right' waves='light' onClick={() => this.onDeletePreorder(preorder_item._id)} >Remove</Button>

                    </Row>
                </CollectionItem>)
        }
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
                                preorder.map((preorder_item) =>
                                    (
                                        this.isSended(preorder_item)

                                    ))
                            }
                            <CollectionItem>
                                <Row>
                                    <Col m={6}>
                                        <h4 className='right'>Total:</h4>
                                    </Col>
                                    <Col m={6}>
                                        <h4 className='left red-text'>${total}</h4>
                                    </Col>
                                </Row>
                            </CollectionItem>
                        </Collection>
                    </Col>

                </Row>
                <Row>
                    <Col m={12} className=' center'>
                        <Button className='green' waves='light' onClick={() => this.onPutPreorder(preorder)}>Make Order</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

Order.propTypes = {
    getPreorder: PropTypes.func.isRequired,
    preorder: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
    preorder: state.preorder
});


export default connect(mapStateToProps, { getPreorder, deletePreorder, putPreorder })(Order);
