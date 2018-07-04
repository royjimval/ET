import React, { Component } from 'react'
import { Row, Col, Collection, CollectionItem, Button } from 'react-materialize'
export default class Order extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col m={6} className='offset-m3 '>
                        <Collection header='Order' className='z-depth-3'>
                            <CollectionItem>
                                <Row>
                                    <Col m={8}>
                                        <h5>Product {Math.floor(Math.random() * 30)}</h5>
                                    </Col>
                                    <Col m={4}>
                                        <h5 className='right'>$  {Math.floor(Math.random() * 30.01)}.48</h5>
                                    </Col>
                                    <Col m={12} >
                                        <p>Let's go up in here, and start having some fun Anytime you learn something your time and energy are not wasted. You can do anything your heart can imagine. This is your creation - and it's just as unique and special as you are.</p>
                                    </Col>
                                    <Button className='black right' waves='light'>Remove</Button>
                                </Row>
                            </CollectionItem>
                            <CollectionItem>Alvin</CollectionItem>
                            <CollectionItem>Alvin</CollectionItem>
                            <CollectionItem>Alvin</CollectionItem>
                        </Collection>
                    </Col>
                </Row>
            </div>
        )
    }
}
