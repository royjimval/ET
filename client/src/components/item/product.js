import React, { Component } from 'react';
import Nav from '../header/header';
import '../item/item.css';
import { Col, Icon, Row, Button, Collapsible, CollapsibleItem } from 'react-materialize';
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
        const idtable = "1"
        const name = Products.name
        const ingredients = Products.ingredients
        const price = Products.price
        const data = { idtable, name, ingredients, price }
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
        return (

            <div>
                <Nav />
                <Collapsible popout >
                    {/* Starts Brakfast Component */}
                    <CollapsibleItem className='indigo lighten-2' header='BREAKFASTS' icon='arrow_drop_down'>
                        <Row>
                            <div className='space'></div>
                            {
                                breakfast.map((product_item) => (
                                    <Col s={8} m={3} l={3} className='push-s2 center' key={product_item._id} >
                                        <div class=" cardd z-depth-3" >
                                            <div >
                                                <Row className='hdr'>
                                                    <Col s={9} m={9} className="left-align">
                                                        <h5>{product_item.name}</h5>
                                                    </Col>
                                                    <Col s={3} m={3} className="right-align">
                                                        <h5 className='green-text'>${product_item.price}</h5>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <img class="crdImg" src={product_item.photo} alt=""></img>

                                            <div class="center supporting_text">
                                                <div className='hide-on-med-and-down'>
                                                    <Row>
                                                        <Col m={12}>
                                                            <button data-target="modal_for_categorys" className='btns' onClick={() => this.datamodal(product_item)}>ADD TO ORDER</button>
                                                        </Col>
                                                    </Row>
                                                </div>

                                                <div className='hide-on-med-and-up show-on-medium-and-down'>
                                                    <Row>
                                                        <Col s={12} m={12}>
                                                            <Button flat className='icn-btn' data-target="modal_for_categorys" onClick={() => this.datamodal(product_item)}>
                                                                <Icon small>edit</Icon>
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>

                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </CollapsibleItem>

                    {/* Start Meal COmponent */}
                    <CollapsibleItem className='grey darken-1' header='MEALS' icon='arrow_drop_down'>
                        <Row>
                            <div className='space'></div>
                            {
                                meal.map((product_item) => (
                                    <Col s={8} m={3} l={3} className='push-s2 center' key={product_item._id} >
                                        <div class=" cardd z-depth-3" >
                                            <div >
                                                <Row className='hdr'>
                                                    <Col s={9} m={9} className="left-align">
                                                        <h5>{product_item.name}</h5>
                                                    </Col>
                                                    <Col s={3} m={3} className="right-align">
                                                        <h5 className='green-text'>${product_item.price}</h5>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <img class="crdImg" src={product_item.photo} alt=""></img>

                                            <div class="center supporting_text">
                                                <div className='hide-on-med-and-down'>
                                                    <Row>
                                                        <Col m={12}>
                                                            <button data-target="modal_for_categorys" className='btns' onClick={() => this.datamodal(product_item)}>ADD TO ORDER</button>
                                                        </Col>
                                                    </Row>
                                                </div>

                                                <div className='hide-on-med-and-up show-on-medium-and-down'>
                                                    <Row>
                                                        <Col s={12} m={12}>
                                                            <Button flat className='icn-btn' data-target="modal_for_categorys" onClick={() => this.datamodal(product_item)}>
                                                                <Icon small>edit</Icon>
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>

                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </CollapsibleItem>

                    {/* Start Dinner Component */}
                    <CollapsibleItem className='red lighten-1' header='DINNERS' icon='arrow_drop_down'>
                        <Row>
                            <div className='space'></div>
                            {
                                dinner.map((product_item) => (
                                    <Col s={8} m={3} l={3} className='push-s2 center' key={product_item._id} >
                                        <div class=" cardd z-depth-3" >
                                            <div >
                                                <Row className='hdr'>
                                                    <Col s={9} m={9} className="left-align">
                                                        <h5>{product_item.name}</h5>
                                                    </Col>
                                                    <Col s={3} m={3} className="right-align">
                                                        <h5 className='green-text'>${product_item.price}</h5>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <img class="crdImg" src={product_item.photo} alt=""></img>

                                            <div class="center supporting_text">
                                                <div className='hide-on-med-and-down'>
                                                    <Row>
                                                        <Col m={12}>
                                                            <button data-target="modal_for_categorys" className='btns' onClick={() => this.datamodal(product_item)}>ADD TO ORDER</button>
                                                        </Col>
                                                    </Row>
                                                </div>

                                                <div className='hide-on-med-and-up show-on-medium-and-down'>
                                                    <Row>
                                                        <Col s={12} m={12}>
                                                            <Button flat className='icn-btn' data-target="modal_for_categorys" onClick={() => this.datamodal(product_item)}>
                                                                <Icon small>edit</Icon>
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>

                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </CollapsibleItem>

                    {/* Start Dessert Component */}
                    <CollapsibleItem className=' yellow lighten-2' header='DESSERTS' icon='arrow_drop_down'>
                        <Row>
                            <div className='space'></div>
                            {
                                dessert.map((product_item) => (
                                    <Col s={8} m={3} l={3} className='push-s2 center' key={product_item._id} >
                                        <div class=" cardd z-depth-3" >
                                            <div >
                                                <Row className='hdr'>
                                                    <Col s={9} m={9} className="left-align">
                                                        <h5>{product_item.name}</h5>
                                                    </Col>
                                                    <Col s={3} m={3} className="right-align">
                                                        <h5 className='green-text'>${product_item.price}</h5>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <img class="crdImg" src={product_item.photo} alt=""></img>

                                            <div class="center supporting_text">
                                                <div className='hide-on-med-and-down'>
                                                    <Row>
                                                        <Col m={12}>
                                                            <button data-target="modal_for_categorys" className='btns' onClick={() => this.datamodal(product_item)}>ADD TO ORDER</button>
                                                        </Col>
                                                    </Row>
                                                </div>

                                                <div className='hide-on-med-and-up show-on-medium-and-down'>
                                                    <Row>
                                                        <Col s={12} m={12}>
                                                            <Button flat className='icn-btn' data-target="modal_for_categorys" onClick={() => this.datamodal(product_item)}>
                                                                <Icon small>edit</Icon>
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>

                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </CollapsibleItem>

                    {/* Start Drinks Component */}
                    <CollapsibleItem className='light-green accent-1' header='DRINKS' icon='arrow_drop_down'>

                        <Row>
                            <div className='space'></div>
                            {
                                drink.map((product_item) => (
                                    <Col s={8} m={3} l={3} className='push-s2 center' key={product_item._id} >
                                        <div class=" cardd z-depth-3" >
                                            <div >
                                                <Row className='hdr'>
                                                    <Col s={9} m={9} className="left-align">
                                                        <h5>{product_item.name}</h5>
                                                    </Col>
                                                    <Col s={3} m={3} className="right-align">
                                                        <h5 className='green-text'>${product_item.price}</h5>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <img class="crdImg" src={product_item.photo} alt=""></img>

                                            <div class="center supporting_text">
                                                <div className='hide-on-med-and-down'>
                                                    <Row>
                                                        <Col m={12}>
                                                            <Button className='btns' onClick={() => this.add_Preorder(product_item)} >ADD TO ORDER</Button>
                                                        </Col>
                                                    </Row>
                                                </div>

                                                <div className='hide-on-med-and-up show-on-medium-and-down'>
                                                    <Row>
                                                        <Col s={12} m={12}>
                                                            <Icon small className='icn-btn'>add_circle</Icon>
                                                        </Col>
                                                    </Row>
                                                </div>
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
    dessert: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    breakfast: state.product,
    preorder: state.preorder,
    meal: state.product,
    dinner: state.product,
    drink: state.product,
    dessert: state.product

});


export default connect(mapStateToProps, { addPreorder, getproduct_Breakfast, getproduct_Meal, getproduct_Dinner, getproduct_Drink, getproduct_Dessert })(Item);
