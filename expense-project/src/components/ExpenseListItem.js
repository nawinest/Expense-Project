import React, { Component } from 'react';
class ExpenseListItem extends Component {
    state = {}
    render() {
        let expense = false;
        return (
            <div className="expense-list-item">
                <div className={(!expense) ? "icon-withdraw" : "icon-deposit"}>
                    <i className="fas fa-dollar-sign"></i>
                </div>
                <div className="expense-description">
                    <h6>
                        {(!expense) ? "Withdraw" : "Deposit"}
                    </h6>
                    <p> {`18.04 Friday, May 24, 2562 `} </p>
                </div>
                <div className="expense-price">
                    {`- 1200`}
                </div>
            </div>);
    }
}

export default ExpenseListItem;