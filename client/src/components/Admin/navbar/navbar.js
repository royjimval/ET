// import React, { Component } from 'react'
// import './navbar.css';
// import { Parallax, Row, Navbar, NavItem, Col } from 'react-materialize'
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';


// class NavBarAdmin extends Component {
//   render() {
//     const  role  = this.props.auth.user.role
//     if(role==='all'){

//       return (
//         <div className="navmenu">
//           <Row>
//             <div>
//               <Parallax className='header' imageSrc="https://source.unsplash.com/collection/281387/900x200" />
//             </div>
//             <Navbar className="nabAdmin">
//               <Link to="/General">
//                 <div className="contenedor" id="uno">
//                   <Row>
//                     <Col>
//                       <img class="icon" src="assets/general.svg" />
//                     </Col>
//                     <Col>
//                       <p className="texto">General</p>
//                     </Col>
//                   </Row>
//                 </div>
//               </Link>
  
//               <Link to="/User">
//                 <div className="contenedor" id="dos">
//                   <Row>
//                     <Col>
//                       <img class="icon" src="assets/boy.svg" />
//                     </Col>
//                     <Col>
//                       <p className="texto">Users</p>
//                     </Col>
//                   </Row>
//                 </div>
//               </Link>

//               <Link to="/inventory" >
//               <div className="contenedor" id="tres">
//                 <Row>
//                   <Col>
//                     <img class="icon" src="assets/warehouse.svg" />
//                   </Col>
//                   <Col>
//                     <p className="texto">Inventory</p>
//                   </Col>
//                 </Row>
//               </div>
//               </Link>
  
//               <div className="contenedor" id="cuatro">
//                 <Row>
//                   <Col>
//                     <img class="icon" src="assets/cashier.svg" />
//                   </Col>
//                   <Col>
//                     <p className="texto">Casher</p>
//                   </Col>
//                 </Row>
//               </div>
  
  
//               <Link to="/ReportsView">
  
//                 <div className="contenedor" id="cinco">
//                   <Row>
//                     <Col>
//                       <img class="icon" src="assets/report.svg" />
//                     </Col>
//                     <Col>
//                       <p className="texto">Reports</p>
//                     </Col>
//                   </Row>
//                 </div>
//               </Link>
  
//               <Link to="/addProduct" >
//                 <div className="contenedor" id="seis">
//                   <Row>
//                     <Col>
//                       <img class="icon" src="assets/menu.svg" />
//                     </Col>
//                     <Col>
//                       <p className="texto">Add Product</p>
//                     </Col>
//                   </Row>
//                 </div>
  
//               </Link>
//               <Link to="/addIngredient" >
//                 <div className="contenedor" id="seven">
//                   <Row>
//                     <Col>
//                       <img class="icon" src="assets/menu.svg" />
//                     </Col>
//                     <Col>
//                       <p className="texto">Add ingredient</p>
//                     </Col>
//                   </Row>
//                 </div>

//               </Link>
  
  
//               <div className="login right" id="uno">
//                 <Row>
//                   <Col>
//                     <img class="icon" src="assets/stand-by.svg" />
//                   </Col>
//                 </Row>
//               </div>
//             </Navbar>
//           </Row>
//         </div >
//       )
//     }else{
//       return(
//         <h1>No se puede mi joven</h1>
//       )
//     }
//   }
// }

// NavBarAdmin.propTypes={
//   auth: PropTypes.object.isRequired
// }

// const mapStateToProps = state =>({
//   auth: state.auth
// })

// export default connect(mapStateToProps)(NavBarAdmin)


import React, { Component } from 'react'
import './navbar.css';
import { Parallax, Row, Navbar, NavItem, Col } from 'react-materialize'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class NavBarAdmin extends Component {
  render() {
    const role = this.props.auth.user.role

    if (role === 'all') {
      return (
        <div className="navmenu">
          <Row>
            <div>
              <Parallax className='header' imageSrc="https://source.unsplash.com/collection/281387/900x200" />
            </div>
            <Navbar className="nabAdmin">
              <NavItem className="conteinernav" componentClass={Link} href="/General" to="/General">
                <img className='menu-icon iconnav' src='assets/general.svg' width='31px' />
                General
            </NavItem>

              <NavItem className="conteinernav" componentClass={Link} href="/User" to="/User">
                <img className='menu-icon iconnav' src='assets/boy.svg' width='31px' />
                Users
            </NavItem>

              <NavItem className="conteinernav" componentClass={Link} href="/Inventory" to="/Inventory">
                <img className='menu-icon iconnav' src='assets/warehouse.svg' width='31px' />
                Inventory
            </NavItem>

              <NavItem className="conteinernav" componentClass={Link} href="/cashier" to="/cashier">
                <img className='menu-icon iconnav' src='assets/cashier.svg' width='31px' />
                Cashier
            </NavItem>

              <NavItem className="conteinernav" componentClass={Link} href="/ReportsView" to="/ReportsView">
                <img className='menu-icon iconnav' src='assets/report.svg' width='31px' />
                Reports
            </NavItem>

              <NavItem className="conteinernav" componentClass={Link} href="/addProduct" to="/addProduct">
                <img className='menu-icon iconnav' src='assets/menu.svg' width='30px' />
                Add Product
            </NavItem>

              <NavItem className="conteinernav" componentClass={Link} href="/addIngredient" to="/addIngredient">
                <img className='menu-icon iconnav' src='assets/harvest.svg' width='30px' />
                Add Ingredient
            </NavItem>

              <NavItem className="conteinernav right" componentClass={Link} href="/General" to="/General">
                <img className='menu-icon iconnav' src='assets/stand-by.svg' width='30px' />
                Logout
            </NavItem>
            </Navbar>
          </Row>
        </div >
      )
    }
    else {
      return (
        <h1>No se puede mi joven</h1>
      )
    }
  }
}

NavBarAdmin.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(NavBarAdmin)