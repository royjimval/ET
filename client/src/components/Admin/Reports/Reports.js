import React, { Component } from 'react';
import './Reports.css';
import CalendarOne from '../Calendar/CalendarOne';
import CalendarRange from '../Calendar/CalendarRange';
import { Col, Row } from '../../../../../node_modules/react-materialize';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from 'react-materialize/lib/Button';
let order,date,total = "none";
let allTotal=0;

class Reports extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selectValue: '1',
            total:'0'
        };
    }

    resetTotal(){
        allTotal=0
    }

    sumTotal(item){
        allTotal=allTotal+item
        console.log(allTotal);
    }

    content(order, orderft) {
        if (this.state.selectValue === 1) {
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

    print(order,orderft){
        if (this.state.selectValue === 1) {
            this.exportPDF(order)
        }else{
            this.exportPDF(orderft)
        }
    }



    exportPDF(orderA) {

        let html = "<h1 classname='Red' >Hello</h1>"

        let rowDoc = 80;
        var pdfConverter = require('jspdf');
        var doc = new pdfConverter('p', 'pt', 'c6');

        let stringHtml = `<div>${html}</div>`;
        doc.fromHTML(stringHtml, 20, 20, { 'width': 180 });


        orderA.map(eachorder => {
            order = eachorder.order,
            date = eachorder.date,
            total = eachorder.total,


            doc.setTextColor(100);
            doc.setFontSize(20);
            doc.text(20, 50, 'Etable reports ...');
            doc.setFontSize(10);
            doc.text(10, rowDoc, 'Order: ' + order);
            rowDoc=rowDoc+20;
            doc.setFontSize(10);
            doc.text(20, rowDoc, 'Date: ' + date);
            rowDoc = rowDoc + 20;
            doc.setFontSize(10);
            doc.setTextColor(255, 0, 0);
            doc.text(20, rowDoc, 'Total: ' + total);
            doc.setTextColor(100);
            rowDoc = rowDoc + 30;

            if (rowDoc=== 400 || rowDoc>400){
                rowDoc=80;
                doc.addPage()
            }
        })
            doc.save("Report.pdf")
    }

    render() {
        const { order } = this.props.order
        const { orderft } = this.props.orderft

        let MyComponent = null;
        if (this.state.selectValue === 1) {
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
                                this.content(order, orderft)

                            }
                            <Button onClick={() => this.print(order,orderft)} >
                                PRINT PDF
                            </Button>

                        </tbody>
                    </table>
                    <center><h2>total: {allTotal}</h2></center>

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
