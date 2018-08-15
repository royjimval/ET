import React, { Component } from 'react'
import NavBarAdmin from '../navbar/navbar';
import { Col, Collapsible, CollapsibleItem, Row, Input, Button } from '../../../../../node_modules/react-materialize';
import { get_ingredients } from '../../../accions/ingredientsAccions'
import { addProduct } from '../../../accions/productAccion'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux'
import "./addProduct.css"



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

		let extraIngredients = [];
		let extraIngredient;
		checkedCheckboxesValuesExtra.map(items=>{
			extraIngredient = items.split(" ")
			extraIngredients.push([extraIngredient[0],extraIngredient[1]])
		})
		

        const nameValue = name.value;
        const categoryValue = category.value;
        const priceValue = price.value;
        const photoValue = photo.value;
        const data = { nameValue, categoryValue, priceValue, checkedCheckboxesValuesIngredients, extraIngredients, photoValue}
        console.log(data)
		this.props.addProduct(data)
		console.log(data)
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
					<form onSubmit={this.handlesumit} ref={(form) => (this.form = form)}>
						<Row className="no-marg-b">
							<Col m={4} className='addProduct-wrapper'>
								<Input name="name" s={12} label="Name" />
								<Input name="category" s={12} type="select" label="Category" defaultValue="2">
									<option value="Breakfast">Breakfast</option>
									<option value="Meal">Meal</option>
									<option value="Dessert">Dessert</option>
									<option value="Dinner">Dinner</option>
									<option value="Drink">Drink</option>
								</Input>

								<Input name="price" label="Price" s={12} />

								<Input name="photo" label="Photo" s={12} />
                                <Input type="file"  label="File" s={12}/>
								<Row className="center-align no-marg-b">
									<Button className='green' waves="light" large >ADD</Button>
								</Row>
							</Col>
							<Col m={8}>
								<Row className="">
									<Collapsible>
										<CollapsibleItem header={<p className="black-text">Ingredients</p>}>
											<Row className="no-marg-b">
												{ingredients.map((eachIngredient) => {
													return (
														<Col m={3}>
															<Input
																name="ingredients"
																type="checkbox"
																value={eachIngredient.name}
																label={eachIngredient.name}
															/>
														</Col>
													);
												})}
											</Row>
										</CollapsibleItem>
										<CollapsibleItem header={<p className="black-text">Extras</p>}>
											<Row className="no-marg-b">
												{ingredients.map((eachIngredient) => {
													return (
														<Col m={3}>
															<Input
																name="extra"
																type="checkbox"
																value={eachIngredient.name+" "+eachIngredient.Sellprice}
																label={eachIngredient.name}
															/>
														</Col>
													);
												})}
											</Row>
										</CollapsibleItem>
									</Collapsible>
								</Row>
							</Col>
						</Row>
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
