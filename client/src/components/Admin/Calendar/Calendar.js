import React, { Component } from 'react'
import DayPickerInput from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class Calendar extends Component {

    render() {
        return (
            <div className="divcalendar">
                <DayPickerInput />
            </div>
        );
    }
}
