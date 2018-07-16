import React, { Component } from 'react'
import { Modal, Button } from 'react-materialize'

export default class Confirmation extends Component {
    render() {
        return (
            <div>
                <Modal id='ModalConfirm' actions={
                    <div>
                        <Button className='green' modal="close" waves="light" onClick={() => console.log('ya te salistes we')}>Yes</Button>
                        <span/>
                        <Button className='green' modal="close" waves="light" onClick={() => console.log('no te salistes we')}>No</Button>
                    </div>}>
                    <h4 className='center-align'>u sure?</h4>
                </Modal>
            </div>
        )
    }
}
