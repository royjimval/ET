import React, { Component } from 'react'
import { Row, Col, Button, Modal, MediaBox, Input } from 'react-materialize';
import './modal.css'


export default class modalEdit extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

        const {FoodIngredients} = this.form;
        

        const checkboxArrayIngredients = Array.prototype.slice.call(FoodIngredients);

        // extract only the checked checkboxes
        const checkedCheckboxesIngredients = checkboxArrayIngredients.filter(input => input.checked);
        

        // use .map() to extract the value from each checked checkbox
        const checkedCheckboxesValuesIngredients = checkedCheckboxesIngredients.map(input => input.value);
        console.log('checked ingredients:', checkedCheckboxesValuesIngredients);

        const {FoodExtra} = this.form;

        const checkboxArrayExtra = Array.prototype.slice.call(FoodExtra);

        // extract only the checked checkboxes
        const checkedCheckboxesExtra = checkboxArrayExtra.filter(input => input.checked);

        // use .map() to extract the value from each checked checkbox
        const checkedCheckboxesValuesExtra = checkedCheckboxesExtra.map(input => input.value);
        console.log('checked extra:', checkedCheckboxesValuesExtra);

    }


    render() {
        return (
            <div key={this.props.datapass.ids[0]}>
                <Modal id='modalEdit' fixedFooter className='center' header={this.props.datapass.name} /*actions={
                    <div>
                        <Button className='black' modal="close" waves="light" onClick={() => this.save()}>Done </Button>
                        
                    </div>}*/>
                    <Row>
                        
                        <Col s={6} m={6} l={6}>
                            <Row className=' center-align'>
                                <MediaBox className=" cicrle-img" src={this.props.datapass.photo} caption="A demo media box1" />
                            </Row>
                        </Col>
                        <form onSubmit={this.handleSubmit} ref={form => this.form = form}>
                        <Col  s={6} m={6} l={6}>
                            <h4 className='center'>Ingredientes</h4>
                            {this.props.datapass.ingredients.map(ingredien =>{
                                return(
                                    <Row>
                                        <Input name="FoodIngredients" type='checkbox'  key={ingredien[0]} value={ingredien[0]} label={ingredien[0]}/>
                                    </Row>
                                )
                            })}
                            <Row>
                                <Col s={12} m={12} l={12} className=''>
                                    <h4 className='center'>Extra</h4>
                                    {
                                        this.props.datapass.extra.map(extra =>{
                                            return(
                                                <Row>
                                                    <Input name="FoodExtra" type='checkbox' key={extra[0]} value={extra[0]} label={extra[0]} />
                                                </Row>
                                                
                                            )
                                            
                                        })
                                    }
                                </Col>
                            </Row>
                        </Col>
                        <input type="submit" value="Submit" />
                        </form>

                    </Row>
                </Modal>
            </div>
        )
    }
}
