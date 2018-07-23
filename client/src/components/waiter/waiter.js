import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrder, deleteOrder } from '../../accions/orderAccions';

import { Row} from 'react-materialize'
import '../waiter/waiter.css'

import Buttons from '../waiter/TableDescription/ButtonsWaiter'
import WaiterAssist from './WaiterAssist/WaiterAssist'
import TableDescription from './TableDescription/TableDescription'
import Barnav from '../header/navbar'



import PropTypes from 'prop-types';

class Order extends Component {


    componentDidMount() {
        this.props.getOrder();
    }



    onDeleteOrder = id => {
        this.props.deleteOrder(id);
    };



    render() {
        // const { order } = this.props.order;
        return (
            /*  <div>
                 <table>
                     <thead>
                         <tr>
                             <th>TABLE ASSISNTANCE </th>
                         </tr>
                     </thead>
                     <tbody>
                         {
                             items.map((item) => (
                             <th key={item._id}>
                                 <h3>Table number {item.idtable} need a waiter for assistence</h3>
                                 <button onClick={this.onDeleteClick.bind(this, item._id)} > DELETE </button>
                             </th>
                             ))
                         }
                     </tbody>
                 </table>
 
                 <table>
                     <thead>
                         <tr>
                             <th>FOOD TO DELIVERED </th>
                         </tr>
                     </thead>
                     <tbody>
                         {
                             order.map((order_by_element) => (
                             <th key={order_by_element._id}>
                                 <h3>{order_by_element.idtable}</h3>
                                 <h3>{order_by_element.foods}</h3>
                                 <h3>{order_by_element.start}</h3>
 
                                 <button onClick={this.onDeleteOrder.bind(this, order_by_element._id)} > DELETE </button>
                             </th>
                             ))
                         }
                     </tbody>
                 </table>
             </div> */
            <div className='blue-grey lighten-5'>
                <Barnav />
                <Row>
                    <Buttons />
                    <WaiterAssist />
                    <TableDescription />


                </Row>
            </div>
        )
    }

}

Order.propTypes = {
    getOrder: PropTypes.func.isRequired,
    order: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    order: state.order
});


export default connect(mapStateToProps, {deleteOrder, getOrder })(Order);


