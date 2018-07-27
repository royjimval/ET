import React, { Component } from 'react'
import { Col, Collection, Table, Button, Icon } from 'react-materialize'
import { getPreorderbytableFinished, updateDelivered } from '../../../accions/preorderAccions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableDescription extends Component {


    componentDidMount() {
        this.props.getPreorderbytableFinished();
    }

    updateDelivered = (item) => {
        console.log(item)
            updateDelivered(item._id, item.idtable, item.name, item.ingredients, item.price, item.sended, item.start, item.finished, item.noOrder)
    };
    render() {
        const { preorder } = this.props.preorder
        return (

            <div>
                <Col m={6} >
                    <h3 className='center'>Order Detail</h3>
                    <Col s={12} m={12}>
                        <Collection className='z-depth-1'>
                            {
                                preorder.map(eachPreorder => {
                                    return (
                                        <Table >
                                            <thead>
                                                <tr>
                                                    
                                                    <Col s={6} m={6}>
                                                        <th data-field="id"><strong className="">{eachPreorder.name}</strong></th>
                                                    </Col>
                                                    <Col s={6} m={6}>
                                                        <th><Button className="blue lighten-1" waves='light' onClick={() => this.updateDelivered(eachPreorder)} >Delivered<Icon left>check</Icon></Button></th> 
                                                    </Col>
                            

                                                </tr>
                                            </thead>

                                        </Table>
                                    )
                                })
                            }
                        </Collection>
                    </Col>

                </Col>
            </div>

        )
    }
}

TableDescription.propTypes = {
    getPreorderbytableFinished: PropTypes.func.isRequired,
    preorder: PropTypes.object.isRequired,
    updateDelivered: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({
    preorder: state.preorder
});

export default connect(mapStateToProps, { getPreorderbytableFinished, updateDelivered })(TableDescription);