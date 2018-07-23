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
        return (

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


