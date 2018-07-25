import React, { Component } from 'react'
import { Row, Col, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import './start.css'

export default class ClientStart extends Component {
  render() {
    return (
      <div>
        <div className='bg-img  valign-wrapper'>
          <Row className='container'>
            <Col s={12} m={12} l={12} className=''>
              <h2 className='white-text center'>Table X</h2>
              <Link href="/Menu" to="/Menu">
                <Button className='animated infinite pulse btns'>Start</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
