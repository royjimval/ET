import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import { getdate } from "../../../accions/orderAccions";

class CalendarOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

seeOrders(date){
  this.props.getdate(date)
}

  handleChange = date => {
    this.setState({
      startDate: date
    });
    const valueOfInput = date.format("YYYY/MM/DD");
    this.seeOrders(valueOfInput)
  };

  render() {
    return <DatePicker
      inline
      selected={this.state.startDate}
      onChange={this.handleChange}
      maxDate={moment()}
    />;
  }
}

CalendarOne.propTypes = {
getdate: PropTypes.func.isRequired

};

const mapStateToProps = state => ({
  order: state.order,
});


export default connect(mapStateToProps, { getdate })(CalendarOne);
