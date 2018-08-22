import React, { Component } from 'react'
import { Row, Col, Collection, CollectionItem, Button, Table, Icon, Input } from 'react-materialize'
import Nav from '../header/header'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProductCashier, putPreorder } from '../../accions/preorderAccions'
import { get_id_order, updateId_order } from '../../accions/idorderAccions'
import { addOrder } from '../../accions/orderAccions'
import './order.css'
import { set } from 'mongoose';
import Modal from '../../../../node_modules/react-materialize/lib/Modal';
import roundTo from 'round-to'
let new_id, order_id
let total = 0;
let data;
let pay;

class Cashier extends Component {

	constructor() {
		super();
		this.state = {
			pay: 0,
			change: 0,
			dlls: 0,
			coins: 0,
		};
		this.onChange = this.onChange.bind(this)
	};

	componentDidMount() {
		this.props.get_id_order();
		this.ResetPayandChange()
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
		console.log(e.target.value)
	}

	ResetPayandChange() {
		pay = 0;
		this.setState({ pay: 0 })
		this.setState({ change: 0 })
		this.setState({ dlls: 0 })
		this.setState({ coins: 0 })
	}



	showChange() {
		if (this.state.change > 0 || this.state.change === 0) {
			return (
				<div>
					<Col className="left-align" m={6}>
						<h5 className="red-text">$ {this.state.change * -1}</h5>
					</Col>
				</div>
			)
		} else {
			return (
				<div>
					<Col className="left-align" m={6}>
						<h5 className="green-text">$ {this.state.change * -1}</h5>
					</Col>
				</div>
			)
		}

	}

	showTotalDlls() {
		let dlls = total;
		dlls = roundTo.down(dlls / 18, 2)
		return (
			dlls
		)
	}


	sumPrices(preorder) {
		total = 0;
		preorder.map((preorder_item) =>
			total = total + preorder_item.price
		)
	}

	getProducts(item) {
		this.props.getProductCashier(item);
	}

	addPayMoney(money) {

		if (total > 0) {
			let restChange = 0;
			pay = pay + money
			this.setState({ pay: pay })
			if (this.state.change === 0 && this.state.pay === 0) {
				restChange = total;
			} else {
				restChange = this.state.change
			}
			this.setState({ change: restChange - money })
		}
	}

	onPutPreorder = (preorder, id_order) => {
		if (total < pay || total === pay) {

			id_order.map(id => (
				new_id = id.order,
				order_id = id._id
			))
			console.log(new_id)

			preorder.map((item) => (
				putPreorder(item._id, item.idtable, item.name, item.ingredients, item.price, item.start, item.finished, item.delivered, new_id)
			))
			this.ResetPayandChange()

			data = { new_id, total }
			this.props.addOrder(data)

			new_id = parseInt(new_id) + 1
			new_id = new_id.toString()
			updateId_order(order_id, new_id)
		} else {
			console.log("no se puede")
			alert("No se puede realizar esta accion aun")
		}
	};

	CheckInputisZero(money) {
		if (money === 'dlls') {
			if (this.state.dlls > 0) {
				this.addPayMoney(this.state.dlls * 18)
			}
		}
		if (money === 'coins') {
			if(this.state.coins>0){
				this.addPayMoney(this.state.coins)
			}
		}
	}

	render() {
		const { preorderCashier } = this.props.preorderCashier;
		const { id_order } = this.props.id_order;

		const role = this.props.auth.user.role
		if (role === 'Cashier' || role === 'all') {

			return (
				<div>
					<div>
						<Nav />
						<br /><br />
						<Row>
							<Col s={2} m={2} l={2} xl={2} className="center">
								<Button onClick={() => { this.getProducts("1"), this.ResetPayandChange() }} className="ch-btn cyan darken-2">
									<Row className="no-marg-b">
										<img src="assets/table.svg" alt="Table Icon" width="40px" />
									</Row>
									<Row className="no-marg-b">Table 1</Row>
								</Button>
							</Col><Col s={2} m={2} l={2} xl={2} className="center">
								<Button onClick={() => { this.getProducts("2"), this.ResetPayandChange() }} className="ch-btn cyan darken-2">
									<Row className="no-marg-b">
										<img src="assets/table.svg" alt="Table Icon" width="40px" />
									</Row>
									<Row className="no-marg-b">Table 2</Row>
								</Button>
							</Col><Col s={2} m={2} l={2} xl={2} className="center">
								<Button onClick={() => { this.getProducts("3"), this.ResetPayandChange() }} className="ch-btn cyan darken-2">
									<Row className="no-marg-b">
										<img src="assets/table.svg" alt="Table Icon" width="40px" />
									</Row>
									<Row className="no-marg-b">Table 3</Row>
								</Button>
							</Col><Col s={2} m={2} l={2} xl={2} className="center">
								<Button onClick={() => { this.getProducts("4"), this.ResetPayandChange() }} className="ch-btn cyan darken-2">
									<Row className="no-marg-b">
										<img src="assets/table.svg" alt="Table Icon" width="40px" />
									</Row>
									<Row className="no-marg-b">Table 4</Row>
								</Button>
							</Col><Col s={2} m={2} l={2} xl={2} className="center">
								<Button onClick={() => { this.getProducts("5"), this.ResetPayandChange() }} className="ch-btn cyan darken-2">
									<Row className="no-marg-b">
										<img src="assets/table.svg" alt="Table Icon" width="40px" />
									</Row>
									<Row className="no-marg-b">Table 5</Row>
								</Button>
							</Col><Col s={2} m={2} l={2} xl={2} className="center">
								<Button onClick={() => { this.getProducts("6"), this.ResetPayandChange() }} className="ch-btn cyan darken-2">
									<Row className="no-marg-b">
										<img src="assets/table.svg" alt="Table Icon" width="40px" />
									</Row>
									<Row className="no-marg-b">Table 6</Row>
								</Button>
							</Col>
						</Row>
						<Row>
							{this.sumPrices(preorderCashier)}
							<Col s={4} m={4}>
								<Collection header="Items to Pay">
									<div className="order-cashier">
										{
											preorderCashier.map((preorder_item) =>
												(
													<CollectionItem>
														<Row>
															<Col m={8}>
																{preorder_item.name}
															</Col>
															<Col m={4}>
																{preorder_item.price}
															</Col>

															<Col m={12}>
																<Col m={6}>
																	{
																		preorder_item.ingredients.map(each_Ingredient => {
																			return (
																				<p>{each_Ingredient}</p>
																			)
																		})
																	}</Col>
															</Col>
														</Row>

													</CollectionItem>
												))
										}
									</div>
								</Collection>
							</Col>
							<Col s={4} m={4}>
								<div className="cash-wrapper">
									<Row className="center">



										<Col className="right-align" s={12} m={3}>
											<h5>Total</h5>
										</Col>
										<Col className="left-align" s={6} m={3}>
											<h5 className="red-text">$ {total}</h5>
										</Col>

										<Col className="right-align" s={6} m={3}>
											<h5>Total(Dlls)</h5>
										</Col>
										<Col className="left-align" s={6} m={3}>
											<h5 className="red-text">$ {this.showTotalDlls()}</h5>
										</Col>



										<Col className="right-align" m={6}>
											<h5>Pay</h5>
										</Col>
										<Col className="left-align" m={6}>
											<h5 className="red-text" >$ {this.state.pay}</h5>
										</Col>

										<Col className="right-align" m={6}>
											<h5>Change</h5>
										</Col>
										{this.showChange()}
									</Row>
									<Row className="center-align">
										<Button onClick={() => { this.onPutPreorder(preorderCashier, id_order) }} >Pay</Button>
									</Row>
								</div>
							</Col>
							<Col m={4}>
								<div className="cash-wrapper">
									<Row className="no-marg-b">
										<Col m={6}>
											<div className="valign-wrapper">
												<Button onClick={() => { this.addPayMoney(1000) }}>
													<img src="assets/dollar.svg" alt="" height="80px" />
												</Button>
											</div>
										</Col>
										<Col m={6}>
											<div className="center-wrapper">
												<Button onClick={() => { this.addPayMoney(500) }}>
													<img className="hue-r100" src="assets/dollar.svg" alt="" height="80px" />
												</Button>
											</div>
										</Col>
									</Row>

									<br /><br /><br />
									<Row className="no-marg-b">
										<Col m={6}>
											<div className="valign-wrapper">
												<Button onClick={() => { this.addPayMoney(200) }}>
													<img className="hue-r240" src="assets/dollar.svg" alt="" height="80px" />
												</Button>
											</div>
										</Col>
										<Col m={6}>
											<div className="valign-wrapper">
												<Button onClick={() => { this.addPayMoney(100) }}>
													<img className="hue-r240" src="assets/dollar.svg" alt="" height="80px" />
												</Button>
											</div>
										</Col>
									</Row>
									<br /><br /><br />
									<Row className="no-marg-b">
										<Col className='center-align' m={6}>
											<Button onClick={() => { this.addPayMoney(50) }}>
												<img src="assets/dollar.svg" alt="" height="80px" />
											</Button>
										</Col>

										<Col className='center-align' m={6}>
											<Button onClick={() => { this.addPayMoney(20) }}>
												<img src="assets/dollar.svg" alt="" height="80px" />
											</Button>
										</Col>
									</Row>
									<br /><br /><br />
									<Row>
										<Col m={4}><Button onClick={() => { this.ResetPayandChange() }}> X</Button></Col>
										<Col m={4}>
											<label for="icon_prefix">Dlls</label>
											<input name="dlls" type="number" value={this.state.dlls} onChange={this.onChange} />
											<Button onClick={() => { this.CheckInputisZero('dlls') }}>Dlls</Button>
										</Col>
										<Col m={4}>
											<label for="icon_prefix">Coins</label>
											<input name="coins" type="number" value={this.state.coins} onChange={this.onChange} />
											<Button onClick={() => { this.CheckInputisZero('coins') }}>Coins</Button>
										</Col>
									</Row>
								</div>
							</Col>
						</Row>

					</div>
				</div>
			)
		} else {
			return (
				<h1>No se puede mi joven</h1>
			)
		}
	}
}

Cashier.propTypes = {
	getProductCashier: PropTypes.func.isRequired,
	preorderCashier: PropTypes.object.isRequired,
	get_id_order: PropTypes.func.isRequired,
	id_order: PropTypes.object.isRequired,
	addOrder: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	preorderCashier: state.preorder,
	id_order: state.id_order,
	auth: state.auth
});


export default connect(mapStateToProps, { getProductCashier, putPreorder, get_id_order, updateId_order, addOrder })(Cashier);
