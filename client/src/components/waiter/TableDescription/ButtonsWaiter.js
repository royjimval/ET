import React, { Component } from 'react'
import { Col, Card } from 'react-materialize'
import { getPreorderbytableFinished } from '../../../accions/preorderAccions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

var str1 = "Table ";
var str2 = 0;
var res = "";


class TableCardWaiter extends Component {

    constructor() {
        super();
        this.state = {
            table: [1, 2, 3, 4, 5, 6]
        };
    }

    seeOrderFinished = (table) => {
        this.props.getPreorderbytableFinished(table);
    }
    
    render() {
        return (

            <div>
                <Col m={6}>
                    <h3 className='center'>Tables</h3>
                    {
                        this.state.table.map(table => {
                            str2 = table
                            res = str1.concat(str2)
                            return (
                                <Col s={12} m={6} l={4} >
                                    <Card onClick={() => this.seeOrderFinished(table)} className='blue-grey darken-1' textClassName='white-text' title={res}></Card>
                                </Col>
                            )
                        })

                    }
                </Col>
            </div>

        )
    }

}

TableCardWaiter.propTypes = {
    getPreorderbytable: PropTypes.func.isRequired,
    preorder: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    preorder: state.preorder
});


export default connect(mapStateToProps, { getPreorderbytableFinished })(TableCardWaiter);
