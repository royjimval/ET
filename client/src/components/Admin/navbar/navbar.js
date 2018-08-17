import React, { Component } from 'react'
import './navbar.css';
import { Parallax, Row, Navbar, NavItem, Col } from 'react-materialize'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class NavBarAdmin extends Component {
  render() {
    const  role  = this.props.auth.user.role
    if(role==='all'){

      return (
        <div className="navmenu">
          <Row>
            <div>
              <Parallax className='header' imageSrc="https://source.unsplash.com/collection/281387/900x200" />
            </div>
            <Navbar className="nabAdmin">
              <Link to="/General">
                <div className="contenedor" id="uno">
                  <Row>
                    <Col>
                      <img class="icon" src="assets/general.svg" />
                    </Col>
                    <Col>
                      <p className="texto">General</p>
                    </Col>
                  </Row>
                </div>
              </Link>
  
              <Link to="/User">
                <div className="contenedor" id="dos">
                  <Row>
                    <Col>
                      <img class="icon" src="assets/boy.svg" />
                    </Col>
                    <Col>
                      <p className="texto">Users</p>
                    </Col>
                  </Row>
                </div>
              </Link>
  
              <div className="contenedor" id="tres">
                <Row>
                  <Col>
                    <img class="icon" src="assets/warehouse.svg" />
                  </Col>
                  <Col>
                    <p className="texto">Inventory</p>
                  </Col>
                </Row>
              </div>
  
              <div className="contenedor" id="cuatro">
                <Row>
                  <Col>
                    <img class="icon" src="assets/cashier.svg" />
                  </Col>
                  <Col>
                    <p className="texto">Casher</p>
                  </Col>
                </Row>
              </div>
  
  
              <Link to="/ReportsView">
  
                <div className="contenedor" id="cinco">
                  <Row>
                    <Col>
                      <img class="icon" src="assets/report.svg" />
                    </Col>
                    <Col>
                      <p className="texto">Reports</p>
                    </Col>
                  </Row>
                </div>
              </Link>
  
              <Link to="/addProduct" >
                <div className="contenedor" id="seis">
                  <Row>
                    <Col>
                      <img class="icon" src="assets/menu.svg" />
                    </Col>
                    <Col>
                      <p className="texto">Add Product</p>
                    </Col>
                  </Row>
                </div>
  
              </Link>
  
  
              <div className="login right" id="uno">
                <Row>
                  <Col>
                    <img class="icon" src="assets/stand-by.svg" />
                  </Col>
                </Row>
              </div>
            </Navbar>
          </Row>
        </div >
      )
    }else{
      return(
        <h1>No se puede mi joven</h1>
      )
    }
  }
}

NavBarAdmin.propTypes={
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  auth: state.auth
})

export default connect(mapStateToProps)(NavBarAdmin)
