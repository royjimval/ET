import React, { Component } from 'react'
import { Col, Button, Icon, Card } from 'react-materialize'
import { getPreorderbytable } from '../../../accions/preorderAccions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

var str1 = "Table ";
var str2 = 0;
var res = "";


class TableCard extends Component {

  constructor() {
    super();
    this.state = {
      table: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }

  seeOrder = (table) => {
    console.log(table)
    this.props.getPreorderbytable(table);
  }
  render() {
    return (

      <div>
        <Col m={6}>
          <h3 className='center'>Tables</h3>
          {
            this.state.table.map(table => {
              str2 = table
              res = str1.concat(str2)
              return (
                <Col s={12} m={6} l={4} >
                  <Card onClick={() => this.seeOrder(table)} className='blue-grey darken-1' textClassName='white-text' title={res}></Card>
                </Col>
              )
            })

          }
        </Col>
      </div>

    )
  }

}

TableCard.propTypes = {
  getPreorderbytable: PropTypes.func.isRequired,
  preorder: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  preorder: state.preorder
});


export default connect(mapStateToProps, { getPreorderbytable })(TableCard);
