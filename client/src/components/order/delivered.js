import React, { Component } from 'react'
import { Row, Col, Collection, CollectionItem, Preloader, Icon } from 'react-materialize'
import { getPreorder } from '../../accions/preorderAccions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './order.css'

let totals = 0;

class Delivered extends Component {
    componentDidMount() {
        const table = this.props.auth.user.name
        this.props.getPreorder(table);
        this.resetTotal();
    }

    resetTotal(){
        totals=0;
    }

    isCooked(preorder_item) {
        if (preorder_item.finished === true) {
            return (
                <Row className="no-marg-b">
                    <Col s={4} className='secondary-content'>
                        <Icon>check_circle</Icon>
                    </Col>
                </Row>)
        } else {
            return (
                <Row className="no-marg-b">
                    <Col s={4} className='secondary-content'>
                        <Preloader size='small' />
                    </Col>
                </Row>)
        }
    }

    isSended(preorder_item) {
        if (preorder_item.sended === true) {
            return(
                <CollectionItem>
                <Row className="no-marg-b">
                    <Col m={2} className='center-align'>
                        {
                            this.isCooked(preorder_item)
                        }
                    </Col>
                    <Col m={8}>
                        <h6 className='left'>{preorder_item.name}</h6>
                    </Col>
                    <Col m={2}>
                        <h6 className='left'>{preorder_item.price}</h6>
                        {this.sumPrices(preorder_item.price)}
                    </Col>
                    <Col m={12}>
                            {
                                preorder_item.ingredients.map(each_Ingredient => {
                                    return (
                                        <Col m={4}>
                                        <p>{each_Ingredient}</p>
                                        </Col> 
                                    )
                                })
                            }
                    </Col>
                </Row>
                </CollectionItem>
            )
        }
    }

    sumPrices(price){
         totals = totals + price
    }


    render() {
        const { preorder } = this.props.preorder;
        return (
            <div>
                <Row className='no-marg-b'>
                    <Col m={10} l={10} xl={10}>
                        <Collection header="Delivered" className='z-depth-1-half'>
                            <div className="order-delivered" >
                            {this.resetTotal()}
                                {
                                    preorder.map((preorder_item) =>
                                        (
                                            this.isSended(preorder_item)
                                        ))
                                }
                                
                            </div>
                            <CollectionItem>
                                <Row className='no-marg-b'>
                                    <Col m={6}>
                                        <h4 className='right'>Total:</h4>
                                    </Col>
                                    <Col m={6}>
                                        <h4 className='left red-text'>${totals}</h4>
                                    </Col>
                                </Row>
                            </CollectionItem>
                        </Collection>
                    </Col>
                </Row>
            </div>
        )
    }
}

Delivered.propTypes = {
    getPreorder: PropTypes.func.isRequired,
    preorder: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    preorder: state.preorder,
    auth: state.auth
});


export default connect(mapStateToProps, { getPreorder })(Delivered);
