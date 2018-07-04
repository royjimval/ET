import React, { Component } from 'react'
import { Button } from 'react-materialize'
import Assist from '../modal/assist'
export default class fab extends Component {
    render() {
        return (
            <div>
                <Button data-target="modal1"  floating icon='help_outline' className='grey darken-4 large waves-effect waves-light' large style={{bottom: '45px', right: '24px'}}>
                </Button>
                <Assist/>
            </div>
        )
    }
}
