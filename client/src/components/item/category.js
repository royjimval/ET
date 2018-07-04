import React, { Component } from 'react'
import { Col,Row} from 'react-materialize'
import '../item/item.css'

export default class categoryItem extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col s={4} className='center grid-example'>
                        <img className='img-circle' src='https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74ac7c1aa35dc36f50cc1ac7517c70a7&auto=format&fit=crop&w=750&q=80' alt='' />
                        <Col s={12} className='center grid-example'>
                            <h4>Category #{Math.floor(Math.random() * 50)}</h4>
                        </Col>
                    </Col>                     
                    <Col s={4} className='center grid-example'>
                        <img className='img-circle' src='https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74ac7c1aa35dc36f50cc1ac7517c70a7&auto=format&fit=crop&w=750&q=80' alt='' />
                        <Col s={12} className='center grid-example'>
                            <h4>Category #{Math.floor(Math.random() * 50)}</h4>
                        </Col>
                    </Col>                     
                    <Col s={4} className='center grid-example'>
                        <img className='img-circle' src='https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74ac7c1aa35dc36f50cc1ac7517c70a7&auto=format&fit=crop&w=750&q=80' alt='' />
                        <Col s={12} className='center grid-example'>
                            <h4>Category #{Math.floor(Math.random() * 50)}</h4>
                        </Col>
                    </Col>
                </Row>

            </div>
        )
    }
}
