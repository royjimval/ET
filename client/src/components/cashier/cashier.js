import React, { Component } from 'react'
import { Row, Col, Collection, CollectionItem, Button, Table, Icon, Input } from 'react-materialize'
import Barnav from '../header/navbar'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProductCashier, putPreorder } from '../../accions/preorderAccions'
import { get_id_order, updateId_order } from '../../accions/idorderAccions'
import { addOrder } from '../../accions/orderAccions'
import './order.css'
import Modal from '../../../../node_modules/react-materialize/lib/Modal';
import roundTo from 'round-to'
import Unauthorized from '../start/Unauthorized';
let new_id, order_id
let total = 0;
let data;
let pay;
let lastTable;

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
					<Col className="left-align" m={3}>
						<h5 className="red-text">$ {this.state.change * -1}</h5>
					</Col>
				</div>
			)
		} else {
			return (
				<div>
					<Col className="left-align" m={3}>
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
		lastTable=item;
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
			
			this.setState({ change:roundTo.down( restChange - money, 2) })
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

			this.getProducts(lastTable)
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
			this.setState({dlls:0})
		}
		if (money === 'coins') {
			if(this.state.coins>0){
				this.addPayMoney(this.state.coins*1)
			}
			this.setState({coins:0})
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
						<Barnav />
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
						<div className="mt-5"/>
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
									<Row className="center-align">
										<Col className="right-align" s={6} m={3}>
											<h5>Total</h5>
										</Col>
										<Col className="left-align" s={6} m={3}>
											<h5 className="red-text">$ {total}</h5>
										</Col>

										<Col className="right-align" s={6} m={3}>
											<h5>Total</h5>
										</Col>
										<Col className="left-align" s={6} m={3}>
											<h5 className="red-text">$ {this.showTotalDlls()}</h5>
										</Col>
										<Col m={6}>
											<label>DLLS</label>
										</Col>
										<Col m={6}>
										 <label>PESOS</label>
										</Col>
										<hr/>
									</Row>
									<Row>
										<Col className="right-align" m={3}>
											<h5>Pay</h5>
										</Col>
										<Col className="left-align" m={3}>
											<h5 className="red-text" >$ {this.state.pay}</h5>
										</Col>
										<Col className="right-align" m={3}>
											<h5>Change</h5>
										</Col>
										{this.showChange()}
									</Row>

									<Row className="center-align">
										<Col m={6}>
											<input label="dlls" name="dlls" type="number" value={this.state.dlls} onChange={this.onChange} />
										</Col>
										<Col m={6}>
											<input label="coin" name="coins" type="number" value={this.state.coins} onChange={this.onChange} />
										</Col>
										<Col m={6}>
											<Button waves="light" className="indigo darken-1" onClick={() => { this.CheckInputisZero('dlls') }}>Dlls</Button>
										</Col>
										<Col m={6}>
											<Button waves="light" className="indigo darken-1" onClick={() => { this.CheckInputisZero('coins') }}>PESOS</Button>
											</Col>
									</Row>

									<Row className="center-align">
										<Button waves="light" className="btn-blck green accent-4" onClick={() => { this.onPutPreorder(preorderCashier, id_order) }} >Pay</Button>
									</Row>
								</div>
							</Col>
							<Col m={4}>
								<div className="cash-wrapper">
									<Row className="center-align">
										<Col m={6}>
												<img className="bill_img" src="assets/bills/1000.png" alt="1000" onClick={() => { this.addPayMoney(1000) }} />
										</Col>
										<Col m={6}>
												<img className="bill_img z-depth-4" src="assets/bills/500.png" alt="500" onClick={() => { this.addPayMoney(500) }} />
										</Col>
									</Row>

									<Row className="center-align">
										<Col m={6}>
											<img className="bill_img z-depth-4" src="assets/bills/200.png" alt="200" onClick={() => { this.addPayMoney(200) }} />
										</Col>
										<Col m={6}>
											<img className="bill_img z-depth-4" src="assets/bills/100.png" alt="100" onClick={() => { this.addPayMoney(100) }} />
										</Col>
									</Row>

									<Row className="center-align">
										<Col m={6}>
										<img className="bill_img z-depth-4" src="assets/bills/50.png" alt="50" onClick={() => { this.addPayMoney(50) }} />
										</Col>

										<Col m={6}>
										<img className="bill_img z-depth-4" src="assets/bills/20.png" alt="20" onClick={() => { this.addPayMoney(20) }} />
										</Col>
									</Row>


									<Row className="center-align">
										<Col m={12}>
											<Button waves="light" className="btn-blck orange daken-3" onClick={() => { this.ResetPayandChange() }}>Reset</Button>
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
				<Unauthorized history={this.props.history}/>
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
