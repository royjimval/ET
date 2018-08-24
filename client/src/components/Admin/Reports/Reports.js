import React, { Component } from 'react';
import './Reports.css';
import CalendarOne from '../Calendar/CalendarOne';
import CalendarRange from '../Calendar/CalendarRange';
import { Col, Row } from '../../../../../node_modules/react-materialize';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Reports extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selectValue: '1'
        };
    }


    content(order, orderft) {
        if (this.state.selectValue == 1) {
            console.log(order)
            return (
                <div>
                    {
                    
                        order.map(eachorder => {
                            return(
                                < tr className="trproduct" >
                                    <td> {eachorder.order} </td>
                                    <td> {eachorder.date}  </td>
                                    <td> {eachorder.total} </td>
                                </tr >
                            )
                        })
                    }
                </div>
            )
        }
        else {
            console.log(orderft)
            return(
                <div>
                    {
                        orderft.map(eachorderft => {
                            return(
                            < tr className="trproduct" >
                                <td> {eachorderft.order} </td>
                                <td> {eachorderft.date}  </td>
                                <td> {eachorderft.total} </td>
                            </tr >
                            )
                        })
                    }
                </div>
            )

        }
    }

    handleChange(event) {
        this.setState({ selectValue: event.target.value });
    }

    render() {
        const { order } = this.props.order
        const { orderft } = this.props.orderft

        let MyComponent = null;
        var message = 'You selected ' + this.state.selectValue;
        if (this.state.selectValue == 1) {
            MyComponent = <CalendarOne />
        } else {
            MyComponent = <CalendarRange />
        }
        return (

            <div class="divReports">
                <div className="row divtextProduct">
                    <Col>
                        <img className='menu-icon iconReport' alt="warehouse" src='assets/report.svg' width='25px' />
                    </Col>
                    <Col>
                        <h6 className="textProduct">My Reports</h6>
                    </Col>
                </div>
                <div className="divheaderReports">
                    <Row className="rowheaderReports">
                        <Col m={3} className=" selectDateReport">
                            <select className="browser-default transparent" value={this.state.selectValue} onChange={this.handleChange}>
                                <option className="transparent" value="1">Specific Date</option>
                                <option className="transparent" value="2">Date Range</option>
                            </select>
                        </Col>
                        <Col m={4} className="selectdate">
                            <div className="removable calendars">
                                {MyComponent}
                            </div>
                        </Col>
                        <Col m={3} className="">
                            <a class="waves-effect waves-light btn buttonsearch left">
                                <img className='menu-icon ' alt="searchinventory" src='assets/search.svg' width='20px' />
                                Search
                            </a>
                        </Col>
                    </Row>
                </div>
                <div className="">
                    <table className="tableProduct">
                        <thead className="theadReport">
                            <tr>
                                <th>No order</th>
                                <th>Date of sale</th>
                                <th>Total</th>
                            </tr>
                        </thead>

                        <tbody className="tbbodyProducts">

                            {
                                this.content(order,orderft)
                                
                            }

                            {/* return{
                                < tr className="trproduct" >
                                    <td> {eachorder.order} </td>
                                    <td> {eachorder.date}  </td>
                                    <td> {eachorder.total} </td>
                                </tr >
                            } */}


                        </tbody>
                    </table>

                </div>
            </div >
        );
    }
}

Reports.propTypes = {
    order: PropTypes.object.isRequired,
    orderft: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    order: state.order,
    orderft: state.order
});



export default connect(mapStateToProps)(Reports);
