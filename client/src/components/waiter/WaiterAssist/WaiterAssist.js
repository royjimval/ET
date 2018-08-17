import React, { Component } from 'react'
import { Button, Navbar, NavItem, Parallax} from 'react-materialize'
import Confirmation from '../../modal/confirmation'
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../../accions/itemAccions'
import PropTypes from 'prop-types';

import '../waiter.css'


class WaiterAssist extends Component {

  componentDidMount() {
    this.interval1 = setInterval(() => this.props.getItems(), 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval1);
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };


  render() {
    const { items } = this.props.item;
    return (
      <div>
        <div>
          <Parallax className='header' imageSrc="https://source.unsplash.com/collection/1113375/900x550" />
        </div>
        <Navbar className='nav-color scrl'>
          {
            items.map((item) => (
              <NavItem onClick={this.onDeleteClick.bind(this, item._id)}>
                <Button className='red white-text'>table {item.idtable}</Button>
              </NavItem>
            ))
          }
        </Navbar>
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
