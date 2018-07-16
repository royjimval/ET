import React, { Component } from 'react'
import { Col, Collection, CollectionItem } from 'react-materialize'

export default class TableDescription extends Component {
    render() {
        return (
            <div>
                <Col m={6} >
                    <h3 className='center'>Table Description</h3>

                    <Col s={12} m={12}>

                        <Collection className='z-depth-1' header='First Names'>
                            <CollectionItem>Alvin</CollectionItem>
                            <CollectionItem>Alvin</CollectionItem>
                            <CollectionItem>Alvin</CollectionItem>
                            <CollectionItem>Alvin</CollectionItem>
                        </Collection>

                    </Col>
                </Col>

            </div>
        )
    }
}
