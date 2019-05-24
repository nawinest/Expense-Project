import React, { Component } from 'react';
import '../css/expense.css'
import ExpenseList from './ExpenseList';
class DailyExpense extends Component {
    state = {}
    render() {
        return (
            <div className="box-daily-expense">
                <div className="header-daily-expense">
                    <div className="label">
                        Expense Daily 
                    </div>
                    <div>
                        <button className="add-expense-btn">
                            <span className="icon-plus"><i className="fas fa-plus"></i></span> add
                        </button>
                    </div>
                </div>
                <div className="expense-list-wrapper">
                    <ExpenseList />
                </div>
            </div>
        );
    }
}

export default DailyExpense;