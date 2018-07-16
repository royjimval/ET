import React, { Component } from 'react'
import { Col, Card } from 'react-materialize'
var str1 = "Table ";
var str2 = 0;
var res = "";


export default class TableCard extends Component {

  constructor() {
    super();
    this.state = {
      table: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
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
                  <Card className='light-green lighten-1' textClassName='center black-text' title={res} actions={[<a href="google.com" className='white-text'>This is a link</a>]}>
                  </Card>
                </Col>
              )
            })

          }
        </Col>
      </div>
    )
  }

}