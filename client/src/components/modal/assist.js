import React, { Component } from 'react'
import { Modal, Button } from 'react-materialize'

export default class Assist extends Component {
    render() {
        return (
            <div>
                <Modal id='modal1' actions={
                    <div>
                        <Button className='black' modal="close" waves="light">Done</Button>
                    </div>}>
                    <h4 className='center-align'>A waiter will be assisting you soon</h4>
                </Modal>
            </div>
        )
    }
}
