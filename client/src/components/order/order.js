import React, { Component } from 'react'
import { Row, Col, Collection, CollectionItem, Button } from 'react-materialize'
import Nav from '../header/header'
import { getPreorder, deletePreorder, putPreorder, putDrink } from '../../accions/preorderAccions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import './order.css'
import Delivere from './delivered'
let total = 0;

class Order extends Component {
    componentDidMount() {
        const table =this.props.auth.user.name
        this.interval = setInterval(() => this.props.getPreorder(table), 2000);
        this.resetTotal();
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    

    onDeletePreorder = (id) => {
        this.props.deletePreorder(id);
        this.resetTotal();
    };

    onPutPreorder = (preorder) => {
        preorder.map((item) => {
if(item.category === "Drink"){
    putDrink(item._id, item.idtable, item.name, item.ingredients, item.price, item.start, item.finished, item.delivered, item.noOrder)
}else{
    putPreorder(item._id, item.idtable, item.name, item.ingredients, item.price, item.start, item.finished, item.delivered, item.noOrder)

}
        })
        toast.info("Your order is being prepared by the chef ;)", {
            position: toast.POSITION.TOP_RIGHT,
            className: 'black'
        });
    };

    sumPrice(price) {
        total = total + price
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
                        <Col m={8}>
                            {
                                preorder_item.ingredients.map(each_Ingredient => {
                                    return (
                                        <p>{each_Ingredient}</p>
                                    )
                                })
                            }</Col>
                        <Col m={4}>
                            <div className='valign-wrapper'>
                                <Button className='red right' waves='light' onClick={() => this.onDeletePreorder(preorder_item._id)} >Remove</Button>

                            </div>
                        </Col>
                    </Col>

                </Row>
            )
        }
    }

    resetTotal(){
        total=0;
    }

    render() {
        const { preorder } = this.props.preorder;
        return (
            <div>
                <Nav Title="My Order"/>
                <Row>
                    <Col m={5} className='offset-m1'>
                        <Col m={12}>
                            <Collection header="Pre-Order" className='z-depth-1-half'>
                            <div className="order-delivered" >
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
