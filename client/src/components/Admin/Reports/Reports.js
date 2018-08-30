import React, { Component } from 'react';
import ReactDOM from 'react-dom/server';
import './Reports.css';
import CalendarOne from '../Calendar/CalendarOne';
import CalendarRange from '../Calendar/CalendarRange';
import { Col, Row, Input } from '../../../../../node_modules/react-materialize';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from 'react-materialize/lib/Button';
import * as jsPDF from 'jspdf'
let order, date, total = "none";
let allTotal = 0;

class Reports extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selectValue: '1',
            total: '0'
        };
    }

    resetTotal() {
        allTotal = 0
    }

    sumTotal(item) {
        allTotal = allTotal + item
        console.log(allTotal);
    }

    content(order, orderft) {
        if (this.state.selectValue == 1) {
            console.log(order)
            return (
                <div>
                    {this.resetTotal()}
                    {
                        order.map(eachorder => {
                            return (
                                < tr className="trproduct" >
                                    <td> {eachorder.order} </td>
                                    <td> {eachorder.date}  </td>
                                    <td> {eachorder.total} </td>
                                    {this.sumTotal(eachorder.total)}
                                </tr >
                            )
                        })
                    }
                </div>
            )
        }
        else {
            console.log(orderft)
            return (
                <div>
                    {this.resetTotal()}
                    {
                        orderft.map(eachorderft => {
                            return (
                                < tr className="trproduct" >
                                    <td> {eachorderft.order} </td>
                                    <td> {eachorderft.date}  </td>
                                    <td> {eachorderft.total} </td>
                                    {this.sumTotal(eachorderft.total)}
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

    print(order, orderft) {
        if (this.state.selectValue == 1) {
            this.exportPDF(order)
        } else {
            this.exportPDF(orderft)
        }
    }



    exportPDF(orderA) {
        let rowDoc = 80;
        var pdfConverter = require('jspdf');
        var doc = new pdfConverter('p', 'pt', 'c6');
        orderA.map(eachorder => {
            order = eachorder.order,
                date = eachorder.date,
                total = eachorder.total,
                doc.setTextColor(100, 100, 100);
            doc.setFont('helvetica');
            doc.setFontSize(20);
            doc.text(20, 50, 'Etable Reports');
            doc.setFontSize(10);
            doc.text(10, rowDoc, 'Order: ' + order);
            rowDoc = rowDoc + 20;
            doc.setFontSize(10);
            doc.text(20, rowDoc, 'Date: ' + date);
            rowDoc = rowDoc + 20;
            doc.setFontSize(10);
            doc.setTextColor(255, 0, 0);
            doc.text(20, rowDoc, 'Total: ' + total);
            doc.setTextColor(100);
            rowDoc = rowDoc + 30;

            if (rowDoc === 400 || rowDoc > 400) {
                rowDoc = 80;
                doc.addPage()
            }
        })
        doc.save("Report.pdf")
    }

    render() {
        const { order } = this.props.order
        const { orderft } = this.props.orderft

        let MyComponent = null;
        if (this.state.selectValue == 1) {
            MyComponent = <CalendarOne />
        } else {
            MyComponent = <CalendarRange />
        }
        return (
            <div>
                <Row className="no-marg-b">
                    <Col s={12} m={6}>
                        <div className="pad10 grey lighten-3">
                            <Row className="no-marg-b">
                                <Input s={12} type='select' label="Select date of report" defaultValue='1' onChange={this.handleChange}>
                                    <option value='1'>Specific Date</option>
                                    <option value='2'>Date Range</option>
                                </Input>
                            </Row>
                            <Row className="no-marg-b">
                                {MyComponent}
                            </Row>
                            <div className="row center-align pad10">
                                <Button waves="light" className="green accent-4" onClick={() => this.print(order, orderft)} >
                                    PRINT PDF
                            </Button>
                            </div>

                        </div>
                    </Col>
                    <Col s={12} m={6}>
                        <div className="pad10 grey lighten-3">
                            <table>
                                <thead>
                                    <tr>
                                        <th>No order</th>
                                        <th>Date of sale</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {
                                        this.content(order, orderft)
                                    }

                                </tbody>
                            </table>
                            <Row className="no-marg-b">
                                <h4 className="center-align">Sales Total: {allTotal}</h4>
                            </Row>
                        </div>
                    </Col>
                </Row>

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
