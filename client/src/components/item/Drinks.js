import React, { Component } from 'react';
import { Col, Icon, Row, Button, Collapsible, CollapsibleItem } from 'react-materialize';
import '../item/item.css';
import { toast } from 'react-toastify'
import { addPreorder } from '../../accions/preorderAccions'
import { getproduct_Drink } from '../../accions/productAccion';
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
            price: ""
        }
    }

    componentDidMount() {
        this.props.getproduct_Drink();
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
        const { drink } = this.props.product;
        return (
            <div>
                <Collapsible popout >

                    <CollapsibleItem header='DRINKS' icon='arrow_drop_down_circle'>

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

                        </Collapsible  >


            </div >
        )
    }
}

Item.propTypes = {
    getproduct_Drink: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    product: state.product,
    preorder: state.preorder
});


export default connect(mapStateToProps, { getproduct_Drink, addPreorder })(Item);
