import React, { Component } from 'react'
import { Row, Col, Collection, CollectionItem, Button } from 'react-materialize'
import Nav from '../header/header'
import { getPreorder, deletePreorder, putPreorder, putDrink } from '../../accions/preorderAccions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import './order.css'
import Delivere from './delivered'
let total = 0; let count = 0;let table;

class Order extends Component {
    componentDidMount() {
        table = this.props.auth.user.name

        this.props.getPreorder(table)
        this.resetTotal();
    }

    componentWillUnmount() {
        count = 0;
        clearInterval(this.interval);
    }


    onDeletePreorder = (id) => {
        this.props.deletePreorder(id);
        this.resetTotal();
    };

    onPutPreorder = (preorder) => {
        preorder.map((item) => {
            if (item.category === "Drink") {
                putDrink(item._id, item.idtable, item.name, item.ingredients, item.price, item.start, item.finished, item.delivered, item.noOrder)
            } else {
                putPreorder(item._id, item.idtable, item.name, item.ingredients, item.price, item.start, item.finished, item.delivered, item.noOrder)

            }
        })
        this.props.getPreorder(table)
        toast.info("Your order is being prepared by the chef ;)", {
            position: toast.POSITION.TOP_RIGHT,
            className: 'black'
        });
    };

    sumPrice(price) {
        total = total + price
        count++
    }


    isSended(preorder_item) {
        if (preorder_item.sended === false) {
            return (
                <Row>
                    <Col m={8}>
                        <h5>{preorder_item.name}</h5>
                    </Col>
                    <Col m={4}>
                        <h5  >${preorder_item.price} </h5>
                        {this.sumPrice(preorder_item.price)}
                    </Col>
                    <Col m={12}>
                        <Col m={6}>
                            {
                                preorder_item.ingredients.map(each_Ingredient => {
                                    return (
                                        <p>{each_Ingredient}</p>
                                    )
                                })
                            }</Col>
                        <Col m={6}>
                            <div className='valign-wrapper'>
                                <Button className='red right' waves='light' onClick={() => this.onDeletePreorder(preorder_item._id)} >Remove</Button>

                            </div>
                        </Col>
                    </Col>

                </Row>
            )
        }
    }

    resetTotal() {
        total = 0;
        count = 0;
    }

    hideButtonOrder(preorder) {
        if (count > 0) {

            return (
                <div>
                    <Row>
                        <Col m={6}>
                            <h4 className='right'>Total:</h4>
                        </Col>
                        <Col m={6}>
                            <h4 className='left red-text'>${total}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col m={12} className=' center'>
                            <Button className='green' waves='light' onClick={() => this.onPutPreorder(preorder)}>Make Order</Button>
                        </Col>
                    </Row>
                </div>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }

    render() {
        const { preorder } = this.props.preorder;

        const role = this.props.auth.user.role
        if (role === 'Table' || role === 'all') {

            return (
                <div>
                    <Nav Title="My Order" />
                    <Row>
                        <Col m={5} className='offset-m1'>
                            <Col m={12}>
                                <Collection header="Pre-Order" className='z-depth-1-half'>
                                    <div className="order-preorder" >
                                        <CollectionItem>
                                            {this.resetTotal()}
                                            {

                                                preorder.map((preorder_item) =>

                                                    (
                                                        this.isSended(preorder_item)

                                                    ))
                                            }
                                        </CollectionItem>
                                    </div>
                                    <CollectionItem>
                                        {this.hideButtonOrder(preorder)}

                                    </CollectionItem>
                                </Collection>
                            </Col>
                        </Col>

                        <Col m={6} className='offset m-6'>
                            <Row>
                                <Delivere />
                            </Row>
                        </Col>


                    </Row>
                </div>
            )
        } else {
            return (
                <h1>No se puede mi joven</h1>
            )
        }
    }
}

Order.propTypes = {
    getPreorder: PropTypes.func.isRequired,
    preorder: PropTypes.object.isRequired,

    auth: PropTypes.object.isRequired,

    putDrink: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
    preorder: state.preorder,
    auth: state.auth
});


export default connect(mapStateToProps, { getPreorder, putDrink, deletePreorder, putPreorder })(Order);
