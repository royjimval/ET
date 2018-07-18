import React, { Component } from 'react'
import { Col, Icon, Row } from 'react-materialize'
import Nav from '../header/header'
import Edit from '../modal/edit'
import { toast } from 'react-toastify'
import { addPreorder } from '../../accions/preorderAccions'
import { getproduct } from '../../accions/productAccion'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../item/item.css'

class Item extends Component {

    componentDidMount() {
        this.props.getproduct();
    }

    add_Preorder = (Products) => {
        const idorder = "2"
        const name = Products.name
        const ingredients = Products.ingredients
        const price = Products.price
        const data = { idorder, name, ingredients, price }
        console.log(data);
        this.props.addPreorder(data);
        toast.info("A waiter will attend you soon :)", {
            position: toast.POSITION.TOP_RIGHT,
            className: 'foo-bar'
        });
    }

    render() {
        const { product } = this.props.product;
        return (
            <div>
                <Nav />
                <Row>
                    {
                        product.map((product_item) => (
                            <Col s={8} m={3} l={3} className='push-s2 center' key={product_item._id} >
                                <div class=" cardd z-depth-3" >
                                    <div >
                                        <Row>
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
                                                <Col m={6}>
                                                    <button className='btns' onClick={() => this.add_Preorder(product_item)} >add</button>
                                                </Col>
                                                <Col m={6}>
                                                    <button data-target='modalEdit' className='btns'>edit</button>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className='hide-on-med-and-up show-on-medium-and-down'>
                                            <Row>
                                                <Col s={6} m={6}>
                                                    <Icon small className='icn-btn'>add_circle</Icon>
                                                </Col>
                                                <Col s={6} m={6}>
                                                    <Icon data-target='modalEdit' small className='icn-btn'>edit</Icon>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                        ))
                    }
                </Row>
                <Edit />
            </div >
        )
    }
}

Item.propTypes = {
    getproduct: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    product: state.product,
    preorder: state.preorder
});


export default connect(mapStateToProps, { getproduct, addPreorder })(Item);
