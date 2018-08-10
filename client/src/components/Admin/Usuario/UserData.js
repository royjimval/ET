import React, { Component } from 'react';
import './UserData.css';
export default class UserData extends Component {
    render() {
        return (
            <div class="loginBoxUserData">
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
                {/* <Collection className='collectionUserdata' header={<h6>Users</h6>} >
                        <Row>
                            <Col m={3} className='green'>
                                <p>User Name</p>
                            </Col>
                            <Col m={3} className='red'>
                                <p>Email</p>
                            </Col>
                            <Col m={3} className='blue'>
                                <p>Job</p>
                            </Col>
                            <Col m={3} className='green'>
                                <p>Ranking</p>
                            </Col>
                        </Row>
                        <div className="scrolleable divCollection">
                            <CollectionItem className="collectionUserdata">
                                <li class="collection-item avatar">
                                    <Row>
                                        <Col m={3} className='green'>
                                            <img src="assets/ariana.jpg" alt="" class="circle" width="200px" />
                                            <p>Roy</p>
                                        </Col>
                                        <Col m={3} className='red'>
                                            <p>royjimval@gmail.com</p>
                                        </Col>
                                        <Col m={3} className='blue'>
                                            <p>Mesero</p>
                                        </Col>
                                        <Col m={3} className='green'>
                                            <a href="#!" class="secondary-content"><i class="material-icons iuserdata">grade</i></a>
                                        </Col>
                                    </Row>
                                </li>
                            </CollectionItem>
                            <CollectionItem>
                                <li class="collection-item avatar">
                                    <img src="assets/ariana.jpg" alt="" class="circle" width="200px" />
                                    <span class="title">Alexis</span>
                                    <p>Anselmo<br />Chef</p>
                                    <a href="#!" class="secondary-content"><i class="material-icons iuserdata">grade</i></a>
                                </li>
                            </CollectionItem>
                            <CollectionItem>
                                <li class="collection-item avatar">
                                    <img src="assets/ariana.jpg" alt="" class="circle" width="200px" />
                                    <span class="title">Roberto</span>
                                    <p>Perez<br />Chef</p>
                                    <a href="#!" class="secondary-content"><i class="material-icons iuserdata">grade</i></a>
                                </li>
                            </CollectionItem>
                            <CollectionItem>
                                <li class="collection-item avatar">
                                    <img src="assets/ariana.jpg" alt="" class="circle" width="200px" />
                                    <span class="title">Yizreel</span>
                                    <p>Americo<br />Mesero</p>
                                    <a href="#!" class="secondary-content"><i class="material-icons iuserdata">grade</i></a>
                                </li>
                            </CollectionItem>
                        </div>
                    </Collection> */}
            </div>
        );
    }
}