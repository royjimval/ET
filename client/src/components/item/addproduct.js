import React, { Component } from 'react';
import { Col, Icon, Row } from 'react-materialize';
import Nav from '../header/header'
import { addProduct} from '../../accions/productAccion';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../item/item.css';


class ADDPRODUCT extends Component {
    handleSubmit = (e) => {
        
        e.preventDefault();
        const name = this.getName.value;
        const category = this.getCategory.value;
        const price = this.getPrice.value;
        const ingredients = this.getIngredients.value;
        const extra = this.getExtra.value;
        const photo = this.getPhoto.value;

        const data = {
            name, category, price, ingredients, extra, photo
        }
        this.props.addProduct(data);
        toast.info("Congratulations, Your new product have been added correctly :)!", {
            position: toast.POSITION.TOP_RIGHT,
            className: 'foo-bar'
          });
        }
        

    render() {
        const { product } = this.props.product;
        return (

            <div>
                <Nav/>
                <Row>

                            <form onSubmit={this.handleSubmit}>
                                <input required type="text" ref={(input) => this.getTitle = input} placeholder="Enter Post Title" />
                                <input required type="text" ref={(input) => this.getTitle = input} placeholder="Enter Post Title" />
                                <input required type="text" ref={(input) => this.getTitle = input} placeholder="Enter Post Title" />
                                <input required type="text" ref={(input) => this.getTitle = input} placeholder="Enter Post Title" />
                                <input required type="text" ref={(input) => this.getTitle = input} placeholder="Enter Post Title" />
                                <input required type="text" ref={(input) => this.getTitle = input} placeholder="Enter Post Title" />

                                <button className='btn-r green'></button>
                            </form>

                </Row>
            </div >
        )
    }
}
const mapStateToProps = state => ({
    product: state.product
});

export default connect(
    mapStateToProps,
    { addProduct }
)(ADDPRODUCT);