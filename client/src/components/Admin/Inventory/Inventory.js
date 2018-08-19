import React, { Component } from 'react';
import { Select, Input, Icon, CollapsibleItem, Collapsible, Row, Col, Button } from '../../../../../node_modules/react-materialize';
import './Inventory.css';
export default class Inventory extends Component {

    render() {
        return (
            <div class="divInventory">
                <div className="row divtextInventory ">
                    <Col>
                        <img className='menu-icon iconnav left' src='assets/warehouse.svg' width='25px' />
                    </Col>
                    <Col>
                        <h6 className="textInventory">My Inventory</h6>
                    </Col>
                </div>
                <div className="divheaderinventory">
                    <Row className="rowheaderinventory">
                        <Col m={4}>
                            <div class="row cbxTypeUser">
                                <Input className="white-text" s={12} type='select' icon={<Icon className='iuser'>people</Icon>} defaultValue='1'>
                                    <option value='1'>Select the type of Products</option>
                                    <option value='Chef'>Meats</option>
                                    <option value='Table'>Condiments</option>
                                    <option value='Waiter'>Drinks</option>
                                    <option value='Cashier'>Vegetables</option>
                                </Input>
                            </div>
                        </Col>
                        <Col m={4}>
                            <div class="input-field">
                                <i class="material-icons prefix iuser">free_breakfast</i>
                                <input name="product" id="icon_prefix" type="text" class="validate" />
                                <label for="icon_prefix">Product</label>
                            </div>
                        </Col>
                        <Col m={4} className="left">
                            <a class="waves-effect waves-light btn buttonsearch"> <img className='menu-icon center' src='assets/search.svg' width='20px' />Search</a>
                        </Col>
                    </Row>
                </div>

                <div className="divtableinventory">
                    <table className="tableinventory">
                        <thead className="theadinventory">
                            <tr>
                                <th>Categories</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>System</th>
                                <th>Stock</th>
                                <th>Differences Products</th>
                                <th>Differences Cash</th>
                            </tr>
                        </thead>
                        <tfoot className="tfootinventory">
                            <tr className="trfootinventory" >
                                <td className="tdfooterinventory">Total differences</td>
                                <td className="tdfooterinventory" >-$169</td>
                            </tr>
                        </tfoot>
                        <tbody className="tbbodyInventory">
                            <tr>
                                <td>Drinks</td>
                                <td>Green Tea</td>
                                <td>22.00$</td>
                                <td>10</td>
                                <td>
                                    <div class="input-field">
                                        <input name="name" id="icon_prefix" type="text" class="validate" />
                                    </div>
                                </td>
                                <td>-2</td>
                                <td>-$44</td>
                            </tr>
                            <tr>
                                <td>Drinks</td>
                                <td>Coca-Cola</td>
                                <td>25$</td>
                                <td>50</td>
                                <td>
                                    <div class="input-field">
                                        <input name="name" id="icon_prefix" type="text" class="validate" />
                                    </div>
                                </td>
                                <td>-5</td>
                                <td>-$125</td>
                            </tr>
                            <tr>
                                <td>Drinks</td>
                                <td>Water of day</td>
                                <td>20.00$</td>
                                <td>50</td>
                                <td>
                                    <div class="input-field">
                                        <input name="name" id="icon_prefix" type="text" class="validate" />
                                    </div>
                                </td>
                                <td>0</td>
                                <td>0</td>
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
            </div>
        );
    }
}
