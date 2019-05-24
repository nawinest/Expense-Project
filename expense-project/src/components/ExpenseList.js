import React, { Component } from 'react';
import ExpenseListItem from './ExpenseListItem';
class ExpenseList extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <ExpenseListItem />
            <ExpenseListItem />
            <ExpenseListItem />
        </div> );
    }
}
 
export default ExpenseList;