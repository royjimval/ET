import React, { Component } from 'react'
import { Row, Col, Button, Modal, MediaBox, Input } from 'react-materialize';
import './modal.css'
export default class modalEdit extends Component {
    render() {
        return (
            <div>
                <Modal id='modalEdit' fixedFooter className='center' header='Producto #1' actions={
                    <div>
                        <Button className='black' modal="close" waves="light">Done</Button>
                    </div>}>

                    <Row>
                        <Col s={6} m={6} l={6}>
                            <Row className=' center-align'>
                                <MediaBox className=" cicrle-img" src="https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&h=650&w=940https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" caption="A demo media box1" />
                            </Row>
                        </Col>

                        <Col  s={6} m={6} l={6}>
                            <h4 className='center'>Ingredientes</h4>
                            <Row>
                                <Input name='group1' type='checkbox' value='red' label='Red' />
                            </Row>
                            <Row>
                                <Input name='group1' type='checkbox' value='red' label='Red' />
                            </Row>
                            <Row>
                                <Input name='group1' type='checkbox' value='red' label='Red' />
                            </Row>
                            <Row>
                                <Input name='group1' type='checkbox' value='red' label='Red' />
                            </Row>
                            <Row>
                                <Input name='group1' type='checkbox' value='red' label='Red' />
                            </Row>
                            <Row>
                            <Col s={12} m={12} l={12} className=''>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra placerat aliquet. Donec ut dolor tempor, cursus nibh elementum, euismod libero. Sed volutpat neque eget est vulputate, sed blandit eros fermentum.
                                </p>
                        </Col>
                            </Row>
                        </Col>


                    </Row>
                </Modal>
            </div>
        )
    }
}
