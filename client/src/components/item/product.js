import React, { Component } from 'react';
import Nav from '../header/header';
import '../item/item.css';
import { Col, Row, Button, Collapsible, CollapsibleItem } from 'react-materialize';
import ModalEdit from '../modal/edit'
import { getproduct_Breakfast, getproduct_Meal, getproduct_Dessert, getproduct_Dinner, getproduct_Drink } from '../../accions/productAccion';
import { toast } from 'react-toastify'
import { addPreorder } from '../../accions/preorderAccions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



class Item extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            ingredients: [],
            extra: [],
            photo: "",
            ids: "",
            price: "",
            category: ""
        }
    }

    componentDidMount() {
        this.props.getproduct_Breakfast();
        this.props.getproduct_Meal();
        this.props.getproduct_Dinner();
        this.props.getproduct_Drink();
        this.props.getproduct_Dessert();
    }

    datamodal(product_item) {
        console.log(product_item)
        this.setState({
            name: product_item.name,
            ingredients: product_item.ingredients,
            photo: product_item.photo,
            extra: product_item.extra,
            ids: product_item._id,
            price: product_item.price,
            category: product_item.category
        })
    }

    add_Preorder = (Products) => {
        const idtable = this.props.auth.user.name
        const name = Products.name
        const ingredients = Products.ingredients
        const price = Products.price
        const category = "Drink"
        const data = { idtable, name, ingredients, price, category }
        console.log(idtable)
        this.props.addPreorder(data);
        toast.info(name + " is added now to your preorder :) ", {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'foo-bar'
        });
    }

    render() {
        const { breakfast } = this.props.breakfast;
        const { meal } = this.props.meal;
        const { dinner } = this.props.dinner;
        const { drink } = this.props.drink;
        const { dessert } = this.props.dessert;

        const  role  = this.props.auth.user.role
        if(role==='Table' || role==='all'){

            return (
    
    
                <div>
                    <Nav Title="Menu" />

                <br></br>
                    <div className="styleheaders center divHeader">
                        <div>
                            <img src='assets/favicon-57.png' />
                        </div>
                        <div className="divHeaderText">
                            Open a category and start to select your food :D
                        </div>
                    </div>

                    <Collapsible popout defaultActiveKey={1} >
                        {/* Starts Brakfast Component */}
                        <CollapsibleItem className='indigo lighten-2' header='BREAKFASTS' icon='arrow_drop_down'>
                            <Row className="no-marg-b">
                                <div className='space'></div>
                                {
                                    breakfast.map((product_item) => (
                                        <Col s={6} m={4} l={3} xl={3} key={product_item._id}>
                                            <div className="card">
                                                <div className='card-header'>
                                                    <Row className="no-marg-b">
                                                        <Col s={12} m={12} l={12} xl={12}>
                                                            <p class="left-align title truncate">{product_item.name}</p>
                                                        </Col>
                                                        <Col s={12} m={12} l={12} xl={12}>
                                                            <p className="left-align title green-text">${product_item.price}</p>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <img className="card-img" src={product_item.photo} alt={product_item.name} />
                                                <div className="card-footer center">
                                                    <Button className="green accent-4" data-target="modal_for_categorys" onClick={() => this.datamodal(product_item)}>Add Product</Button>
                                                </div>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </CollapsibleItem>
    
                        {/* Start Meal COmponent */}
                        <CollapsibleItem className='grey darken-1' header='MEALS' icon='arrow_drop_down'>
                            <Row className="no-marg-b">
                                {
                                    meal.map((product_item) => (
                                        <Col s={6} m={4} l={3} xl={3} key={product_item._id}>
                                            <div className="card z-depth-3">
                                                <div className='card-header'>
                                                    <Row className="no-marg-b">
                                                        <Col s={12} m={12} l={12} xl={12}>
                                                            <p class="left-align title truncate">{product_item.name}</p>
                                                        </Col>
                                                        <Col s={12} m={12} l={12} xl={12}>
                                                            <p className="left-align title green-text">${product_item.price}</p>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <img className="card-img" src={product_item.photo} alt={product_item.name} />
                                                <div className="card-footer center">
                                                    <Button className="green accent-4" data-target="modal_for_categorys" onClick={() => this.datamodal(product_item)}>Add Product</Button>
                                                </div>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </CollapsibleItem>
    
                        {/* Start Dinner Component */}
                        <CollapsibleItem className='red lighten-1' header='DINNERS' icon='arrow_drop_down'>
                            <Row className="no-marg-b">
                                {
                                    dinner.map((product_item) => (
                                        <Col s={6} m={4} l={3} xl={3} key={product_item._id}>
                                            <div className="card z-depth-3">
                                                <div className='card-header'>
                                                    <Row className="no-marg-b">
                                                        <Col s={12} m={12} l={12} xl={12}>
                                                            <p class="left-align title truncate">{product_item.name}</p>
                                                        </Col>
                                                        <Col s={12} m={12} l={12} xl={12}>
                                                            <p className="left-align title green-text">${product_item.price}</p>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <img className="card-img" src={product_item.photo} alt={product_item.name} />
                                                <div className="card-footer center">
                                                <Button className="green accent-4" data-target="modal_for_categorys" onClick={() => this.datamodal(product_item)}>Add Product</Button>
                                                </div>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </CollapsibleItem>
    
                        {/* Start Dessert Component */}
                        <CollapsibleItem className='yellow lighten-2' header='DESSERTS' icon='arrow_drop_down'>
                            <Row className="no-marg-b">
                                {
                                    dessert.map((product_item) => (
                                        <Col s={6} m={4} l={3} xl={3} key={product_item._id}>
                                            <div className="card z-depth-3">
                                                <div className='card-header'>
                                                    <Row className="no-marg-b">
                                                        <Col s={12} m={12} l={12} xl={12}>
                                                            <p class="left-align title truncate">{product_item.name}</p>
                                                        </Col>
                                                        <Col s={12} m={12} l={12} xl={12}>
                                                            <p className="left-align title green-text">${product_item.price}</p>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <img className="card-img" src={product_item.photo} alt={product_item.name} />
                                                <div className="card-footer center">
                                                    <Button className="green accent-4" data-target="modal_for_categorys" onClick={() => this.datamodal(product_item)}>Add Product</Button>
                                                </div>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </CollapsibleItem>
    
                        {/* Start Drinks Component */}
                        <CollapsibleItem className='light-green accent-1' header='DRINKS' icon='arrow_drop_down'>
                            <Row className="no-marg-b">
                                {
                                    drink.map((product_item) => (
                                        <Col s={6} m={4} l={3} xl={3} key={product_item._id}>
                                            <div className="card z-depth-3">
                                                <div className='card-header'>
                                                    <Row className="no-marg-b">
                                                        <Col s={12} m={12} l={12} xl={12}>
                                                            <p class="left-align title truncate">{product_item.name}</p>
                                                        </Col>
                                                        <Col s={12} m={12} l={12} xl={12}>
                                                            <p className="left-align title green-text">${product_item.price}</p>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <img className="card-img" src={product_item.photo} alt={product_item.name} />
                                                <div className="card-footer center">
                                                    <Button className="green accent-4" onClick={() => this.add_Preorder(product_item)}>Add Product</Button>
                                                </div>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </CollapsibleItem>
    
                    </Collapsible>
    
    
    
    
    
                    <ModalEdit datapass={this.state} />
                </div >
            )
        }else{
            return(
                <div className='bg-img  valign-wrapper'>
                <div className="cntr center-align z-depth-2">
                  <h1 className="white-text">Go back</h1>
                  <h5 className="white-text">you shouldn't be here</h5>
                  <Button onClick={() => this.props.history.push('/')}>go back</Button>
                </div>
              </div>
            )
        }
    }
}

Item.propTypes = {
    getproduct_Breakfast: PropTypes.func.isRequired,
    getproduct_Meal: PropTypes.func.isRequired,
    getproduct_Dinner: PropTypes.func.isRequired,
    getproduct_Drink: PropTypes.func.isRequired,
    getproduct_Dessert: PropTypes.func.isRequired,

    breakfast: PropTypes.object.isRequired,
    meal: PropTypes.object.isRequired,
    dinner: PropTypes.object.isRequired,
    drink: PropTypes.object.isRequired,
    dessert: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    breakfast: state.product,
    preorder: state.preorder,
    meal: state.product,
    dinner: state.product,
    drink: state.product,
    dessert: state.product,
    auth: state.auth
});


export default connect(mapStateToProps, { addPreorder, getproduct_Breakfast, getproduct_Meal, getproduct_Dinner, getproduct_Drink, getproduct_Dessert })(Item);
