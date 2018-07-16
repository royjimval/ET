import React, { Component } from 'react'
import { Button,Icon,Col, Collection, CollectionItem } from 'react-materialize'
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
          <h3 className='center'>Assist</h3>
          <Col s={12} m={12}>
            <Collection className=''>
              {
                items.map((item) => (
                <CollectionItem className="center"> <Button className='btn-wide white green-text' key={item._id}  waves='green' onClick={this.onDeleteClick.bind(this, item._id)} >Table number {item.idtable} need help <Icon>check</Icon></Button>
                </CollectionItem>
                ))
              }

            </Collection>
          </Col>
        </Col>
        <Confirmation/>
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

export default connect(mapStateToProps, { getItems, deleteItem})(WaiterAssist);
