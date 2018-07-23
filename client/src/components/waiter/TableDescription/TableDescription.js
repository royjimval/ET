import React, { Component } from 'react'
import { Col, Collection, Table, Button, Icon } from 'react-materialize'
import { getPreorderbytableFinished } from '../../../accions/preorderAccions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableDescription extends Component {


    componentDidMount() {
        this.props.getPreorderbytableFinished();
    }

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
                                                    <th data-field="id"><strong className="">{eachPreorder.name}</strong></th>

                                                </tr>
                                            </thead>
                                            {
                                                eachPreorder.ingredients.map(eachIngredients => {
                                                    return (
                                                        <tbody>
                                                            <tr>
                                                                <td>{eachIngredients}</td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                })
                                            }

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

};

const mapStateToProps = state => ({
    preorder: state.preorder
});

export default connect(mapStateToProps, { getPreorderbytableFinished })(TableDescription);