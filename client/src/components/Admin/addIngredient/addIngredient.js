import React, { Component } from 'react'
import NavBarAdmin from '../navbar/navbar';
import { Col, Collapsible, CollapsibleItem, Row, Input, Button } from '../../../../../node_modules/react-materialize';
import { get_ingredients, addIngredients } from '../../../accions/ingredientsAccions'
import { addProduct } from '../../../accions/productAccion'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux'
import "./addProduct.css"

class addIngredient extends Component {

    componentDidMount() {
        this.props.get_ingredients();
    }

    handlesumit = (e) => {
        e.preventDefault();

        const { name } = this.form;
        const { Sellprice } = this.form;

        const nameValue = name.value;
        const SellpriceValue = Sellprice.value;

        const data = { nameValue, SellpriceValue }
        this.props.addIngredients(data)
        toast.info(nameValue + " is added now to your ingredients :) ", {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'foo-bar'
        });
    }



    render() {
        const { ingredients } = this.props.ingredients

        return (
            <div class="">
                <Row >
                    <NavBarAdmin />
                </Row>
                <ToastContainer />


                <Row>
                    <form onSubmit={this.handlesumit} ref={(form) => (this.form = form)}>
                        <Row className="no-marg-b">
                            <Col m={4} className='addProduct-wrapper'>
                                <Input name="name" s={12} label="Name" />

                                <Input name="Sellprice" label="Sellprice" s={12} />

                            </Col>
                        </Row>
                        <Row className="center-align no-marg-b">
                            <Button className='green' waves="light" large >ADD</Button>
                        </Row>
                    </form>
                </Row>

            </div>
        )
    }
}

addIngredient.propTypes = {
    get_ingredients: PropTypes.func.isRequired,
    addIngredients: PropTypes.func.isRequired,
    ingredients: PropTypes.object.isRequired,
    addProduct: PropTypes.object.isRequired


};

function mapStateToProps(state, props) {
    return {
        ingredients: state.ingredients
    };
}


export default connect(mapStateToProps, { get_ingredients, addIngredients })(addIngredient);
