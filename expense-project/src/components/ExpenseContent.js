import React, { Component } from 'react';
import DailyExpense from './DailyExpense';
class ExpenseContent extends Component {
    state = {}
    render() {
        return (
            <div className="content-wrapper">
                <div className="container wrapper-t">
                    <div className="daily-expense">
                        <DailyExpense />
                    </div>
                    <div className="graph-expense">

                    </div>
                </div>
            </div>);
    }
}

export default ExpenseContent;