import React, { Component } from 'react'
import { Button, Col, Collection } from 'react-materialize'
import Confirmation from '../../modal/confirmation'
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../../accions/itemAccions'
import PropTypes from 'prop-types';

import '../waiter.css'


class WaiterAssist extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };


  render() {
    const { items } = this.props.item;
    return (
      <div>
        <Col m={6}  >
          <Col s={12} m={12}>
            <Collection header='Assist' className='scrolleable'>
              {
                items.map((item) => (
                  <li className="collection-item avatar">
                    <span className="title">The table number {item.idtable} need a waiter.</span>
                    <Button className="secondary-content" flat onClick={this.onDeleteClick.bind(this, item._id)}><i className="material-icons green-text">check</i></Button>
                  </li>
                ))
              }

            </Collection>
          </Col>
        </Col>
        <Confirmation />
      </div>
    )
  }
}
WaiterAssist.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItem })(WaiterAssist);
