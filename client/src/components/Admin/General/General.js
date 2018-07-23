import React, { Component } from 'react';
import { Row } from '../../../../../node_modules/react-materialize';
import Grafica from '../Graficas/grafica';
import Col from '../../../../../node_modules/react-materialize/lib/Col';
import Note from '../Note/Note';
import Calendar from '../Calendar/Calendar';
import NavBarAdmin from '../navbar/navbar';

export default class General extends Component {

    render() {
        return (
            <div>
                <NavBarAdmin />
                <Row>
                    <Col m={6} className='ColNav'>
                        <Grafica />
                    </Col>
                    <Col m={4} className=''>
                        <Calendar />
                    </Col>
                    <Col m={2} className=''>
                        <Note />
                    </Col>
                </Row>
            </div>
        );
    }
}
