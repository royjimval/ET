import React, { Component } from 'react';
import { Select, Input, Icon, CollapsibleItem, Collapsible, Row, Col, Button } from '../../../../../node_modules/react-materialize';
import CalendarRange from '../Calendar/CalendarRange';
import CalendarOne from '../Calendar/CalendarOne';
import './Reports.css';
export default class Reports extends Component {

    render() {
        return (
            <div class="divFiltros">
                <div >
                    <div className="input-field ">
                        <Row>
                            <Col m={11}>
                                <Collapsible accordion defaultActiveKey={1}>
                                    <CollapsibleItem header='Specify' className="acordionRegister" >
                                        <div  >
                                            <Row>
                                                <CalendarOne />
                                            </Row>
                                        </div>
                                    </CollapsibleItem>
                                    <CollapsibleItem header='Range Dates' className="acordionRegister" >
                                        <div  >
                                            <Row>
                                                <CalendarRange />
                                            </Row>
                                        </div>
                                    </CollapsibleItem>
                                </Collapsible >
                            </Col>
                            <Col m={1}>
                                <Button className='btnsearch Circle' ><img className='menu-icon-w' src='assets/search.svg' width='30px' />Search </Button>
                            </Col>
                        </Row>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Categories</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Date of Sale</th>
                            </tr>
                        </thead>
                        <tbody className="tbbodyProducts">
                            <tr>
                                <td>Drinks</td>
                                <td>Green Tea</td>
                                <td>22.00 $</td>
                                <td>21-6-2018</td>
                            </tr>
                            <tr>
                                <td>Drinks</td>
                                <td>Green Tea</td>
                                <td>22.00 $</td>
                                <td>21-6-2018</td>
                            </tr>
                            <tr>
                                <td>Drinks</td>
                                <td>Green Tea</td>
                                <td>22.00 $</td>
                                <td>21-6-2018</td>
                            </tr>
                            <tr>
                                <td>Drinks</td>
                                <td>Green Tea</td>
                                <td>22.00 $</td>
                                <td>21-6-2018</td>
                            </tr>
                            <tr>
                                <td>Drinks</td>
                                <td>Green Tea</td>
                                <td>22.00 $</td>
                                <td>21-6-2018</td>
                            </tr>
                            <tr>
                                <td>Drinks</td>
                                <td>Green Tea</td>
                                <td>22.00 $</td>
                                <td>21-6-2018</td>
                            </tr>
                            <tr>
                                <td>Drinks</td>
                                <td>Green Tea</td>
                                <td>22.00 $</td>
                                <td>21-6-2018</td>
                            </tr>
                            <tr>
                                <td>Drinks</td>
                                <td>Green Tea</td>
                                <td>22.00 $</td>
                                <td>21-6-2018</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
