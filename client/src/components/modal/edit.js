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
                        <Col s={7} className='grid-example'>
                            <Row className=' center-align'>
                                <MediaBox className=" cicrle-img" src="https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&h=650&w=940https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" caption="A demo media box1" />
                            </Row>
                            <Row className="left-align">
                                <p>
                                    You have to make these big decisions. We spend so much of our life looking - but never seeing.
                                </p>
                            </Row>
                        </Col>

                        <Col s={5} className='grid-example'>
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
                        </Col>

                    </Row>
                </Modal>
            </div>
        )
    }
}
