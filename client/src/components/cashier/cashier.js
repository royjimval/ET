import React, { Component } from 'react'
import { Row, Col, Collection, CollectionItem, Button, Preloader, Table, Icon } from 'react-materialize'
import Nav from '../header/header'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { getProductCashier, putPreorder} from '../../accions/preorderAccions'
import { get_id_order, updateId_order } from '../../accions/idorderAccions'
import { addOrder } from '../../accions/orderAccions'
import './order.css'
let new_id, order_id
let total = 0;
let data;

class Cashier extends Component {

    componentDidMount(){
        this.props.get_id_order();
    }

sumPrices(preorder){
    preorder.map((preorder_item) =>

        total = total + preorder_item.price
    )
}

    getProducts(item){
        this.props.getProductCashier(item);
        total = 0;        

    }

    onPutPreorder = (preorder, id_order) => {
        id_order.map(id =>(
            new_id= id.order,
            order_id = id._id
        ))
        console.log(new_id)

        preorder.map((item) => (
            putPreorder(item._id, item.idtable, item.name, item.ingredients, item.price, item.start, item.finished, item.delivered, new_id)
        ))
        
        data = {new_id, total}
        this.props.addOrder(data)

        new_id = parseInt(new_id)  + 1
        new_id = new_id.toString()
        updateId_order(order_id, new_id)
    };

    render() {
        const { preorderCashier } = this.props.preorderCashier;
        const { id_order } = this.props.id_order;
        
        return (
            <div>
                <Nav />
                <Button waves='light' onClick={() => this.getProducts("1")} > Table 1<Icon left>save</Icon></Button>
                <Button waves='light' onClick={() => this.getProducts("2")} > Table 2<Icon left>save</Icon></Button>

                <Table >
                    {this.sumPrices(preorderCashier)}

                {
                        preorderCashier.map((preorder_item) =>
                        (
                                <thead>
                                    <tr>
                                        <Col s={6} m={6}>
                                            <th data-field="id"><strong className="">{preorder_item.name}</strong></th>
                                        </Col>
                                        <Col s={6} m={6}>
                                            <th data-field="id" className="">{preorder_item.price}</th>
                                            
                                        </Col>
                                        
                                    </tr>
                                </thead>
                        ))

                }

                    <Row>
                    <h1>{total}</h1>
                    </Row>
                    <Button waves='light' onClick={() => this.onPutPreorder(preorderCashier, id_order)} >PAY<Icon left>save</Icon></Button>
                </Table>

            </div>
        )
    }
}

Cashier.propTypes = {
    getProductCashier: PropTypes.func.isRequired,
    preorderCashier: PropTypes.object.isRequired,
    get_id_order: PropTypes.func.isRequired,
    id_order: PropTypes.object.isRequired,
    addOrder: PropTypes.func.isRequired
    // updateId_order: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
    preorderCashier: state.preorder,
    id_order: state.id_order
});


export default connect(mapStateToProps, { getProductCashier, putPreorder, get_id_order, updateId_order, addOrder })(Cashier);
