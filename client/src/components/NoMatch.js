import React, { Component } from 'react'
import { Button } from 'react-materialize';

export default class NoMatch extends Component {
  render() {
    return (
      <div>
          <div className="cntr center-align z-depth-2">
          <h1 className="white-text">ERROR 404</h1>
          <h5 className="white-text">this page doesn't exist</h5>
          <Button onClick={() => this.props.history.push('/')}>go back</Button>
          </div>
      </div>
    )
  }
}
