import React, { Component } from 'react'
import '../css/expense.css'
import { connect } from 'react-redux'
// import DatePicker from 'react-date-picker';

import ExpenseList from './ExpenseList'
class DailyExpense extends Component {
  state = {
    amount: 0,
    remark: '',
    type: 'expense',
  }

  // componentWillUpdate(prevProps,prevState){
  //   if(prevState !== this.state){
  //     this.setState(this.state)
  //   }
  // }

  componentDidMount() {}

  submitAdd = (e) => {
    e.preventDefault()
    this.props.createTransaction({
      date: this.props.date,
      user_id: localStorage.getItem('token'),
      amount: this.state.amount,
      remark: this.state.remark,
      type: this.state.type,
    })
  }

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }

  render() {
    console.log(this.props.date)
    return (
      <div className="box-daily-expense">
        <div className="header-daily-expense">
          <div className="label">Expense Daily</div>
          <div>
            <button className="add-expense-btn" onClick={this.show}>
              <span className="icon-plus">
                <i className="fas fa-plus" />
              </span>{' '}
              add
            </button>
          </div>
        </div>
        <div className="from-add-expense">
          <form onSubmit={this.submitAdd}>
            <div className="form-add-exp-wrapper">
              <div className="form-left">
                <div className="expense-mode-btn-wrapper">
                  <input
                    type="button"
                    className={ (this.state.type === 'expense') ? 'exp-button-active' : 'exp-button-inactive' }
                    style={{
                      width: '25%',
                      border: 'none',
                    }}
                    name="type"
                    value="expense"
                    onClick={(e) => this.handleChange(e)}
                  />
                  <input
                    type="button"
                    className={ (this.state.type === 'income') ? 'exp-button-active' : 'exp-button-inactive' }
                    style={{
                      width: '25%',
                      border: 'none',
                    }}
                    name="type"
                    value="income"
                    onClick={(e) => this.handleChange(e)}
                  />
                </div>

                <div>
                  amount
                  <input
                    type="number"
                    value={this.state.amount}
                    name="amount"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  Remark
                  <input
                    type="text"
                    name="remark"
                    value={this.state.remark}
                    onChange={this.handleChange}
                  />
                </div>

              </div>

              <div>
                <button type="submit"> Submit </button>
              </div>
            </div>
          </form>
        </div>
        <div className="expense-list-wrapper">
          <ExpenseList date={this.props.date} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  exp: state.exp,
})

const mapDispatchToProps = (dispatch) => {
  return {
    createTransaction: dispatch.exp.createTransaction,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyExpense)
