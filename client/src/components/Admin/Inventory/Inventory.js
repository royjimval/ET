import React, { Component } from 'react'
import { Col, Collapsible, CollapsibleItem, Row, Input, Table, Button, Collection, CollectionItem } from '../../../../../node_modules/react-materialize';
import { get_ingredients, get_ingredient_id } from '../../../accions/ingredientsAccions'
import NavBarAdmin from '../navbar/navbar';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import './inventory.css'
import { putInventory } from '../../../accions/inventoryActions';
let current_Ingredient;

class Inventory extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            sellprice: '',
            stock: '',
            buyprice: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    componentDidMount() {
        this.props.get_ingredients();
    }

    seeIngredient(eachIngredient) {
        console.log(eachIngredient._id)
        this.props.get_ingredient_id(eachIngredient._id)
    }

    handlesumitName = (e) => {
        e.preventDefault();
        console.log(current_Ingredient)
        const id = current_Ingredient._id
        const name = this.state.name
        const sellprice = current_Ingredient.Sellprice
        const stock = current_Ingredient.stock
        const buyPrice = current_Ingredient.buyPrice
        const data = { id, name, sellprice, stock, buyPrice }
        console.log(data)
    }

    handlesumitSellprice = (e) => {
        e.preventDefault();
        console.log(current_Ingredient)
        const id = current_Ingredient._id
        const name = current_Ingredient.name
        const sellprice = this.state.sellprice
        const stock = current_Ingredient.stock
        const buyPrice = current_Ingredient.buyPrice
        const data = { id, name, sellprice, stock, buyPrice }
        console.log(data)
    }

    handlesumitStock = (e) => {
        e.preventDefault();
        console.log(current_Ingredient)
        const id = current_Ingredient._id
        const name = current_Ingredient.name
        const sellprice = current_Ingredient.Sellprice
        const stock = this.state.stock
        const buyPrice = current_Ingredient.buyPrice
        const data = { id, name, sellprice, stock, buyPrice }
        console.log(data)
    }

    handlesumitBuyprice = (e) => {
        e.preventDefault();
        console.log(current_Ingredient)
        const id = current_Ingredient._id
        const name = current_Ingredient.name
        const sellprice = current_Ingredient.Sellprice
        const stock = current_Ingredient.stock
        const buyPrice = this.state.buyprice
        const data = { id, name, sellprice, stock, buyPrice }
        console.log(data)
    }

    render() {
        const { ingredients } = this.props.ingredients
        const { ingredientid } = this.props.ingredients
        current_Ingredient = ingredientid
        return (
            <div>
                <Row >
                    <NavBarAdmin />
                </Row>

                <Row className="white black-text container">
                    <Col m={6}>
                        <div className="scrl">
                            <table >
                                <tr>
                                    <th>Name</th>
                                    <th>Selling price</th>
                                    <th>Stock</th>
                                    <th>Buy price</th>
                                </tr>
                                {ingredients.map((eachIngredient) => {
                                    return (
                                        <tr>
                                            <td>{eachIngredient.name}</td>
                                            <td>{eachIngredient.Sellprice}</td>
                                            <td>{eachIngredient.stock}</td>
                                            <td>{eachIngredient.buyPrice}</td>
                                            <td>
                                                <Button onClick={() => this.seeIngredient(eachIngredient)}>
                                                    SELECT                                        </Button>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </table>
                        </div>
                    </Col>
                    <Col m={6} >

                        <Row>

                            <Collapsible popout>
                                <CollapsibleItem header={"Actual name: " + ingredientid.name} icon='arrow_drop_down'>

                                    <form onSubmit={this.handlesumitName}>
                                        <Input value={this.state.name} onChange={this.handleChange} type="text" name="name" s={12} label="New name" />
                                        <Button className='green' waves="light" value='submit' large >Update</Button>
                                    </form>

                                </CollapsibleItem>
                                <CollapsibleItem header={"Actual sell price: " + ingredientid.Sellprice} icon='arrow_drop_down'>

                                    <form onSubmit={this.handlesumitSellprice}>
                                        <Input value={this.state.sellprice} onChange={this.handleChange} type="number" name="sellprice" s={12} label="New sell price" />
                                        <Button className='green' waves="light" value='submit' large >Update</Button>
                                    </form>

                                </CollapsibleItem>
                                <CollapsibleItem header={"Actual in Stock: " + ingredientid.stock} icon='arrow_drop_down'>

                                    <form onSubmit={this.handlesumitStock}>
                                        <Input value={this.state.stock} onChange={this.handleChange} name="stock" s={12} label="New Stock" />
                                        <Button className='green' waves="light" value='submit' large >Update</Button>
                                    </form>

                                </CollapsibleItem>
                                <CollapsibleItem header={"Atual buy price: " + ingredientid.buyPrice} icon='arrow_drop_down'>

                                    <form onSubmit={this.handlesumitBuyprice}>
                                        <Input value={this.state.buyprice} onChange={this.handleChange} name="buyprice" s={12} label="New buy price " />
                                        <Button className='green' waves="light" value='submit' large >Update</Button>
                                    </form>

                                </CollapsibleItem>
                            </Collapsible>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}


Inventory.propTypes = {
    get_ingredients: PropTypes.func.isRequired,
    ingredients: PropTypes.object.isRequired,
    get_ingredient_id: PropTypes.func.isRequired,
    ingredientid: PropTypes.object.isRequired


};

const mapStateToProps = state => ({
    ingredients: state.ingredients,
    ingredientid: state.ingredients
});



export default connect(mapStateToProps, { get_ingredients, get_ingredient_id })(Inventory);
