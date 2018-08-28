import React, { Component } from 'react'
import { Navbar, Parallax,NavItem } from 'react-materialize'


class Barnav extends Component {

  logOutUser(){
    window.localStorage.clear()
    setTimeout(()=>{window.location = '/'},1000)
  }
  

  render() {
    return (
      <div>
        <div className='container'>
          <h1 className='centered ls'>
            {this.props.Title}
          </h1>
        </div>
        <div>
          <Parallax className='header' imageSrc="assets/pattern.svg" />
        </div>

        <Navbar className='nav-color'>
          <NavItem className='right' onClick={()=>this.logOutUser()}><img className='menu-icon' src='https://image.flaticon.com/icons/svg/1085/1085311.svg' width='30px' /></NavItem>
        </Navbar>

      </div>
    )
  }
}

export default (Barnav)