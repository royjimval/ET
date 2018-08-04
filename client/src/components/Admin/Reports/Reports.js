import React, { Component } from 'react';
import { Row } from '../../../../../node_modules/react-materialize';
import Col from '../../../../../node_modules/react-materialize/lib/Col';
import './Reports.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

/* import './Reports.css' */

export default class Reports extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    render() {
        return (

            <div>
                <div class="divFiltros">
                    <Row>
                        <Col m={2.5} >
                            <div class="input-field">
                                <i class="material-icons prefix iuser">people</i>
                                <select>
                                    <option value="" disabled selected>Select User</option>
                                    <option value="1">Chef</option>
                                    <option value="2">Table</option>
                                    <option value="3">Employee</option>
                                </select>
                            </div>
                        </Col>
                        <Col m={2.5} >
                            <div class="input-field">
                                <i class="material-icons prefix iuser">menu</i>
                                <select>
                                    <option value="" disabled selected>Select Categorie</option>
                                    <option value="1">Chef</option>
                                    <option value="2">Table</option>
                                    <option value="3">Employee</option>
                                </select>
                            </div>
                        </Col>
                        <Col m={2.5} >
                            <div class="input-field">
                                <Row>
                                    <Col m={2}>
                                        <i class="material-icons prefix">date_range</i>
                                    </Col>
                                    <Col m={10}>
                                        <DatePicker
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                            placeholderText="hola"
                                        />
                                        <DatePicker selected={this.state.date}
                                            onSelect={this.handleChange}
                                            onChange={this.handleChange}
                                            placeholderText="Select a weekday" />
                                        <DatePicker
                                            selected={this.state.date}
                                            onChange={this.handleChange}
                                            filterDate={this.isWeekday}
                                            placeholderText="Select a weekday" />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col m={2.5} >
                            <div class="input-field">
                                <i class="material-icons prefix iuser">date_range</i>
                                <input type="text" class="datepicker" id="datepicker" />
                                <label for="icon_prefix">Final Date</label>
                            </div>
                        </Col>
                        <Col m={2} class="blue">
                            <a class="waves-effect waves-light btn btnsearch"><i class="material-icons left">search</i>Search</a>
                        </Col>
                    </Row>
                    <table>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Type User</th>
                            </tr>
                        </thead>
                        <tbody className="tbbodyUserData">
                            <tr>
                                <td>Roy</td>
                                <td>royjimval@gmail.com</td>
                                <td>Chef</td>
                            </tr>
                            <tr>
                                <td>Alexis</td>
                                <td>anselmoalexis@gmail.com</td>
                                <td>Chef</td>
                            </tr>
                            <tr>
                                <td>Roberto</td>
                                <td>robertoprz@gmail.com</td>
                                <td>Employee</td>
                            </tr>
                            <tr>
                                <td>yizreel</td>
                                <td>yizreelamerico@gmail.com</td>
                                <td>Employee</td>
                            </tr>
                            <tr>
                                <td>Roy</td>
                                <td>royjimval@gmail.com</td>
                                <td>Chef</td>
                            </tr>
                            <tr>
                                <td>Alexis</td>
                                <td>anselmoalexis@gmail.com</td>
                                <td>Chef</td>
                            </tr>
                            <tr>
                                <td>Roberto</td>
                                <td>robertoprz@gmail.com</td>
                                <td>Employee</td>
                            </tr>
                            <tr>
                                <td>yizreel</td>
                                <td>yizreelamerico@gmail.com</td>
                                <td>Employee</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

