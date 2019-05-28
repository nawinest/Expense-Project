import React, { Component } from 'react';
import DailyExpense from './DailyExpense';


import 'flatpickr/dist/themes/confetti.css'
import Flatpickr from 'react-flatpickr'
import ChartExpense from './ChartExpense';


class ExpenseContent extends Component {
    state = {
        date: [new Date()]
    }
    render() {

        const { date } = this.state;
        const styleTimePick = {
            height: '35px',
            textAlign: 'center',
            marginBottom: '1em',
            boxShadow: '0 -1px 23px 14px rgba(0, 0, 0, 0.05)',
            width: '100%',
            color: 'grey',
            border: 'none',
            borderRadius: '20px'
        }
        return (
            <div className="content-wrapper">
                <div className="container wrapper-t">
                    <div className="left-content-expense">
                        <Flatpickr
                            style={styleTimePick}
                            value={date}
                            options={{
                                inline:true,
                                enableTime: false,
                                dateFormat: "Y-m-d",
                                // wrap: true
                            }}
                            onChange={date => { this.setState({ date }) }} />

                    </div>
                    <div className="right-content-expense">
                        <DailyExpense date={this.state.date}/>
                    </div>
                </div>
                <div className="container  graph-expense">
                    <ChartExpense />
                </div>
            </div>);
    }
}

export default ExpenseContent;