import React, { Component } from 'react'
import { Button, Row, Col, Modal, MediaBox, Input, Icon } from '../../../../node_modules/react-materialize';
import { toast } from 'react-toastify'
import { addPreorder } from '../../accions/preorderAccions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './modal.css'
import '../item/item.css';
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
        const checkedCheckboxesValuesExtra = checkedCheckboxesExtra.map(input => "Extra " + input.value.split('$',1));
        const checkedExtraPrice = checkedCheckboxesExtra.map(input => input.value);

        let extraPrice = this.getExtraPrice(checkedExtraPrice)

        const total_Price = this.props.datapass.price + extraPrice;

        this.add_Preorder(total_Price, checkedCheckboxesValuesIngredients, checkedCheckboxesValuesExtra)

    }

    getTotalProduct = (e) => {
        const { FoodExtra } = this.form;
        const checkboxArrayExtra = Array.prototype.slice.call(FoodExtra);
        const checkedCheckboxesExtra = checkboxArrayExtra.filter(input => input.checked);
        const checkedCheckboxesValueExtra = checkedCheckboxesExtra.map(input =>input.value);

        let sumExtra =this.getExtraPrice(checkedCheckboxesValueExtra);

        const extraPrice = sumExtra;
        let preTOtal = this.props.datapass.price + extraPrice;
        this.setState({price:(preTOtal*numberC)})
    }

    getExtraPrice(checkedCheckboxesValueExtra){
        let sumExtra =0;
        let labelCost='';
        let extra=0;
        checkedCheckboxesValueExtra.map(item => {
            labelCost = item.split('$')
            extra= parseInt(labelCost[1])
            sumExtra=sumExtra+extra
        })
        return(sumExtra)
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
            <h4 className="center-align">${this.props.datapass.price}</h4>
            )
        }
        else{
            return(
                <h4 className='center-align'>${this.state.price}</h4>
            )
        }
    }


    render() {
        return (
            < div key={this.props.datapass._id}>
                <Modal id="modal_for_categorys" fixedFooter key={this.props.datapass._id} className='center' header={this.props.datapass.name} actions={
                    <div>
                        <Button className='red' waves="light" modal="close" onClick={() => { this.setCountToOne() }} ><Icon>close</Icon></Button>
                    </div>
                }>
                    <Row>
                        <Col s={6} m={6} l={6}>
                            <Row className='half-marg-b center-align'>
                                <MediaBox className="modal-img" src={this.props.datapass.photo} caption={this.props.datapass.name} />
                            </Row>
                            <Row className="valign-wrapper">
                                <Button className='green accent-4' waves="light" onClick={() => this.resCount()}><Icon>keyboard_arrow_down</Icon></Button>
                                <Col s={2} m={2}><h5>{this.state.count}</h5></Col>
                                <Button className='green accent-4' waves="light" onClick={() => this.sumCount()}><Icon>keyboard_arrow_up</Icon></Button>
                                <Col s={6} m={6}>
                                    {this.returnPrice()}
                                </Col>
                            </Row>
                        </Col>
                        <form onSubmit={this.handleSubmit} ref={form => this.form = form}>
                            <Col s={6} m={6} l={6}>
                                <h5 className='center'>Ingredients</h5>
                                <Row className="no-marg-b">
                                    {this.props.datapass.ingredients.map(ingredien => {
                                        return (
                                            <Col m={4}>

                                            <Input name="FoodIngredients" type='checkbox' checked key={ingredien[0]} value={ingredien[0]} label={ingredien[0]} />

                                            </Col>
                                        )
                                    })}
                                </Row>
                                <Row>
                                    <Col s={12} m={12} l={12}>
                                        <h5 className='center'>Extras</h5>
                                        <Row className='no-marg-b'>
                                            {
                                                this.props.datapass.extra.map(extra => {
                                                    return (
                                                        <Col m={4}>

                                                        <Input className='center' onClick={()=>this.getTotalProduct()} name="FoodExtra" type='checkbox' key={extra[0]} value={extra[0]+" $"+extra[1]} label={extra[0]+" $"+extra[1]} />

                                                        </Col>
                                                    )
                                                })
                                            }
                                        </Row>
                                        <p className='center-align grey-text'><strong>each extra ingredient has a price</strong></p>
                                    </Col>
                                </Row>
                                <Button large className='green accent-4' waves="light" modal="close">Add</Button>
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
