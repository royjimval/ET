import React, { Component } from 'react'
import { Footer } from 'react-materialize'

export default class footer extends Component {
    render() {
        return (
            <div>
                <Footer copyrights="copy 2018 Copyright"
                    className='black'>
                </Footer>
            </div>
        )
    }
}
