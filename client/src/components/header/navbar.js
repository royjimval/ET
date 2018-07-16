import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'


export default class Barnav extends Component {
  render() {
    return (
      <div> 
        
        
        <Navbar className='blue-grey darken-3'>
      <NavItem href='get-started.html'>Getting started</NavItem>
      <NavItem href='components.html'>Components</NavItem>
     
    </Navbar>
        
      </div>
    )
  }
}
