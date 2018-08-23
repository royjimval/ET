import React from 'react';
import DatePicker from 'react-datepicker';
import { Row } from '../../../../../node_modules/react-materialize';
import Col from '../../../../../node_modules/react-materialize/lib/Col';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class CalendarOne extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.state = {
      from: moment(),
      to: moment()
    };
  }

  handleChange = date => {
    this.setState({
      from: date
    });
    const valueOfInput = date.format("YYYY/MM/DD");
    console.log("from");
    console.log(valueOfInput);
  };

  handleToChange = dateto => {
    this.setState({
      to: dateto
    });
    const valueOfInput = dateto.format("YYYY/MM/DD");
    console.log("to");
    console.log(valueOfInput);
  };

  render() {
    return (
      <div className="row">
        <Row>
          <Col m={5.5} className="">
            <Row>
              <Col>
                <p>From:</p>
              </Col>
              <Col>
                <DatePicker
                  placeholder="From"
                  selected={this.state.from}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
          </Col>
          <Col m={1} className="center">
            <p>-</p>
          </Col>
          <Col m={5.5}>
            <Row>
              <Col>
                <p>To:</p>
              </Col>
              <Col>
                <DatePicker
                  placeholder="to"
                  selected={this.state.to}
                  onChange={this.handleToChange}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}


/* import React from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import { formatDate, parseDate } from 'react-day-picker/moment';

export default class CalendarRange extends React.Component {
  constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.state = {
      from: undefined,
      to: undefined,
    };
  }

  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }

  handleFromChange = from => {
    this.setState({
      startDate: from
    });
    // Change the from date and focus the "to" input field
    this.setState({ from });
    console.log("from");
    const valueOfInput = from.parseDate;
    console.log(valueOfInput);
  }
  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
    console.log("to");
    const valueOfInput = to;
    /* console.log(valueOfInput); */
/*   }
  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="InputFromTo black-text">
        <DayPickerInput
          value={from}
          placeholder="From"
          format="MM/DD/YYYY"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { after: to },
            toMonth: to,
            modifiers,
            numberOfMonths: 2,
            onDayClick: () => this.to.getInput().focus(),
          }}
          onDayChange={this.handleFromChange}
        />{' '}
        — {' '}
        <span className="InputFromTo-to black-text">
          <DayPickerInput
            ref={el => (this.to = el)}
            value={to}
            placeholder="To"
            format="MM/DD/YYYY"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { before: from },
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 2,
            }}
            onDayChange={this.handleToChange}
          />
        </span>
        <Helmet>
          <style>{` */
 /*  .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #000000 !important;
  }
  .InputFromTo .DayPicker-Day {
    border-radius: 0 !important;
  }
  .InputFromTo .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .InputFromTo .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  .InputFromTo .DayPickerInput-Overlay {
    width: 550px;
  }
  .InputFromTo-to .DayPickerInput-Overlay {
    margin-left: -198px;
  } */
/* `}</style>
        </Helmet>
      </div>
    );
  }
} */




