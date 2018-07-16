import React, { Component } from 'react'
import { Col, Collection, CollectionItem, Input, Icon, Button } from 'react-materialize'
export default class ChefDetail extends Component {

    render() {
        return (
            <div>
                <Col m={6} >
                    <h3 className='center'>Order Detail</h3>
                    <Col s={12} m={12}>
                        <Collection className='z-depth-1'>
                            <CollectionItem>Alvin <div className='secondary-content'><Input name='group1' type='checkbox' value='red' label=' ' /></div></CollectionItem>
                            <CollectionItem>Alvin</CollectionItem>
                            <CollectionItem>Alvin</CollectionItem>
                            <CollectionItem>Alvin</CollectionItem>
                        </Collection>
                    </Col>
                    <div className='center'>
                        <Button className='cyan darken-2' waves='light'>Cooking<Icon left>restaurant_menu</Icon></Button>
                        <span className=' pr-2' />
                        <Button className='green' waves='light'>Cooked<Icon left>restaurant_menu</Icon></Button>
                    </div>
                </Col>
            </div>
        )
    }
}
