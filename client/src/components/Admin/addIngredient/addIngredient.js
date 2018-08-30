import React, { Component } from 'react'
import NavBarAdmin from '../navbar/navbar';
import { Col, Row, Input, Button } from '../../../../../node_modules/react-materialize';
import { get_ingredients, addIngredients } from '../../../accions/ingredientsAccions'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux'
import "./addIngredient.css"



class addIngredient extends Component {
    constructor(){
        super()
        this.state={
            errorName:'',
            errorPrice:''
        }
    }

    componentDidMount() {
        this.props.get_ingredients();
    }

    handlesumit = (e) => {
        e.preventDefault();

        const { name } = this.form;
        const { Sellprice } = this.form;

        const nameValue = name.value;
        const SellpriceValue = Sellprice.value;

        let flag=1;
        if(nameValue===''){
            flag=0
            this.setState({errorName:'You must fill Name field'})
        }else{
            this.setState({errorName:''})
        }

        if(SellpriceValue===''){
            flag=0
            this.setState({errorPrice:'You must fill Price field'})
        }else{
            this.setState({errorPrice:''})
        }

        if(flag===1){
            const data = { nameValue, SellpriceValue }
            this.props.addIngredients(data)
            toast.info(nameValue + " is added now to your ingredients :) ", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: 'foo-bar'
            });
            setTimeout(()=>{window.location = '/addIngredient'},1000)
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
                            Create your Eatable ingredient
                        </div>
                    </div>

                    <Row>
                        <Col m={6}>
                            <div className="IngredientRegister">
                                <Row>
                                    <form onSubmit={this.handlesumit} ref={(form) => (this.form = form)}>
                                        <div className="center headerimageIngredient">
                                            <figure>
                                                <img src="assets/ingrendient.svg" alt="UserIngredient" className="iconaddingredient" />
                                            </figure>
                                        </div>
                                        <Row className="stylerow no-marg-b">
                                            <Col s={12} m={12} >
                                                <div className="input-field">
                                                    <i className="material-icons prefix">
                                                        <img className='menu-icon iconnav' src='assets/nameingredient.svg' width='30px' />
                                                    </i>
                                                    <input name="name" type="text" id="icon_prefix" className="validate" />
                                                    <label for="icon_prefix">Name Ingredient</label>
                                                    <span style={{ color: "red" }}>{this.state.errorName}</span>
                                                </div>
                                                <div className="input-field">
                                                    <i className="material-icons prefix">
                                                        <img className='menu-icon iconnav' src='assets/money.svg' width='30px' />
                                                    </i>
                                                    <input name="Sellprice" id="icon_prefix" type="number" className="validate" />
                                                    <label for="icon_prefix">Sellprice</label>
                                                    <span style={{ color: "red" }}>{this.state.errorPrice}</span>
                                                </div>
                                                <div className="input-field center">
                                                    <Button className='waves-effect waves-light RegisterIngredientButton' large >Save</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                </Row>
                            </div>
                        </Col>
                        <Col m={6}>
                            <div class="divIngredients scrolleableingredient">
                                <Row className="no-marg-b">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Ingredient Name</th>
                                                <th>Ingredient Price</th>
                                            </tr>
                                        </thead>
                                        <tbody className="tbbodyIngredients scrolleable">
                                            <tr>
                                                <td>Ingredient Name</td>
                                                <td>Ingredient Price</td>
                                            </tr>
                                            <tr>
                                                <td>Ingredient Name</td>
                                                <td>Ingredient Price</td>
                                            </tr>
                                            <tr>
                                                <td>Ingredient Name</td>
                                                <td>Ingredient Price</td>
                                            </tr>
                                            <tr>
                                                <td>Ingredient Name</td>
                                                <td>Ingredient Price</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Row>
                            </div>
                        </Col>
                    </Row>
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

addIngredient.propTypes = {
    get_ingredients: PropTypes.func.isRequired,
    addIngredients: PropTypes.func.isRequired,
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


export default connect(mapStateToProps, { get_ingredients, addIngredients })(addIngredient);
