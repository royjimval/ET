import React from 'react';
import DatePicker from 'react-datepicker';
import { Row } from '../../../../../node_modules/react-materialize';
import Col from '../../../../../node_modules/react-materialize/lib/Col';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getdateft } from '../../../accions/orderAccions'
let from, to;

class CalendarRange extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.state = {
      from: moment(),
      to: moment()
    };
  }

  seeorder() {
    let data = { from, to }
    console.log(data)
    this.props.getdateft(data)
  }

  handleChange = date => {
    this.setState({
      from: date
    });
    from = date.format("YYYY/MM/DD");
    console.log("from");
    console.log(from);
    this.seeorder()
  };

  handleToChange = dateto => {
    this.setState({
      to: dateto
    });
    to = dateto.format("YYYY/MM/DD");
    console.log("to");
    console.log(to);

    this.seeorder()
  };

  render() {
    return (
      <div>
        <Row>
          <Col m={6} className="center-align">
            <DatePicker
              inline
              placeholder="From"
              selected={this.state.from}
              onChange={this.handleChange}
            />
          </Col>
          <Col m={6} className="center-align">
            <DatePicker
              inline
              placeholder="to"
              selected={this.state.to}
              onChange={this.handleToChange}
              maxDate={moment()}
            />
          </Col>
        </Row>
      </div>
    );
  }
}


CalendarRange.propTypes = {
  getdateft: PropTypes.func.isRequired

};

const mapStateToProps = state => ({
  orderft: state.order,
});


export default connect(mapStateToProps, { getdateft })(CalendarRange);
