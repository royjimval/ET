import React, { Component } from 'react'
import { Row, Col, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import './start.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ClientStart extends Component {
  render() {
    return (
      <div>
        <div className='bg-img  valign-wrapper'>
          <Row className='container'>
            <Col s={12} m={12} l={12} className=''>
              <h2 className='white-text center ttl'>Table {this.props.auth.user.name}</h2>
              <Link href="/Menu" to="/Menu">
                <Button className='start-btn'>Start</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

ClientStart.propTypes={
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  auth: state.auth
})

export default connect(mapStateToProps)(ClientStart)