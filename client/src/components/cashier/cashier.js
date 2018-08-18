import React, { Component } from 'react'
import { Row, Col, Collection, CollectionItem, Button, Table, Icon, Input } from 'react-materialize'
import Nav from '../header/header'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProductCashier, putPreorder} from '../../accions/preorderAccions'
import { get_id_order, updateId_order } from '../../accions/idorderAccions'
import { addOrder } from '../../accions/orderAccions'
import './order.css'
let new_id, order_id
let total = 0;
let data;

class Cashier extends Component {

    componentDidMount(){
        this.props.get_id_order();
    }

sumPrices(preorder){
    preorder.map((preorder_item) =>

        total = total + preorder_item.price
    )
}

    getProducts(item){
        this.props.getProductCashier(item);
        total = 0;        

    }

    onPutPreorder = (preorder, id_order) => {
        id_order.map(id =>(
            new_id= id.order,
            order_id = id._id
        ))
        console.log(new_id)

        preorder.map((item) => (
            putPreorder(item._id, item.idtable, item.name, item.ingredients, item.price, item.start, item.finished, item.delivered, new_id)
        ))
        
        data = {new_id, total}
        this.props.addOrder(data)

        new_id = parseInt(new_id)  + 1
        new_id = new_id.toString()
        updateId_order(order_id, new_id)
    };

    render() {
        const { preorderCashier } = this.props.preorderCashier;
        const { id_order } = this.props.id_order;
		
		const  role  = this.props.auth.user.role
        if(role==='Cashier' || role==='all'){

			return (
				<div>
					<div>
						<Nav />
						<br /><br /><br />
						<Row>
							<Col s={2} m={2} l={2} xl={2} className="center">
								<Button onClick={() => this.getProducts("1")} className="ch-btn cyan darken-2">
									<Row className="no-marg-b">
										<img src="assets/table.svg" alt="Table Icon" width="40px" />
									</Row>
									<Row className="no-marg-b">Table 1</Row>
								</Button>
							</Col><Col s={2} m={2} l={2} xl={2} className="center">
								<Button onClick={() => this.getProducts("2")} className="ch-btn cyan darken-2">
									<Row className="no-marg-b">
										<img src="assets/table.svg" alt="Table Icon" width="40px" />
									</Row>
									<Row className="no-marg-b">Table 2</Row>
								</Button>
							</Col><Col s={2} m={2} l={2} xl={2} className="center">
								<Button onClick={() => this.getProducts("3")} className="ch-btn cyan darken-2">
									<Row className="no-marg-b">
										<img src="assets/table.svg" alt="Table Icon" width="40px" />
									</Row>
									<Row className="no-marg-b">Table 3</Row>
								</Button>
							</Col><Col s={2} m={2} l={2} xl={2} className="center">
								<Button onClick={() => this.getProducts("4")} className="ch-btn cyan darken-2">
									<Row className="no-marg-b">
										<img src="assets/table.svg" alt="Table Icon" width="40px" />
									</Row>
									<Row className="no-marg-b">Table 4</Row>
								</Button>
							</Col><Col s={2} m={2} l={2} xl={2} className="center">
								<Button onClick={() => this.getProducts("5")} className="ch-btn cyan darken-2">
									<Row className="no-marg-b">
										<img src="assets/table.svg" alt="Table Icon" width="40px" />
									</Row>
									<Row className="no-marg-b">Table 5</Row>
								</Button>
							</Col><Col s={2} m={2} l={2} xl={2} className="center">
								<Button onClick={() => this.getProducts("6")} className="ch-btn cyan darken-2">
									<Row className="no-marg-b">
										<img src="assets/table.svg" alt="Table Icon" width="40px" />
									</Row>
									<Row className="no-marg-b">Table 6</Row>
								</Button>
							</Col>
						</Row>
						<Row>
							<Col s={4} m={4}>
								{this.sumPrices(preorderCashier)}

								<Collection header="First Names">
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
													</Row>
												</CollectionItem>
											))

									}
								</Collection>
							</Col>
							<Col s={4} m={4}>
								<div className="cash-wrapper">
									<Row className="center">
										<Col className="right-align" m={6}>
											<h5>Pay</h5>
										</Col>
										<Col className="left-align" m={6}>
											<h5 className="red-text">$ {total}</h5>
										</Col>
										<Col className="right-align" m={6}>
											<h5>Change</h5>
										</Col>
										<Col className="left-align" m={6}>
											<h5 className="red-text">$ XXX.XX</h5>
										</Col>
									</Row>
									<Row className="center no-marg-b">
										<Input s={6} type="select" label="Exchange Rate" defaultValue="2">
											<option value="1">US Dollars</option>
											<option value="2">MX Pesos</option>
										</Input>
										<Input s={6} type="select" label="Materialize Select" defaultValue="2">
											<option value="1">Option 1</option>
											<option value="2">Option 2</option>
											<option value="3">Option 3</option>
										</Input>
									</Row>
									<Row className="center-align">
										<Button onClick={() => this.onPutPreorder(preorderCashier, id_order)} >Pay</Button>
									</Row>
								</div>
							</Col>
							<Col m={4}>
								<div className="cash-wrapper">
									<Row className="no-marg-b">
										<div className="valign-wrapper">
											<img src="assets/money.png" alt="" height="80px" />
										</div>
									</Row>
									<Row className="no-marg-b">
										<div className="center-wrapper">
											<img className="hue-r100" src="assets/money.png" alt="" height="80px" />
										</div>
									</Row>
									<Row className="no-marg-b">
										<div className="valign-wrapper">
											<img className="hue-r240" src="assets/money.png" alt="" height="80px" />
										</div>
									</Row>
									<Row className="no-marg-b">
										<Col className='center-align' m={6}>
											<img src="assets/dollar.svg" alt="" height="70px" />
										</Col>
										<Col className='center-align' m={6}>
											<img src="assets/dollar.svg" alt="" height="70px" />
										</Col>
									</Row>
								</div>
							</Col>
						</Row>

					</div>
					</div>
			)
		}else{
            return(
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
