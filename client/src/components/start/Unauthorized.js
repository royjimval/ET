import React, { Component } from 'react'
import { Button } from 'react-materialize';

export default class Unauthorized extends Component {
  render() {
    return (
      <div>
          <div className="cntr center-align z-depth-2">
            <h1 className="white-text">Go back</h1>
            <h5 className="white-text">you shouldn't be here</h5>
            <Button onClick={() => this.props.history.push('/')}>go back</Button>
          </div>
      </div>
    )
  }
}
