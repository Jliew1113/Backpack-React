import React, { Component } from 'react';
import { BpkCode } from 'bpk-component-code';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import BpkCalendar from 'bpk-component-calendar';
import BpkInput, { INPUT_TYPES } from 'bpk-component-input';
import { CALENDAR_SELECTION_TYPE } from 'bpk-component-datepicker';
import format from 'date-fns/format';

import STYLES from './App.scss';

const formatDateFull = date => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = date => format(date, 'MMMM yyyy');

const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    nameNarrow: "S",
    index: 0,
    isWeekend: true,
  },
  {
    name: "Monday",
    nameAbbr: "Mon",
    nameNarrow: "M",
    index: 1,
    isWeekend: false
  },
  {
    name: "Tuesday",
    nameAbbr: "Tue",
    nameNarrow: "T",
    index: 2,
    isWeekend: false
  },
  {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    nameNarrow: "W",
    index: 3,
    isWeekend: false,
  },
  {
    name: "Thursday",
    nameAbbr: "Thu",
    nameNarrow: "T",
    index: 4,
    isWeekend: false
  },
  {
    name: "Friday",
    nameAbbr: "Fri",
    nameNarrow: "F",
    index: 5,
    isWeekend: false
  },
  {
    name: 'Saturday',
    nameAbbr: 'Sat',
    nameNarrow: "S",
    index: 6,
    isWeekend: true,
  },
];

class Calendar extends Component {
  constructor () {
    super();

    this.state = {
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: null
        }
    };
  }

  handleDateSelect = (date) => {
    this.setState({
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: date,
      },
    });
  }

  render () {
    return (
      <div>
        <BpkInput
          id='dateInput'
          type={INPUT_TYPES.text}
          name='date'
          value={(this.state.selectionConfiguration.date || '').toString()}
          placeholder='Departure date'
        />
        <BpkCalendar
          id='calendar'
          onDateSelect={this.handleDateSelect}
          formatMonth={formatMonth}
          formatDateFull={formatDateFull}
          daysOfWeek={daysOfWeek}
          weekStartsOn={1}
          changeMonthLabel="Change month"
          nextMonthLabel="Next month"
          previousMonthLabel="Previous month"
          selectionConfiguration={this.state.selectionConfiguration}
        />
      </div>
    )
  }
}

const c = className => STYLES[className] || 'UNKNOWN';

export default class App extends React.Component {
  render() {
    return (
      <div className={c('App')}>
      <header className={c('App__header')}>
        <div className={c('App__header-inner')}>
          <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>Flight Schedule</BpkText>
        </div>
      </header>
      <main className={c('App__main')}>
        <div className="calendar-container">
          <Calendar />
        </div>
        <BpkButton onClick={() => alert('It works!')}>Continue</BpkButton>
      </main>
    </div>
    );
  }
}


