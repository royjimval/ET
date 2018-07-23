import React, { Component } from 'react';
import { Col, Icon, Row, Button} from 'react-materialize';
import '../modal/modal.css'
import Nav from '../header/header'
import '../item/item.css';
import ModalEdit from '../modal/edit'

import { getproduct} from '../../accions/productAccion';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



class Item extends Component {

    constructor(props){
        super(props)
        this.state = {
            name:"",
            ingredients:[],
            extra:[],
            photo:"",
            ids:""
        }
    }

    componentDidMount() {
        this.props.getproduct();        
    }

    datamodal = (product_item) => {
        this.setState({
            name:product_item.name,
            ingredients:product_item.ingredients,
            photo:product_item.photo,
            extra:product_item.extra,
            ids:product_item._id,
        })
    }




    render() {
        const { product } = this.props.product;
        return (
            <div>
                <Nav/>
                <Row>
                                  {
                product.map((product_item) => (
                <div key={product_item._id}>
                <Col s={8} m={3} l={3} className='push-s2 center' >
                        <div class=" cardd z-depth-3" >
                            <div >
                                <Row>
                                    <Col s={9} m={9} className="left-align">
                                        <h5>{product_item.name}</h5>
                                    </Col>
                                    <Col s={3} m={3} className="right-align">
                                            <h5 className='green-text'>${product_item.price}</h5>
                                    </Col>
                                </Row>
                            </div>
                            <img class="crdImg" src={product_item.photo} alt=""></img>

                            <div class="center supporting_text">
                                <div className='hide-on-med-and-down'>
                                    <Row>
                                        <Col m={6}>
                                            <button className='btns' >add</button>
                                        </Col>
                                        <Col m={6}>
                                            <button className='btns' data-target="modalEdit" onClick={() => this.datamodal(product_item)}>edit</button>
                                        </Col>
                                    </Row>
                                </div>

                                <div className='hide-on-med-and-up show-on-medium-and-down'>
                                    <Row>
                                        <Col s={6} m={6}>
                                            <Icon small className='icn-btn' >add_circle</Icon>
                                        </Col>
                                        <Col s={6} m={6}>
                                            <Button flat className='icn-btn' data-target="modalEdit" onClick={() => this.datamodal(product_item)}>
                                            <Icon small>edit</Icon>
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>

                        </div>
                    </Col>
                    </div>
                ))
              }


                </Row>
                <ModalEdit datapass={this.state}/>

            </div >
        )
    }
}

Item.propTypes = {
    getproduct: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    product: state.product
});


export default connect(mapStateToProps, {getproduct })(Item);
