import React, { Component } from 'react'
import { Col, Collapsible, CollapsibleItem, Row, Input, Table, Button, Collection, CollectionItem } from '../../../../../node_modules/react-materialize';
import { get_ingredients, get_ingredient_id } from '../../../accions/ingredientsAccions'
import NavBarAdmin from '../navbar/navbar';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import './inventory.css'
import { putInventory } from '../../../accions/ingredientsAccions'
let current_Ingredient;

class Inventory extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            sellprice: '',
            stock: '',
            buyprice: '',
            errorName: '',
            errorSellprice: '',
            errorStock: '',
            errorBuyprice: ''
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

        if (this.state.name === '') {
            this.setState({ errorName: 'you must fill the name field' })
        } else {
            this.setState({ name: '' })
            this.setState({ errorName: '' })
            console.log(current_Ingredient)
            const id = current_Ingredient._id
            const name = this.state.name
            const sellprice = current_Ingredient.Sellprice
            const stock = current_Ingredient.stock
            const buyPrice = current_Ingredient.buyPrice
            putInventory(id, name, sellprice, stock, buyPrice)
            toast.info(current_Ingredient.name + " is change for " + name, {
                position: toast.POSITION.TOP_RIGHT,
                className: 'foo-bar'
            });
            this.props.get_ingredients();
            setTimeout(() => { window.location = '/InventoryView' }, 1000)
        }
    }

    handlesumitSellprice = (e) => {
        if (this.state.sellprice === '') {
            this.setState({ errorSellprice: 'you must fill the sell price field' })
        } else {
            this.setState({ sellprice: '' })
            this.setState({ errorSellprice: '' })
            e.preventDefault();
            console.log(current_Ingredient)
            const id = current_Ingredient._id
            const name = current_Ingredient.name
            const sellprice = this.state.sellprice
            const stock = current_Ingredient.stock
            const buyPrice = current_Ingredient.buyPrice
            console.log(this.state.sellprice)
            console.log(id, name, sellprice, stock, buyPrice)
            putInventory(id, name, sellprice, stock, buyPrice)
            toast.info(current_Ingredient.Sellprice + " is change for " + sellprice, {
                position: toast.POSITION.TOP_RIGHT,
                className: 'foo-bar'
            });
            setTimeout(() => { window.location = '/InventoryView' }, 1000)
        }

    }

    handlesumitStock = (e) => {
        if (this.state.stock === '') {
            this.setState({ errorStock: 'you must fill the Stock field' })
        } else {
            this.setState({ errorStock: '' })
            this.setState({ stock: '' })
            e.preventDefault();
            console.log(current_Ingredient)
            const id = current_Ingredient._id
            const name = current_Ingredient.name
            const sellprice = current_Ingredient.Sellprice
            const stock = this.state.stock
            const buyPrice = current_Ingredient.buyPrice
            putInventory(id, name, sellprice, stock, buyPrice)
            toast.info(current_Ingredient.stock + " is change for " + stock, {
                position: toast.POSITION.TOP_RIGHT,
                className: 'foo-bar'
            });
            setTimeout(() => { window.location = '/InventoryView' }, 1000)
        }
    }


    handlesumitBuyprice = (e) => {
        if (this.state.buyprice === '') {
            this.setState({ errorBuyprice: 'you must fill the Buy price field' })
        } else {
            this.setState({ buyprice: '' })
            this.setState({ errorBuyprice: '' })
            e.preventDefault();
            console.log(current_Ingredient)
            const id = current_Ingredient._id
            const name = current_Ingredient.name
            const sellprice = current_Ingredient.Sellprice
            const stock = current_Ingredient.stock
            const buyPrice = this.state.buyprice
            putInventory(id, name, sellprice, stock, buyPrice)
            toast.info(current_Ingredient.buyPrice + " is change for " + buyPrice, {
                position: toast.POSITION.TOP_RIGHT,
                className: 'foo-bar'
            });
            setTimeout(() => { window.location = '/InventoryView' }, 1000)
        }
    }

    showData(item, data) {
        switch (item) {
            case 'name': {
                if (data === undefined) {
                    return ("Actual name: ")
                } else {
                    return ("Actual name: " + data)
                }
            } break;
            case 'sellprice':
                {
                    if (data === undefined) {
                        return ("Actual sell price: ")
                    } else {
                        return ("Actual sell price: " + data)
                    }
                } break;
            case 'buyprice':
                {
                    if (data === undefined) {
                        return ("Actual buy price: ")
                    } else {
                        return ("Actual buy price: " + data)
                    }
                } break;
            case 'stock':
                {
                    if (data === undefined) {
                        return ("Actual in Stock: ")
                    } else {
                        return ("Actual in Stock: " + data)
                    }
                } break;
        }
    }

    editableInputs(ingredientid) {
        return (

            <Collapsible popout>

                <span style={{ color: "red" }}>{this.state.errorName}</span>
                <CollapsibleItem header={this.showData("name", ingredientid.name)} icon='arrow_drop_down'>
                    <form onSubmit={this.handlesumitName}>
                        <Input value={this.state.name} onChange={this.handleChange} type="text" name="name" s={12} label="New name" />
                        <Button  waves="light" value='submit' large >Update</Button>
                    </form>
                </CollapsibleItem>

                <span style={{ color: "red" }}>{this.state.errorSellprice}</span>
                <CollapsibleItem header={this.showData("sellprice", ingredientid.Sellprice)} icon='arrow_drop_down'>
                    <form onSubmit={this.handlesumitSellprice}>
                        <Input value={this.state.sellprice} onChange={this.handleChange} name="sellprice" s={12} label="New sell price" />
                        <Button  waves="light" value='submit' large >Update</Button>
                    </form>
                </CollapsibleItem>

                <span style={{ color: "red" }}>{this.state.errorStock}</span>
                <CollapsibleItem header={this.showData("stock", ingredientid.stock)} icon='arrow_drop_down'>
                    <form onSubmit={this.handlesumitStock}>
                        <Input value={this.state.stock} onChange={this.handleChange} name="stock" s={12} label="New Stock" />
                        <Button  waves="light" value='submit' large >Update</Button>
                    </form>
                </CollapsibleItem>

                <span style={{ color: "red" }}>{this.state.errorBuyprice}</span>
                <CollapsibleItem header={this.showData("buyprice", ingredientid.buyPrice)} icon='arrow_drop_down'>
                    <form onSubmit={this.handlesumitBuyprice}>
                        <Input value={this.state.buyprice} onChange={this.handleChange} name="buyprice" s={12} label="New buy price " />
                        <Button waves="light" value='submit' large >Update</Button>
                    </form>
                </CollapsibleItem>

            </Collapsible>
        )
    }

    render() {
        const { ingredients } = this.props.ingredients
        const { ingredientid } = this.props.ingredients
        current_Ingredient = ingredientid
        return (
            <div>
                <ToastContainer />
                <Row>
                    <Col m={6}>
                        <div className="InventoryRegister">
                            <table >
                                <tr className="headerInventory">
                                    <th>Name</th>
                                    <th>Selling price</th>
                                    <th>Stock</th>
                                    <th>Buy price</th>
                                    <th>Select Edit</th>
                                </tr>
                                <div className="scrolleableinventory stylefontColapsibleInventory">
                                    {ingredients.map((eachIngredient) => {
                                        return (
                                            <tr>
                                                <td>{eachIngredient.name}</td>
                                                <td>{eachIngredient.Sellprice}</td>
                                                <td>{eachIngredient.stock}</td>
                                                <td>{eachIngredient.buyPrice}</td>
                                                <td>
                                                    <Button className="buttonedit" onClick={() => this.seeIngredient(eachIngredient)} icon={<i class="material-icons prefix">
                                                        <img className='menu-icon' src='assets/edit.svg' width='30px' />
                                                    </i>}>
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </div>
                            </table>
                        </div>
                    </Col>
                    <Col m={6} >
                        <div className="InventoryRegister headerInventory">
                            <Row>
                                {
                                    this.editableInputs(ingredientid)
                                }
                            </Row>
                        </div>
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
    ingredientid: PropTypes.object.isRequired,
    putInventory: PropTypes.func.isRequired


};

const mapStateToProps = state => ({
    ingredients: state.ingredients,
    ingredientid: state.ingredients
});



export default connect(mapStateToProps, { get_ingredients, get_ingredient_id, putInventory })(Inventory);
