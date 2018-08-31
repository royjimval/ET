import React, { Component } from 'react'
import NavBarAdmin from '../navbar/navbar';
import { Col, Collapsible, CollapsibleItem, Row, Input, Button } from '../../../../../node_modules/react-materialize';
import { get_ingredients } from '../../../accions/ingredientsAccions'
import { addProduct } from '../../../accions/productAccion'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux'
import "./addProduct.css"
import { storage } from '../../../firebase/index'



class addProductClass extends Component {
	constructor(props) {
		super(props)
		this.state = {
			errorName: '',
			errorCategory: '',
			errorPrice: '',
			errorPhoto: '',
			errorIngredient: '',
			errorExtre: '',
			pictures: '',
			url: ''
		}
		this.onDrop = this.onDrop.bind(this);
	}

	componentDidMount() {
		this.props.get_ingredients();
	}

	handlesumit = (e) => {
		e.preventDefault();

		const { name } = this.form;
		const { category } = this.form;
		const { price } = this.form;

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
		checkedCheckboxesValuesExtra.map(items => {
			extraIngredient = items.split(" ")
			extraIngredients.push([extraIngredient[0], extraIngredient[1]])
		})


		const nameValue = name.value;
		const categoryValue = category.value;
		const priceValue = price.value;

		let flag = 1;
		if (nameValue === '') {
			flag = 0
			this.setState({ errorName: 'You must fill name field' })
		} else {
			this.setState({ errorName: '' })
		}

		if (categoryValue === '1') {
			flag = 0
			this.setState({ errorCategory: 'You must fill category field' })
		} else {
			this.setState({ errorCategory: '' })
		}

		if (priceValue === '') {
			flag = 0
			this.setState({ errorPrice: 'You must fill price field' })
		} else {
			this.setState({ errorPrice: '' })
		}

		const image = this.state.pictures
		console.log(image)
		if (image === '') {
			flag = 0
			console.log('a')
			this.setState({ errorPhoto: 'You must fill photo field' })
		} else {
			this.setState({ errorPhoto: '' })

			const uploadTask = storage.ref(`images/${image.name}`).put(image)
			uploadTask.on('state_changed',
				(snapshot) => { },
				(error) => {
					console.log(error)
				},
				() => {
					storage.ref('images').child(image.name).getDownloadURL().then(url => {
						this.setState({ url: url })
					})
				})
		}

		let checkValues = 0;
		checkedCheckboxesValuesIngredients.map(items => {
			checkValues++
		})

		if (checkValues > 2) {
			this.setState({ errorIngredient: "" })
		} else {
			flag = 0
			this.setState({ errorIngredient: "you must fill more than 2 ingredients" })
		}

		checkValues = 0;

		checkedCheckboxesValuesExtra.map(items => {
			checkValues++
		})
		console.log(checkValues);
		if (checkValues > 2) {
			this.setState({ errorExtre: '' })
		} else {
			flag = 0
			this.setState({ errorExtre: "you must fill more than 2 extra ingredients" })
		}




		setTimeout(() => {


			if (flag === 1) {
				const photoValue = this.state.url
				const data = { nameValue, categoryValue, priceValue, checkedCheckboxesValuesIngredients, extraIngredients, photoValue }
				console.log(data)
				this.props.addProduct(data)
				console.log(data)
				toast.info(nameValue + " is added now to your Menu :) ", {
					position: toast.POSITION.BOTTOM_RIGHT,
					className: 'foo-bar'
				});
				setTimeout(() => { window.location = '/addProduct' }, 500)
			}
		}, 3000)
	}

	onDrop = (e) => {
		if (e.target.files[0]) {
			const image = e.target.files[0]
			this.setState({ pictures: e.target.files[0] });
			console.log(image)
		}
	}


	render() {
		const { ingredients } = this.props.ingredients

		const role = this.props.auth.user.role
		if (role === 'all') {
			return (
				<div class="">
					<Row >
						<NavBarAdmin history={this.props.history} />
					</Row>
					<ToastContainer />
					<div className="styleheaders center divHeader">
						<div>
							<img src='assets/favicon-57.png' />
						</div>
						<div className="divHeaderText">
							Create your Eatable account
                        </div>
					</div>
					<form onSubmit={this.handlesumit} ref={(form) => (this.form = form)}>
						<Row className="ContainerRegisterProduct">
							<Col s={12} m={6} className="stylecolum">
								<div className="RegisterProduct">
									<div className="center headerimageProduct">
										<figure>
											<img src="assets/pizza.svg" alt="pizza" class="user" />
										</figure>
									</div>

									<div class="input-field">
										<i class="material-icons prefix">
											<img className='menu-icon iconnav' src='assets/burger.svg' width='30px' />
										</i>
										<input name="name" id="icon_prefix" type="text" className="validate" />
										<label for="icon_prefix">Name Product</label>
										<span style={{ color: "red" }}>{this.state.errorName}</span>
									</div>


									<div class="row cbxTypeUser">
										<Input name="category" s={12} type="select" icon={<i class="material-icons prefix">
											<img className='menu-icon iconnav' src='assets/diet.svg' width='30px' />
										</i>} defaultValue="1">
											<option value='1'>Select the type of Category</option>
											<option value="Breakfast">Breakfast</option>
											<option value="Meal">Meal</option>
											<option value="Dessert">Dessert</option>
											<option value="Dinner">Dinner</option>
											<option value="Drink">Drink</option>
										</Input>
										<span style={{ color: "red" }}>{this.state.errorCategory}</span>
									</div>

									<div class="input-field">
										<i class="material-icons prefix">
											<img className='menu-icon iconnav' src='assets/money.svg' width='30px' />
										</i>
										<input name="price" id="icon_prefix" type="number" className="validate" />
										<label for="icon_prefix">Price</label>
										<span style={{ color: "red" }}>{this.state.errorPrice}</span>
									</div>
									<Row>
										<div class="file-field input-field">
											<div class="btn choosefile">
												<span>Chosse Image</span>
												<span style={{ color: "red" }}>{this.state.errorPhoto}</span>
												<input type="file" onChange={this.onDrop} s={12} />
											</div>
											<div class="file-path-wrapper">
												<input class="file-path validate stylefontColapsible" type="text"
													placeholder="Upload file" />
											</div>
										</div>
									</Row>
									<div className="center">
										<Button className='waves-effect waves-light RegisterProductButton' large >Save</Button>
									</div>

								</div>
							</Col>
							<Col s={12} m={6}>
								<div className="IngredientenRegisterProduct">
									<Row>
										<Collapsible className="styleCollapsible">
											<CollapsibleItem header={<p>Ingredients</p>}>
												<Row>
													<div className="scrolleableExtras stylefontColapsible">
														{ingredients.map((eachIngredient) => {
															return (
																<Col m={4}>
																	<Input
																		name="ingredients"
																		type="checkbox"
																		value={eachIngredient.name}
																		label={eachIngredient.name}
																	/>
																</Col>
															);
														})}
													</div>
												</Row>
											</CollapsibleItem>
											<span style={{ color: "red" }}>{this.state.errorIngredient}</span>
											<CollapsibleItem header={<p>Extras</p>}>
												<Row >
													<div className="scrolleableExtras stylefontColapsible">
														{ingredients.map((eachIngredient) => {
															return (
																<Col m={4}>
																	<Input
																		name="extra"
																		type="checkbox"
																		value={eachIngredient.name + " " + eachIngredient.Sellprice}
																		label={eachIngredient.name}
																	/>
																</Col>
															);
														})}
													</div>
												</Row>
											</CollapsibleItem>
											<span style={{ color: "red" }}>{this.state.errorExtre}</span>
										</Collapsible>
									</Row>
								</div>
							</Col>
						</Row>
					</form>
				</div>
			)
		} else {
			return (
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

addProductClass.propTypes = {
	get_ingredients: PropTypes.func.isRequired,
	ingredients: PropTypes.object.isRequired,
	addProduct: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired

};

function mapStateToProps(state, props) {
	return {
		ingredients: state.ingredients,
		auth: state.auth
	};
}


export default connect(mapStateToProps, { get_ingredients, addProduct })(addProductClass);
