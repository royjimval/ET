import React, { Component } from 'react'
import './Note.css'

export default class Note extends Component {

    render() {
        return (
            <div className='center'>
                <ul className="ulNote center">
                    <li className="liNote">
                        <a className="aNote" href="/">
                            <h2 className="hNote">Nota:</h2>
                            <p className="pNote">Recuerda ofrecer alguna promocion para tus desayunos</p>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}


