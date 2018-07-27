import React, { Component } from 'react'
import { Row, Col, Modal, MediaBox, Input } from 'react-materialize';
import { toast } from 'react-toastify'
import { addPreorder } from '../../accions/preorderAccions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './modal.css'
import '../item/item.css';
import Button from '../../../../node_modules/react-materialize/lib/Button';


class modalEdit extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

        const { FoodIngredients } = this.form;
        const checkboxArrayIngredients = Array.prototype.slice.call(FoodIngredients);
        const checkedCheckboxesIngredients = checkboxArrayIngredients.filter(input => input.checked);
        const checkedCheckboxesValuesIngredients = checkedCheckboxesIngredients.map(input => input.value);
        console.log('checked ingredients:', checkedCheckboxesValuesIngredients);

        const { FoodExtra } = this.form;
        const checkboxArrayExtra = Array.prototype.slice.call(FoodExtra);
        const checkedCheckboxesExtra = checkboxArrayExtra.filter(input => input.checked);
        const checkedCheckboxesValuesExtra = checkedCheckboxesExtra.map(input => input.value);
        console.log('checked extra:', checkedCheckboxesValuesExtra);

        let extraItems = 0;
        checkedCheckboxesValuesExtra.map(item => {
            return (
                extraItems++
            )
        })

        const extraPrice = 15 * extraItems;

        const total_Price = this.props.datapass.price + extraPrice;

        this.add_Preorder(total_Price, checkedCheckboxesValuesIngredients, checkedCheckboxesValuesExtra)
    }

    add_Preorder = (total_price, list_ingredients, list_extra) => {
        const total_ingredients = list_extra.concat(list_ingredients);
        const idtable = "1"
        const name = this.props.datapass.name
        const ingredients = total_ingredients
        const price = total_price
        const data = { idtable, name, ingredients, price }
        this.props.addPreorder(data);
        toast.info(name + " is added now to your preorder :) ", {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'foo-bar'
        });
    }     


    render() {
        return (
            // <div>
            //     {

            //         this.test(this.props.datapass)
            //     }
            //     <Modal id='modalEdit' fixedFooter className='center' header={this.props.datapass.name} actions={
            //         <div>
            //             <Button modal="close" className="right red btns1">X</Button>
            //         </div>}>
            //         <Row>
            //         </Row>
            //     </Modal>


            // </div>

            < div>


                <Modal id='modalEdit' fixedFooter key={this.props.datapass._id} className='center' header={this.props.datapass.name} actions={
                    <div>
                        <Button modal="close" className="right red btns1">X</Button>
                    </div>
                }>
                    <Row>

                        <Col s={6} m={6} l={6}>

                            <Row className=' center-align'>
                                <MediaBox className=" cicrle-img" src={this.props.datapass.photo} caption="A demo media box1" />
                            </Row>
                        </Col>
                        <form onSubmit={this.handleSubmit} ref={form => this.form = form}>
                            <Col s={6} m={6} l={6}>
                                <h4 className='center'>Ingredientes</h4>
                                {this.props.datapass.ingredients.map(ingredien => {
                                    return (
                                        <Row>
                                            <Input name="FoodIngredients" type='checkbox' checked key={ingredien} value={ingredien} label={ingredien} />
                                        </Row>
                                    )
                                })}
                                <Row>
                                    <Col s={12} m={12} l={12} className=''>
                                        <h4 className='center'>Extra</h4>
                                        <h5>each extra ingredient cost 15 pesos plus</h5>
                                        {
                                            this.props.datapass.extra.map(extra => {
                                                return (
                                                    <Row>
                                                        <Input name="FoodExtra" type='checkbox' key={extra[0]} value={extra[0]} label={extra[0]} />
                                                    </Row>

                                                )

                                            })
                                        }
                                    </Col>
                                </Row>
                                <br />
                                <Button modal="close" className="btns">Add</Button>
                            </Col>
                        </form>
                        {console.log(this.props.datapass)}

                    </Row>
                </Modal>
            </div >
        )
    }
}

modalEdit.propTypes = {
    addPreorder: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    product: state.product,
    preorder: state.preorder
})


export default connect(mapStateToProps, { addPreorder })(modalEdit);
