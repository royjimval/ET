import React, { Component } from 'react';
import './navbar.css'
import { Row } from '../../../../../node_modules/react-materialize';
import Grafica from '../Graficas/grafica';
import Col from '../../../../../node_modules/react-materialize/lib/Col';
import Note from '../Note/Note';
import Calendar from '../Calendar/Calendar';
import { Link } from 'react-router-dom';

export default class NavBarAdmin extends Component {

    render() {
        return (
            <div>
                <ul className="ulNav">
                    <li className="liNav"><a class="aNav" componentClass={Link} href="/General" to="/General">General</a></li>
                    <li className="liNav"><a class="aNav" componentClass={Link} href="/Usuario" to="/Usuario">Usuario</a></li>
                    <li className="liNav"><a class="aNav" href="#contact">Empleados</a></li>
                    <li className="liNav"><a class="aNav" href="#about">Mesas</a></li>
                </ul>
            </div>
        );
    }
}


