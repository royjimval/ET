import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Collection, CollectionItem, Icon, Button, Badge } from 'react-materialize'
import '../waiter/waiter.css'
import WaiterAssist from './WaiterAssist/WaiterAssist'
import { getPreorderbytableFinished, getPreorderbytableFinishedDelivered, updateDelivered, get_table1_Finished, get_table2_Finished, get_table3_Finished, get_table4_Finished, get_table5_Finished, get_table6_Finished } from '../../accions/preorderAccions'
import PropTypes from 'prop-types';
let cont1 = 0, cont2 = 0, cont3 = 0, cont4 = 0, cont5 = 0, cont6 = 0; let lastTable = "";



class WaiterClass extends Component {

    componentDidMount() {
        this.props.getPreorderbytableFinished();
        this.props.getPreorderbytableFinishedDelivered();
        this.interval1 = setInterval(() => this.updateCosults(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval1);
    }

    updateCosults() {
        this.props.get_table1_Finished()
        this.props.get_table2_Finished()
        this.props.get_table3_Finished()
        this.props.get_table4_Finished()
        this.props.get_table5_Finished()
        this.props.get_table6_Finished()
    }

    seeOrderFinished = (table) => {
        this.props.getPreorderbytableFinished(table);
        this.props.getPreorderbytableFinishedDelivered(table);
    }

    sendTable(table) {
        lastTable = table
        this.seeOrderFinished(lastTable)
    }

    updateDelivered = (preorder) => {
        preorder.map(item => {
            updateDelivered(item._id, item.idtable, item.name, item.ingredients, item.price, item.sended, item.start, item.finished, item.noOrder)

        })
    };

    changecolor1(table1) {
        cont1 = 0;
        table1.map(() => {
            cont1 = cont1 + 1;
        })

        if (cont1 === 0) {
            return (
                <Row className="half-marg-b">
                    <Col s={12} m={12} l={12} xl={12} className="center">
                        <Button onClick={() => this.sendTable('1')} className="ch-btn cyan darken-2">
                            <Row className="no-marg-b">
                                <img src="assets/table.svg" alt="Table Icon" width="40px" />
                            </Row>
                            <Row className="no-marg-b">Table 1</Row>
                        </Button>
                    </Col>
                </Row>
            )
        }
        else {
            return (
                <Row className="half-marg-b">
                    <Col s={12} m={12} l={12} xl={12} className="center">
                        <Button onClick={() => this.sendTable('1')} className="ch-btn green accent 1">
                            {/* <Row className="no-marg-b red-text"><h5><b>{cont1}</b></h5></Row> */}
                            <Row className="no-marg-b">
                                <img src="assets/table.svg" alt="Table Icon" width="40px" />
                            </Row>
                            <Row className="no-marg-b">Table 1</Row>
                        </Button>
                    </Col>
                </Row>
            )
        }
    }

    changecolor2(table2) {
        cont2 = 0;
        table2.map(() => {
            cont2 = cont2 + 1;
        })

        if (cont2 === 0) {
            return (
                <Row className="half-marg-b">
                    <Col s={12} m={12} l={12} xl={12} className="center">
                        <Button onClick={() => this.sendTable('2')} className="ch-btn cyan darken-2">
                            {/* <Row className="no-marg-b white-text"><h5><b>-</b></h5></Row> */}
                            <Row className="no-marg-b">
                                <img src="assets/table.svg" alt="Table Icon" width="40px" />
                            </Row>
                            <Row className="no-marg-b">Table 2</Row>
                        </Button>
                    </Col>
                </Row>
            )
        }
        else {
            return (
                <Row className="half-marg-b">
                    <Col s={12} m={12} l={12} xl={12} className="center">
                        <div className="badge-waiter">{cont2}</div>
                        <Button onClick={() => this.sendTable('2')} className="ch-btn green accent-1">
                            <Row className="no-marg-b">
                                <img src="assets/table.svg" alt="Table Icon" width="40px" />
                            </Row>
                            <Row className="no-marg-b">Table 2</Row>
                        </Button>
                    </Col>
                </Row>
            )
        }
    }

    changecolor3(table3) {
        cont3 = 0;
        table3.map(() => {
            cont3 = cont3 + 1;
        })

        if (cont3 === 0) {
            return (
                <Row className="half-marg-b">
                    <Col s={12} m={12} l={12} xl={12} className="center">
                        <Button onClick={() => this.sendTable('3')} className="ch-btn cyan darken-2">
                            <Row className="no-marg-b">
                                <img src="assets/table.svg" alt="Table Icon" width="40px" />
                            </Row>
                            <Row className="no-marg-b">Table 3</Row>
                        </Button>
                    </Col>
                </Row>
            )
        }
        else {
            return (
                <Row className="half-marg-b">
                    <Col s={12} m={12} l={12} xl={12} className="center">
                        <div className="badge-waiter">{cont3}</div>
                        <Button onClick={() => this.sendTable('3')} className="ch-btn green accent-1">
                            <Row className="no-marg-b">
                                <img src="assets/table.svg" alt="Table Icon" width="40px" />
                            </Row>
                            <Row className="no-marg-b">Table 3</Row>
                        </Button>
                    </Col>
                </Row>
            )
        }
    }

    changecolor4(table4) {
        cont4 = 0;
        table4.map(() => {
            cont4 = cont4 + 1;
        })

        if (cont4 === 0) {
            return (
                <Row className="half-marg-b">
                    <Col s={12} m={12} l={12} xl={12} className="center">
                        <Button onClick={() => this.sendTable('4')} className="ch-btn cyan darken-2">
                            <Row className="no-marg-b">
                                <img src="assets/table.svg" alt="Table Icon" width="40px" />
                            </Row>
                            <Row className="no-marg-b">Table 4</Row>
                        </Button>
                    </Col>
                </Row>
            )
        }
        else {
            return (
                <Row className="half-marg-b">
                    <Col s={12} m={12} l={12} xl={12} className="center">
                        <div className="badge-waiter">{cont4}</div>
                        <Button onClick={() => this.sendTable('4')} className="ch-btn green accent-1">
                            <Row className="no-marg-b">
                                <img src="assets/table.svg" alt="Table Icon" width="40px" />
                            </Row>
                            <Row className="no-marg-b">Table </Row>
                        </Button>
                    </Col>
                </Row>
            )
        }
    }

    changecolor5(table5) {
        cont5 = 0;
        table5.map(() => {
            cont5 = cont5 + 1;
        })

        if (cont5 === 0) {
            return (
                <Row className="half-marg-b">
                    <Col s={12} m={12} l={12} xl={12} className="center">
                        <Button onClick={() => this.sendTable('5')} className="ch-btn cyan darken-2">
                            <Row className="no-marg-b">
                                <img src="assets/table.svg" alt="Table Icon" width="40px" />
                            </Row>
                            <Row className="no-marg-b">Table 5</Row>
                        </Button>
                    </Col>
                </Row>
            )
        }
        else {
            return (
                <Row className="half-marg-b">
                    <Col s={12} m={12} l={12} xl={12} className="center">
                        <div className="badge-waiter">{cont5}</div>
                        <Button onClick={() => this.sendTable('5')} className="ch-btn green accent-1">
                            <Row className="no-marg-b">
                                <img src="assets/table.svg" alt="Table Icon" width="40px" />
                            </Row>
                            <Row className="no-marg-b">Table 5</Row>
                        </Button>
                    </Col>
                </Row>
            )
        }
    }

    changecolor6(table6) {
        cont6 = 0;
        table6.map(() => {
            cont6 = cont6 + 1;
        })

        if (cont6 === 0) {
            return (
                <Row className="half-marg-b">
                    <Col s={12} m={12} l={12} xl={12} className="center">
                        <Button onClick={() => this.sendTable('6')} className="ch-btn cyan darken-2">
                            <Row className="no-marg-b">
                                <img src="assets/table.svg" alt="Table Icon" width="40px" />
                            </Row>
                            <Row className="no-marg-b">Table 6</Row>
                        </Button>
                    </Col>
                </Row>
            )
        }
        else {
            return (
                <Row className="half-marg-b">
                    <Col s={12} m={12} l={12} xl={12} className="center">
                        <div className="badge-waiter">{cont6}</div>
                        <Button onClick={() => this.sendTable('6')} className="ch-btn green accent-1">
                            <Row className="no-marg-b">
                                <img src="assets/table.svg" alt="Table Icon" width="40px" />
                            </Row>
                            <Row className="no-marg-b">Table 6</Row>
                        </Button>
                    </Col>
                </Row>
            )
        }
    }

    showDeliverButton(preorderWaiter) {
        switch (lastTable) {
            case '1': {
                if (cont1 > 0) {
                    return (
                        <div>

                            <Button className="blue lighten-1" waves='light' onClick={() => { this.updateDelivered(preorderWaiter), setTimeout(() => this.sendTable(lastTable), 100) }} >Delivered<Icon left>check</Icon></Button>
                        </div>
                    )
                } else {
                    return (
                        <div></div>
                    )
                }
            } break;
            case '2': {
                if (cont2 > 0) {
                    return (
                        <div>

                            <Button className="blue lighten-1" waves='light' onClick={() => { this.updateDelivered(preorderWaiter), setTimeout(() => this.sendTable(lastTable), 100) }} >Delivered<Icon left>check</Icon></Button>

                        </div>
                    )
                } else {
                    return (
                        <div></div>
                    )
                }
            } break;
            case '3': {
                if (cont3 > 0) {
                    return (
                        <div>

                            <Button className="blue lighten-1" waves='light' onClick={() => { this.updateDelivered(preorderWaiter), setTimeout(() => this.sendTable(lastTable), 100) }} >Delivered<Icon left>check</Icon></Button>

                        </div>
                    )
                } else {
                    return (
                        <div></div>
                    )
                }
            } break;
            case '4': {
                if (cont4 > 0) {
                    return (
                        <div>

                            <Button className="blue lighten-1" waves='light' onClick={() => { this.updateDelivered(preorderWaiter), setTimeout(() => this.sendTable(lastTable), 100) }} >Delivered<Icon left>check</Icon></Button>

                        </div>
                    )
                } else {
                    return (
                        <div></div>
                    )
                }
            } break;
            case '5': {
                if (cont5 > 0) {
                    return (
                        <div>
                            <Button className="blue lighten-1" waves='light' onClick={() => { this.updateDelivered(preorderWaiter), setTimeout(() => this.sendTable(lastTable), 100) }} >Delivered<Icon left>check</Icon></Button>
                        </div>
                    )
                } else {
                    return (
                        <div></div>
                    )
                }
            } break;
            case '6': {
                if (cont6 > 0) {
                    return (
                        <div>
                            <Button className="blue lighten-1" waves='light' onClick={() => { this.updateDelivered(preorderWaiter), setTimeout(() => this.sendTable(lastTable), 100) }} >Delivered<Icon left>check</Icon></Button>
                        </div>
                    )
                } else {
                    return (
                        <div></div>
                    )
                }
            } break;
        }
    }

    render() {
        const { preorderWaiter } = this.props.preorderWaiter
        const { preorderWaiterDelivered } = this.props.preorderWaiterDelivered

        const { table1_finished } = this.props.table1_finished
        const { table2_finished } = this.props.table2_finished
        const { table3_finished } = this.props.table3_finished
        const { table4_finished } = this.props.table4_finished
        const { table5_finished } = this.props.table5_finished
        const { table6_finished } = this.props.table6_finished

        const role = this.props.auth.user.role
        if (role === 'Waiter' || role === 'all') {

            return (

                <div>
                    <WaiterAssist WaiterTilte="Waiter" history={this.props.history}/>
                    <Row>
                    <br></br>
                    <div className="styleheaders center divHeader">
                        <div>
                            <img src='assets/favicon-57.png' />
                        </div>
                        <div className="divHeaderText">
                            Hey you can see the order ready here :D
                        </div>
                    </div>
                        <Col m={2}>
                            {
                                this.changecolor1(table1_finished)
                            }
                            {
                                this.changecolor2(table2_finished)
                            }
                            {
                                this.changecolor3(table3_finished)
                            }
                            {
                                this.changecolor4(table4_finished)
                            }
                            {
                                this.changecolor5(table5_finished)
                            }
                            {
                                this.changecolor6(table6_finished)
                            }
                        </Col>

                        <Col m={10} >
                            <Col s={6} m={6}>
                                <Collection className='z-depth-1-half' header="Entries">
                                    <div className="order-waiter">
                                        {
                                            preorderWaiter.map(eachPreorder => {
                                                return (
                                                    <CollectionItem>
                                                        <Row>
                                                            <Col m={6}>{eachPreorder.name}</Col>
                                                        </Row>
                                                    </CollectionItem>
                                                )
                                            })
                                        }
                                    </div>
                                    <CollectionItem className="center-align">
                                        {this.showDeliverButton(preorderWaiter)}
                                    </CollectionItem>

                                </Collection>
                            </Col>
                            <Col s={6} m={6}>

                                <Col s={12} m={12} l={12} xl={12}>
                                    <Collection className='z-depth-1-half' header="Exits">
                                        <div className="order-waiter">
                                            {
                                                preorderWaiterDelivered.map((preorder_item) =>
                                                    (
                                                        <CollectionItem>
                                                            <Row className='no-marg-b'>
                                                                <Col m={8}>
                                                                    <h6 className='left'>{preorder_item.name}</h6>
                                                                </Col>
                                                                <Col m={2}>
                                                                    <h6 className='left'>{preorder_item.price}</h6>
                                                                </Col>
                                                                <Col m={12}>
                                                                    {
                                                                        preorder_item.ingredients.map(each_Ingredient => {
                                                                            return (
                                                                                <Col m={4}>
                                                                                    <p>{each_Ingredient}</p>
                                                                                </Col>
                                                                            )
                                                                        })
                                                                    }
                                                                </Col>
                                                            </Row>
                                                        </CollectionItem>
                                                    ))
                                            }
                                        </div>
                                        <CollectionItem> <div></div>
                                        </CollectionItem>
                                    </Collection>
                                </Col>

                            </Col>

                        </Col>
                    </Row>

                </div>
            )
        } else {
            return (
                <div className='bg-img  valign-wrapper'>
                    <div className="cntr center-align z-depth-2">
                        <h1 className="white-text">Go back</h1>
                        <h5 className="white-text">you shouldn't be here</h5>
                        <Button onClick={() => this.props.history.push('/')}>go back</Button>
                    </div>
                </div>
            )
        }
    }

}

WaiterClass.propTypes = {
    getPreorderbytableFinished: PropTypes.func.isRequired,
    preorderWaiter: PropTypes.object.isRequired,
    getPreorderbytableFinishedDelivered: PropTypes.func.isRequired,
    preorderWaiterDelivered: PropTypes.object.isRequired,

    updateDelivered: PropTypes.func.isRequired,

    get_table1_Finished: PropTypes.func.isRequired,
    get_table2_Finished: PropTypes.func.isRequired,
    get_table3_Finished: PropTypes.func.isRequired,
    get_table4_Finished: PropTypes.func.isRequired,
    get_table5_Finished: PropTypes.func.isRequired,
    get_table6_Finished: PropTypes.func.isRequired,

    table1_finished: PropTypes.object.isRequired,
    table2_finished: PropTypes.object.isRequired,
    table3_finished: PropTypes.object.isRequired,
    table4_finished: PropTypes.object.isRequired,
    table5_finished: PropTypes.object.isRequired,
    table6_finished: PropTypes.object.isRequired,

    auth: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
    preorderWaiter: state.preorder,
    preorderWaiterDelivered: state.preorder,

    table1_finished: state.preorder,
    table2_finished: state.preorder,
    table3_finished: state.preorder,
    table4_finished: state.preorder,
    table5_finished: state.preorder,
    table6_finished: state.preorder,
    auth: state.auth
});


export default connect(mapStateToProps, { getPreorderbytableFinished, getPreorderbytableFinishedDelivered, updateDelivered, get_table1_Finished, get_table2_Finished, get_table3_Finished, get_table4_Finished, get_table5_Finished, get_table6_Finished })(WaiterClass);


