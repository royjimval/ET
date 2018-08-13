import React, { Component } from 'react'
import NavBarAdmin from '../navbar/navbar';
import { Row, Input, Button } from '../../../../../node_modules/react-materialize';
import Col from '../../../../../node_modules/react-materialize/lib/Col';
import { get_ingredients } from '../../../accions/ingredientsAccions'
import { addProduct } from '../../../accions/productAccion'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux'




class addProductClass extends Component {

    componentDidMount() {
        this.props.get_ingredients();
    }

    handlesumit = (e) =>{
        e.preventDefault();

        const { name } = this.form; 
        const { category } = this.form;
        const { price } = this.form;
        const { photo } = this.form;

        const { ingredients } = this.form;
        const checkboxArrayIngredients = Array.prototype.slice.call(ingredients);
        const checkedCheckboxesIngredients = checkboxArrayIngredients.filter(input => input.checked);
        const checkedCheckboxesValuesIngredients = checkedCheckboxesIngredients.map(input => input.value);
        console.log('checked ingredients:', checkedCheckboxesValuesIngredients);

        const { extra } = this.form;
        const checkboxArrayExtra = Array.prototype.slice.call(extra);
        const checkedCheckboxesExtra = checkboxArrayExtra.filter(input => input.checked);
        const checkedCheckboxesValuesExtra = checkedCheckboxesExtra.map(input => input.value);
        console.log('checked extra:', checkedCheckboxesValuesExtra);

        const nameValue = name.value;
        const categoryValue = category.value;
        const priceValue = price.value;
        const photoValue = photo.value;
        const data = { nameValue, categoryValue, priceValue, checkedCheckboxesValuesIngredients, checkedCheckboxesValuesExtra, photoValue}
        console.log(data)
        this.props.addProduct(data)
        toast.info(nameValue + " is added now to your Menu :) ", {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'foo-bar'
        });
    }


    render() {
        const {ingredients} = this.props.ingredients

        return (
            <div class="">
                <Row >
                    <NavBarAdmin />
                </Row>
                <ToastContainer />


                    <Row>
                        <form onSubmit={this.handlesumit} ref={form => this.form = form}>
                        <Input name='name' s={6} label="Name" />
                        <Input  name='category' s={12} type='select' label="Materialize Select" defaultValue='2'>
                            <option value='Breakfast'>Breakfast</option>
                            <option value='Meal'>Meal</option>
                            <option value='Dessert'>Dessert</option>
                            <option value='Dinner'>Dinner</option>
                            <option value='Drink'>Drink</option>

                        </Input> 
                        
                        <Input name='price' label="Price" s={6} />

                        <Col m={6}>
                        <label>Ingredients</label>
                        <Row>
                        {
                            ingredients.map(eachIngredient => {
                                return(
                                    <Input name='ingredients' type='checkbox' value={eachIngredient.name} label={eachIngredient.name} />                       
                                )
                            })
                        }
                        </Row>
                        </Col>

                        <Col m={6}>
                            <label>Extra</label>
                            <Row>
                                {
                                    ingredients.map(eachIngredient => {
                                        return (
                                            <Input name='extra' type='checkbox' value={eachIngredient.name} label={eachIngredient.name} />
                                        )
                                    })
                                }
                            </Row>
                        </Col>

                        <Input name ='photo' label="Photo" s={6} />

                        <Button>ADD</Button>
                        </form>
                    </Row>

            </div>
        )
    }
}

addProductClass.propTypes = {
    get_ingredients: PropTypes.func.isRequired,
    ingredients: PropTypes.object.isRequired,
    addProduct: PropTypes.object.isRequired


};

function mapStateToProps(state, props) {
    return {
        ingredients: state.ingredients
    };
}


export default connect(mapStateToProps, { get_ingredients, addProduct })(addProductClass);
