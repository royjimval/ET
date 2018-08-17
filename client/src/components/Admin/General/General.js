import React, { Component } from 'react';
import { Row } from '../../../../../node_modules/react-materialize';
import Grafica from '../Graficas/grafica';
import Col from '../../../../../node_modules/react-materialize/lib/Col';
import Note from '../Note/Note';
import Calendar from '../Calendar/Calendar';
import NavBarAdmin from '../navbar/navbar';
import './General.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class General extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData() {
        // Ajax calls here
        this.setState({
            chartData: {
                labels: ['Drinks', 'Breakfast', 'Meal', 'Dinners', 'Desserts'],
                fontColor: "white",
                datasets: [
                    {
                        label: 'Products', fontColor: "white",
                        data: [
                            50000,
                            45000,
                            33000,
                            90000,
                            1000,
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                        ]
                    }
                ],
            }
        });
    }

    render() {

        const role = this.props.auth.user.role
        if (role === 'all') {

            return (
                <div >
                    <Row>
                        <Col m={12} >
                            <NavBarAdmin />
                        </Col>
                    </Row>
                    <Row>
                        <Col m={7} className=' colcalendar'>
                            <Grafica chartData={this.state.chartData} location="Eatable" legendPosition="bottom" fontColor="white" />
                        </Col>
                        <Col m={2} className=''>
                            <Calendar />
                        </Col>
                        <Col m={3} className=''>
                            <Note />
                        </Col>
                    </Row>
                </div>
            );
        } else {
            return (
                <h1>No se puede mi joven</h1>
            )
        }
    }
}

General.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(General)
