import React, { Component } from 'react';
import './Reports.css';
import CalendarOne from '../Calendar/CalendarOne';
import CalendarRange from '../Calendar/CalendarRange';
import { Col, Row } from '../../../../../node_modules/react-materialize';
export default class Reports extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selectValue: '1'
        };
    }

    handleChange(event) {
        this.setState({ selectValue: event.target.value });
    }

    render() {
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
                        <Col m={4}className="selectdate">
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
                                <th>Categories</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Date of Sale</th>
                            </tr>
                        </thead>
                        <tfoot className="tfootProduct">
                            <tr className="trfootProduct" >
                                <td className="tdfooterProduct">Total Sales</td>
                                <td className="tdfooterProduct" >$1900</td>
                            </tr>
                        </tfoot>
                        <tbody className="tbbodyProducts">  
                            <tr className="trproduct">
                                <td>Drinks</td>
                                <td>Green Tea</td>
                                <td>22.00 $</td>
                                <td>21-6-2018</td>
                            </tr>
                            <tr className="trproduct">
                                <td>Drinks</td>
                                <td>Green Tea</td>
                                <td>22.00 $</td>
                                <td>21-6-2018</td>
                            </tr>
                            <tr className="trproduct">
                                <td>Drinks</td>
                                <td>Green Tea</td>
                                <td>22.00 $</td>
                                <td>21-6-2018</td>
                            </tr>
                            <tr className="trproduct">
                                <td>Drinks</td>
                                <td>Green Tea</td>
                                <td>22.00 $</td>
                                <td>21-6-2018</td>
                            </tr>
                            <tr className="trproduct">
                                <td>Drinks</td>
                                <td>Green Tea</td>
                                <td>22.00 $</td>
                                <td>21-6-2018</td>
                            </tr>
                            <tr className="trproduct">
                                <td>Drinks</td>
                                <td>Green Tea</td>
                                <td>22.00 $</td>
                                <td>21-6-2018</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="center">
                        <ul class="pagination paginationinventory">
                            <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                            <li class="active"><a href="#!">1</a></li>
                            <li class="waves-effect"><a href="#!">2</a></li>
                            <li class="waves-effect"><a href="#!">3</a></li>
                            <li class="waves-effect"><a href="#!">4</a></li>
                            <li class="waves-effect"><a href="#!">5</a></li>
                            <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                        </ul>
                    </div>
                </div>
            </div >
        );
    }
}