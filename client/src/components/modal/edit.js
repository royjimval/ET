import React, { Component } from 'react'
import { Row, Col, Modal, MediaBox, Input } from 'react-materialize';
import { toast } from 'react-toastify'
import { addPreorder } from '../../accions/preorderAccions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './modal.css'
import '../item/item.css';
import Button from '../../../../node_modules/react-materialize/lib/Button';
let numberC = 0;

class modalEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1,
            price:0
        };
    }

    componentDidMount(){
        this.setCountToOne();
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //extract only the ingredients not checked
        const { FoodIngredients } = this.form;
        const checkboxArrayIngredients = Array.prototype.slice.call(FoodIngredients);
        const checkedCheckboxesIngredients = checkboxArrayIngredients.filter(input => input.checked === false);
        const checkedCheckboxesValuesIngredients = checkedCheckboxesIngredients.map(input => "No " + input.value);
        console.log('checked ingredients:', checkedCheckboxesValuesIngredients);
        //extract the extra ingredients checked
        const { FoodExtra } = this.form;
        const checkboxArrayExtra = Array.prototype.slice.call(FoodExtra);
        const checkedCheckboxesExtra = checkboxArrayExtra.filter(input => input.checked);
        const checkedCheckboxesValuesExtra = checkedCheckboxesExtra.map(input => "Extra " + input.value);
        console.log('checked extra:', checkedCheckboxesValuesExtra);

        let extraItems = 0;
        checkedCheckboxesValuesExtra.map(() => {
            return (
                extraItems++
            )
        })

        const extraPrice = 15 * extraItems;

        const total_Price = this.props.datapass.price + extraPrice;

        this.add_Preorder(total_Price, checkedCheckboxesValuesIngredients, checkedCheckboxesValuesExtra)

    }

    getTotalProduct = (e) => {
        const { FoodExtra } = this.form;
        const checkboxArrayExtra = Array.prototype.slice.call(FoodExtra);
        const checkedCheckboxesExtra = checkboxArrayExtra.filter(input => input.checked);
        const checkedCheckboxesValuesExtra = checkedCheckboxesExtra.map(input => "Extra " + input.value);

        let extraItems = 0;
        checkedCheckboxesValuesExtra.map(() => {
            return (
                extraItems++
            )
        })

        const extraPrice = 15 * extraItems;
        let preTOtal = this.props.datapass.price + extraPrice;
        this.setState({price:(preTOtal*numberC)})
    }

    add_Preorder = (total_price, list_ingredients, list_extra) => {
        const total_ingredients = list_ingredients.concat(list_extra);
        const idtable = this.props.auth.user.name
        const name = this.props.datapass.name
        const ingredients = total_ingredients
        const price = total_price
        const data = { idtable, name, ingredients, price }

        for (let i = 0; i < numberC; i++) {
            this.props.addPreorder(data);
        }
        toast.info(name + " is added now to your preorder :) ", {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'foo-bar'
        });
        this.setCountToOne();
    }
    
    setCountToOne(){
        numberC = 1;
        this.setState({count:numberC})
        this.setState({price:0})
    }

    sumCount() {
        numberC = numberC + 1
        this.setState({count:numberC})
        this.getTotalProduct()
    };

    resCount() {
        if (numberC > 1) {
            numberC = numberC - 1;
            this.setState({count:numberC})
            this.getTotalProduct()
        }
    };

    returnPrice()
    {
        if(this.state.price===0){
            return(
            <h4>${this.props.datapass.price}</h4>)
        }
        else{
            return(<h4>${this.state.price}</h4>)
        }
    }


    render() {
        return (
            < div key={this.props.datapass._id}>
                <Modal id="modal_for_categorys" fixedFooter key={this.props.datapass._id} className='center' header={this.props.datapass.name} actions={
                    <div>
                        <Button modal="close" onClick={()=>{this.setCountToOne()}} className="right red btns1">X</Button>
                    </div>
                }>
                    <Row>
                        <Col s={6} m={6} l={6}>
                            <Row className=' center-align'>
                                <MediaBox className=" cicrle-img" src={this.props.datapass.photo} caption="A demo media box1" />
                            </Row>
                            <Row>
                                <Col s={6} m={6}>
                                    <Col s={4} m={4}><Button className="btns" onClick={() => this.sumCount()}>+  </Button></Col>
                                    <Col s={4} m={4}><h4 className='center'>  {this.state.count}</h4></Col>
                                    <Col s={4} m={4}><Button className="btns" onClick={() => this.resCount()}>−  </Button></Col>
                                </Col>
                                <Col s={6} m={6}>                                    
                                        { this.returnPrice()}
                                </Col>
                            </Row>
                        </Col>
                        <form onSubmit={this.handleSubmit} ref={form => this.form = form}>
                            <Col s={6} m={6} l={6}>
                                <h4 className='center'>Ingredientes</h4>
                                <Row>
                                    {this.props.datapass.ingredients.map(ingredien => {
                                        return (
                                            <Input m={4} className='brd' name="FoodIngredients" type='checkbox' checked key={ingredien} value={ingredien} label={ingredien} />
                                        )
                                    })}
                                </Row>
                                <Row>
                                    <Col s={12} m={12} l={12} className=''>
                                        <h4 className='center'>Extra</h4>
                                        <h5>each extra ingredient cost 15 pesos plus</h5>
                                        <Row className=''>
                                            {
                                                this.props.datapass.extra.map(extra => {
                                                    return (
                                                        <Input className='center' m={4} onClick={()=>this.getTotalProduct()} name="FoodExtra" type='checkbox' key={extra[0]} value={extra[0]} label={extra[0]} />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Col>
                                </Row>
                                <br />
                                <Button modal="close" className="btns">Add</Button>
                            </Col>
                        </form>
                    </Row>
                </Modal>

            </div >
        )
    }
}

modalEdit.propTypes = {
    addPreorder: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    product: state.product,
    preorder: state.preorder,
    auth: state.auth
})


export default connect(mapStateToProps, { addPreorder })(modalEdit);
