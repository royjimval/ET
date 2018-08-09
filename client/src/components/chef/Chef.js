import React, { Component } from 'react'
import { Button, Col, Collection, CollectionItem, Row } from '../../../../node_modules/react-materialize';
import './chef.css'
import { getPreorderbytable, getPreorderbytableFinished, updateFinished, get_table1, get_table2, get_table3, get_table4, get_table5, get_table6 } from '../../accions/preorderAccions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../waiter/waiter.css'

import Barnav from '../header/navbar'
import Badge from '../../../../node_modules/react-materialize/lib/Badge';
let cont2 = 0; let cont1 = 0; let cont3 = 0; let cont4 = 0; let cont5 = 0; let cont6 = 0; let lastTable="";


class Chef extends Component {

    componentDidMount() {
        this.props.getPreorderbytable()
        this.props.getPreorderbytableFinished()
        
        //this.interval7 = setInterval(() => this.props.getPreorderbytable(), 5000);
        this.interval1 = setInterval(() => this.props.get_table1(), 2000);
        this.interval2 = setInterval(() => this.props.get_table2(), 2000);
        this.interval3 = setInterval(() => this.props.get_table3(), 2000);
        this.interval4 = setInterval(() => this.props.get_table4(), 2000);
        this.interval5 = setInterval(() => this.props.get_table5(), 2000);
        this.interval6 = setInterval(() => this.props.get_table6(), 2000);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval1);
        clearInterval(this.interval2);
        clearInterval(this.interval3);
        clearInterval(this.interval4);
        clearInterval(this.interval5);
        clearInterval(this.interval6);
        //clearInterval(this.interval7);
      }

    updateFinished (preorder){
        this.seeOrder(lastTable)
        preorder.map((item) => (
            this.props.updateFinished(item._id, item.idtable, item.name, item.ingredients, item.price, item.sended, item.start, item.finished, item.delivered, item.noOrder)
        ))
    }


    changecolor1(table1) {
        cont1 = 0;
        table1.map(each_item => {
            cont1 = cont1 + 1;
        })

        if (cont1 === 0) {
            return (
                <Col m={2} className='center'>
                    <Button onClick={() => this.sendTable("1")} className='gray' large>Table 1 </Button>
                </Col>
            )
        }
        else {
            return (
                <Col m={2} className='center'>
                    <Button onClick={() => this.sendTable("1")} className='blue' large>Table 1 <Badge className="custom-badge red white-text">{cont1}</Badge></Button>
                </Col>
            )
        }
    }


    changecolor2(table2) {
        cont2 = 0;
        table2.map(each_item => {
            cont2 = cont2 + 1;
        })

        if (cont2 === 0) {
            return (
                <Col m={2} className='center'>
                    <Button onClick={() => this.sendTable("2")} className='gray' large>Table 2 <Badge className="custom-badge red white-text">{cont2}</Badge></Button>
                </Col>
            )
        }
        else {
            return (
                <Col m={2} className='center'>
                    <Button onClick={() => this.sendTable("2")} className='blue' large>Table 2 <Badge className="custom-badge red white-text">{cont2}</Badge></Button>
                </Col>
            )
        }
    }

    changecolor3(table3) {
        cont3 = 0;
        table3.map(each_item => {
            cont3 = cont3 + 1;
        })

        if (cont3 === 0) {
            return (
                <Col m={2} className='center'>
                    <Button className='grey' large>Table 3</Button>
                </Col>
            )
        }
        else {
            return (
                <Col m={2} className='center'>
                    <Button onClick={() => this.sendTable("3")} className='blue' large>Table 3 <Badge className="custom-badge red white-text">{cont3}</Badge></Button>
                </Col>
            )
        }
    }

    changecolor4(table4) {
        cont4 = 0;
        table4.map(each_item => {
            cont4 = cont4 + 1;
        })

        if (cont4 === 0) {
            return (
                <Col m={2} className='center'>
                    <Button className='grey' large>Table 4</Button>
                </Col>
            )
        }
        else {
            return (
                <Col m={2} className='center'>
                    <Button onClick={() => this.sendTable("4")} className='blue' large>Table 4 <Badge className="custom-badge red white-text">{cont4}</Badge></Button>
                </Col>
            )
        }
    }


    changecolor5(table5) {
        cont5 = 0;
        table5.map(each_item => {
            cont5 = cont5 + 1;
        })

        if (cont5 === 0) {
            return (
                <Col m={2} className='center'>
                    <Button className='grey' large>Table 5</Button>
                </Col>
            )
        }
        else {
            return (
                <Col m={2} className='center'>
                    <Button onClick={() => this.sendTable("5")} className='blue' large>Table 5 <Badge className="custom-badge red white-text">{cont5}</Badge></Button>
                </Col>
            )
        }
    }


    changecolor6(table6) {
        cont6 = 0;
        table6.map(each_item => {
            cont6 = cont6 + 1;
        })

        if (cont6 === 0) {
            return (
                <Col m={2} className='center'>
                    <Button className='grey' large>Table 6</Button>
                </Col>
            )
        }
        else {
            return (
                <Col m={2} className='center'>
                    <Button onClick={() => this.sendTable("6")} className='blue' large>Table 6 <Badge className="custom-badge red white-text">{cont6}</Badge></Button>
                </Col>
            )
        }
    }

    sendTable(table){
        lastTable=table
        this.seeOrder(lastTable)
        this.seeOrderWaiter(lastTable)
    }

    seeOrder = (table) => {
        this.props.getPreorderbytable(table);
        console.log(lastTable);
    }

    seeOrderWaiter = (table) => {
        this.props.getPreorderbytableFinished(table);
    }

    render() {
        const { preorder } = this.props.preorder
        const { preorderWaiter } = this.props.preorderWaiter
        const { table1 } = this.props.table1
        const { table2 } = this.props.table2
        const { table3 } = this.props.table3
        const { table4 } = this.props.table4
        const { table5 } = this.props.table5
        const { table6 } = this.props.table6


        return (
            <div>
                <Barnav />
                <div className='m-top20' />
                <Row>
                    {
                        this.changecolor1(table1)
                    }

                    {
                        this.changecolor2(table2)
                    }

                    {
                        this.changecolor3(table3)
                    }

                    {
                        this.changecolor4(table4)
                    }

                    {
                        this.changecolor5(table5)
                    }

                    {
                        this.changecolor6(table6)
                    }

                </Row>
                <div className='m-top20'/>

                {/* <Row className='container grey lighten-3'>
                    {
                        preorder.map(eachPreorder => {
                            return (
                                <Col m={3}>
                                    <Collection>
                                        <CollectionItem className='orange white-text'><Button onClick={() => {updateFinished(eachPreorder),this.seeOrder(lastTable)}} waves='light' flat className='transparent white-text'> {eachPreorder.name}</Button></CollectionItem>
                                        {
                                            eachPreorder.ingredients.map(eachIngredients => {
                                                return (
                                                    <CollectionItem className='black-text'>{eachIngredients}</CollectionItem>
                                                )
                                            })
                                        }

                                    </Collection>
                                </Col>
                            )

                        })
                    }
                </Row> */}
                <Row>
                    <Col className='offset-m1' m={5}>
                        <Collection header="Entries">
                            {
                                preorder.map(eachPreorder => {
                                    return (
                                        <Col m={3}>
                                            <Collection>
                                                <CollectionItem className='orange white-text'><Button onClick={() => { updateFinished(eachPreorder), this.seeOrder(lastTable) }} waves='light' flat className='transparent white-text'> {eachPreorder.name}</Button></CollectionItem>
                                                {
                                                    eachPreorder.ingredients.map(eachIngredients => {
                                                        return (
                                                            <CollectionItem className='black-text'>{eachIngredients}</CollectionItem>
                                                        )
                                                    })
                                                }

                                            </Collection>
                                        </Col>
                                    )

                                })
                            }
                        </Collection>
                    </Col>
                    <Col m={5}>
                        <Collection header="Exits">
                            {
                                preorderWaiter.map(eachPreorder => {
                                    return (
                                        <Col m={3}>
                                            <Collection>
                                                <CollectionItem className='gray black-text'>{eachPreorder.name}</CollectionItem>
                                                {
                                                    eachPreorder.ingredients.map(eachIngredients => {
                                                        return (
                                                            <CollectionItem className='black-text'>{eachIngredients}</CollectionItem>
                                                        )
                                                    })
                                                }

                                            </Collection>
                                        </Col>
                                    )

                                })
                            }
                        </Collection>
                    </Col>
                </Row>

            </div>
        )
    }
}
Chef.propTypes = {
    getPreorder: PropTypes.func.isRequired,
    preorder: PropTypes.object.isRequired,
    updateFinished: PropTypes.func.isRequired,
    getPreorderbytableFinished: PropTypes.func.isRequired,
    preorderWaiter: PropTypes.object.isRequired,
    get_table1: PropTypes.func.isRequired,
    get_table2: PropTypes.func.isRequired,
    get_table3: PropTypes.func.isRequired,
    get_table4: PropTypes.func.isRequired,
    get_table5: PropTypes.func.isRequired,
    get_table6: PropTypes.func.isRequired,


    table1: PropTypes.object.isRequired,
    table2: PropTypes.object.isRequired,
    table3: PropTypes.object.isRequired,
    table4: PropTypes.object.isRequired,
    table5: PropTypes.object.isRequired,
    table6: PropTypes.object.isRequired,



};

const mapStateToProps = state => ({
    preorder: state.preorder,
    preorderWaiter: state.preorder,
    table1: state.preorder,
    table2: state.preorder,
    table3: state.preorder,
    table4: state.preorder,
    table5: state.preorder,
    table6: state.preorder

});

export default connect(mapStateToProps, { getPreorderbytable, getPreorderbytableFinished, updateFinished, get_table1, get_table2, get_table3, get_table4, get_table5, get_table6 })(Chef);