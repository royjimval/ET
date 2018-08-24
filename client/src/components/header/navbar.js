import React, { Component } from 'react'
import { Navbar, Parallax } from 'react-materialize'
import '../header/header.css'


export default class Barnav extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <h1 className='centered ls'>
            {this.props.NavTitle}
          </h1>
        </div>
        <div>
          <Parallax className='header' imageSrc="assets/pattern.svg" />
        </div>

        <Navbar className='nav-color'>

        </Navbar>

      </div>
    )
  }
}
