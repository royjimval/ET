import React, { Component } from 'react'
import { Navbar, Parallax } from 'react-materialize'
import '../header/header.css'


export default class Barnav extends Component {
  render() {
    return (
      <div>

        <div>
          <Parallax className='header' imageSrc="https://source.unsplash.com/collection/1113375/900x550" />
        </div>

        <Navbar className='blue-grey darken-3'>

        </Navbar>

      </div>
    )
  }
}
