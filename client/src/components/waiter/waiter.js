import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Collection, CollectionItem, Icon, Button, Badge } from 'react-materialize'
import '../waiter/waiter.css'
import WaiterAssist from './WaiterAssist/WaiterAssist'
import { getPreorderbytableFinished, getPreorderbytableFinishedDelivered, updateDelivered, get_table1_Finished, get_table2_Finished, get_table3_Finished, get_table4_Finished, get_table5_Finished, get_table6_Finished } from '../../accions/preorderAccions'
import PropTypes from 'prop-types';
let cont1 = 0, cont2 = 0, cont3 = 0, cont4 = 0, cont5 = 0, cont6 = 0;



class WaiterClass extends Component {

    componentDidMount() {
        this.props.getPreorderbytableFinished();
        this.props.getPreorderbytableFinishedDelivered();

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

    updateDelivered = (preorder) => {
        preorder.map(item => {
            updateDelivered(item._id, item.idtable, item.name, item.ingredients, item.price, item.sended, item.start, item.finished, item.noOrder)

        })
    };

    changecolor1(table1) {
        cont1 = 0;
        table1.map(each_item => {
            cont1 = cont1 + 1;
        })

        if (cont1 === 0) {
            return (
                <Col s={12} m={12} l={12}>
                    <Card className='grey hoverable' textClassName='white-text' title="Table 1"></Card>
                </Col>
            )
        }
        else {
            return (
                <Col s={12} m={12} l={12}>
                    <Card onClick={() => this.seeOrderFinished("1")} className='blue hoverable' textClassName='white-text' title="Table 1"><Badge className="custom-badge red white-text">{cont1}</Badge></Card>
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
                <Col s={12} m={12} l={12}>
                    <Card onClick={() => this.seeOrderFinished("2")} className='grey hoverable' textClassName='white-text' title="Table 2"><Badge className="custom-badge red white-text">{cont2}</Badge></Card>
                </Col>
            )
        }
        else {
            return (
                <Col s={12} m={12} l={12}>
                    <Card onClick={() => this.seeOrderFinished("2")} className='blue hoverable' textClassName='white-text' title="Table 2"><Badge className="custom-badge red white-text">{cont2}</Badge></Card>
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
                <Col s={12} m={12} l={12}>
                    <Card className='grey hoverable' textClassName='white-text' title="Table 3"></Card>
                </Col>
            )
        }
        else {
            return (
                <Col s={12} m={12} l={12}>
                    <Card onClick={() => this.seeOrderFinished("3")} className='blue hoverable' textClassName='white-text' title="Table 3"><Badge className="custom-badge red white-text">{cont3}</Badge></Card>
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
                <Col s={12} m={12} l={12}>
                    <Card className='grey hoverable' textClassName='white-text' title="Table 4"></Card>
                </Col>
            )
        }
        else {
            return (
                <Col s={12} m={12} l={12}>
                    <Card onClick={() => this.seeOrderFinished("4")} className='blue hoverable' textClassName='white-text' title="Table 4"><Badge className="custom-badge red white-text">{cont4}</Badge></Card>
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
                <Col s={12} m={12} l={12}>
                    <Card className='grey hoverable' textClassName='white-text' title="Table 5"></Card>
                </Col>
            )
        }
        else {
            return (
                <Col s={12} m={12} l={12}>
                    <Card onClick={() => this.seeOrderFinished("5")} className='blue hoverable' textClassName='white-text' title="Table 5"><Badge className="custom-badge red white-text">{cont5}</Badge></Card>
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
                <Col s={12} m={12} l={12}>
                    <Card className='grey hoverable' textClassName='white-text' title="Table 6"></Card>
                </Col>
            )
        }
        else {
            return (
                <Col s={12} m={12} l={12}>
                    <Card onClick={() => this.seeOrderFinished("6")} className='blue hoverable' textClassName='white-text' title="Table 6"><Badge className="custom-badge red white-text">{cont6}</Badge></Card>
                </Col>
            )
        }
    }

    render() {
        const { preorderWaiter } = this.props.preorderWaiter
        const { preorderWaiterDelivered} = this.props.preorderWaiterDelivered

        const { table1_finished } = this.props.table1_finished
        const { table2_finished } = this.props.table2_finished
        const { table3_finished } = this.props.table3_finished
        const { table4_finished } = this.props.table4_finished
        const { table5_finished } = this.props.table5_finished
        const { table6_finished } = this.props.table6_finished

        return (

            <div>
                <WaiterAssist />
                <Row>
                    <h3 className='center'>Tables</h3>

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
                            <Collection className='z-depth-1-half' header="Entries.">
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
                                <Button className="blue lighten-1" waves='light' onClick={() => this.updateDelivered(preorderWaiter)} >Delivered<Icon left>check</Icon></Button>
                            </Collection>
                        </Col>
                        <Col s={6} m={6}>
                            
                            <Col s={12} m={12} l={12} xl={12}>
                                <Collection className='z-depth-1-half' header="Exist">
                                    <CollectionItem>
                                        {
                                            preorderWaiterDelivered.map((preorder_item) =>
                                                (
                                                    <Row>
                                                        <Col m={8}>
                                                            <h6 className='left'>{preorder_item.name}</h6>
                                                        </Col>
                                                        <Col m={2}>
                                                            <h6 className='left'>{preorder_item.price}</h6>
                                                        </Col>
                                                        <Col m={12}>
                                                            <Col m={8}>
                                                                {
                                                                    preorder_item.ingredients.map(each_Ingredient => {
                                                                        return (
                                                                            <p>{each_Ingredient}</p>
                                                                        )
                                                                    })
                                                                }</Col>
                                                        </Col>
                                                    </Row>
                                                ))
                                        }
                                    </CollectionItem>
                                </Collection>
                            </Col>

                        </Col>

                    </Col>
                </Row>

            </div>
        )
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

});


export default connect(mapStateToProps, { getPreorderbytableFinished, getPreorderbytableFinishedDelivered, updateDelivered, get_table1_Finished, get_table2_Finished, get_table3_Finished, get_table4_Finished, get_table5_Finished, get_table6_Finished })(WaiterClass);


