import React, { Component } from 'react'
import '../item/item.css'
import Nav from '../header/header'

import { getcategory} from '../../accions/categoryAccion';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class categoryItem extends Component {

    componentDidMount() {
        this.props.getcategory();        
    }

    render() {

        return (
            <div>
                <Nav/>

            </div>
        )
    }
}

categoryItem.propTypes = {
    getcategory: PropTypes.func.isRequired,
    category: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    category: state.category
});


export default connect(mapStateToProps, {getcategory })(categoryItem);
