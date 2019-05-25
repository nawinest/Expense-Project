import React, { Component } from 'react';
// import Expense from '../components/expense'
import '../css/expense.css'
import ExpenseContent from '../components/ExpenseContent';

class Expensepage extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <ExpenseContent />
        </div> );
    }
}
 
export default Expensepage;