import React, { Component } from 'react';
import '../css/expense.css'
import { connect } from 'react-redux'
import DatePicker from 'react-date-picker';

import ExpenseList from './ExpenseList';
class DailyExpense extends Component {
    state = {
        amount: 0,
        remark: '',
        type: 'expense',
        show: false
    }
    componentDidMount() {

    }

    submitAdd = (e) => {
        e.preventDefault();
        this.props.createTransaction({date : this.props.date, user_id: localStorage.getItem('token'), amount: this.state.amount, remark: this.state.remark, type: this.state.type  })
    }

    handleChange = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    handleShow = (e) => {
        const stateShow = this.state.show
        this.setState({show:!stateShow})
    }
    

    render() {
        console.log(this.props.date)
        return (
            <div className="box-daily-expense">
                <div className="header-daily-expense">
                    <div className="label">
                        Expense Daily
                    </div>
                    <div>
                        <button className="add-expense-btn" onClick={this.handleShow}>
                            <span className="icon-plus"><i className="fas fa-plus"></i></span> add
                        </button>
                    </div>
                </div>
                <div className={(this.state.show? "from-add-expense" : "nofrom-add-expense")}>
                    <form onSubmit={this.submitAdd}>
                        <div className="form-add-exp-wrapper">
                            <div className="form-left">
                                <div>
                                    amount
                            <input
                                        type="number"
                                        value={this.state.amount}
                                        name="amount"
                                        onChange={this.handleChange}>
                                    </input>
                                </div>

                                <div>
                                    Remark
                            <input
                                        type="text"
                                        name="remark"
                                        value={this.state.remark}
                                        onChange={this.handleChange}
                                    ></input>
                                </div>


                                <select
                                    name="type"
                                    value={this.state.type}
                                    onChange={this.handleChange}>
                                    <option value="expense">Expense</option>
                                    <option value="income">Income</option>
                                </select>
                            </div>

                            <div><button type="submit"> เพิ่มเข้าสู่ประวัติ </button></div>
                        </div>
                    </form>
                </div>
                <div className="expense-list-wrapper">
                    <ExpenseList date={this.props.date}/>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    exp: state.exp
})

const mapDispatchToProps = (dispatch) => {
    return {
        createTransaction: dispatch.exp.createTransaction
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DailyExpense);