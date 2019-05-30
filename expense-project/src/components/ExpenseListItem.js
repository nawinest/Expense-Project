import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'

// modal test
import ReactModal from 'react-modal'
import '../css/expense.css'

class ExpenseListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      newAmount: this.props.data.amount,
      newRemark: this.props.data.remark,
      newType: this.props.data.type,
    }
  }

  componentDidMount() {
    ReactModal.setAppElement('body')
  }

  handleDeleteItem = () => {
    const trans_id = this.props.data.trans_id
    this.props.deleteTransaction({ trans_id: trans_id, user_id: localStorage.getItem('token') })
  }

  handleOpenModal = () => {
    this.setState({ showModal: true })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  handleEditTransaction = (e) => {
    const { trans_id } = this.props.data
    try {
      this.props.updateTransaction({
        user_id: localStorage.getItem('token'),
        trans_id,
        type: this.state.newType,
        remark: this.state.newRemark,
        amount: this.state.newAmount,
      })
    } catch (e) {
      console.log(e)
    }
  }

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }

  //  trans_id
  //   your trans_id : {trans_id}
  // <h5>Your amount</h5>
  //   <input
  //   type="number"
  //   name="newAmount"
  //   onChange={this.handleChange}
  //   value={this.state.newAmount}
  // />
  // <h5>Your remark</h5>
  // <input
  //   type="text"
  //   name="newRemark"
  //   onChange={this.handleChange}
  //   value={this.state.newRemark}
  // />
  // <div>
  //   <select name="newType" value={this.state.type} onChange={this.handleChange}>
  //     <option value="expense">Expense</option>
  //     <option value="income">Income</option>
  //   </select>
  // </div>

  render() {
    let expense = false
    const { type, remark, amount, date } = this.props.data
    if (type === 'expense') {
      expense = true
    }
    return (
      <div>
        <div className="expense-list-item">
          <div className={expense ? 'icon-withdraw' : 'icon-deposit'}>
            <i className="fas fa-dollar-sign" />
          </div>
          <div className="expense-description">
            <h6>{remark}</h6>
            <p>
              <Moment format="DD-MMM-YYYY HH:mm">{date}</Moment>
            </p>
          </div>
          {expense ? (
            <div className="expense-price">
              {expense ? '-' : '+'}
              {amount} ฿
            </div>
          ) : (
            <div className="income-price">
              {expense ? '-' : '+'}
              {amount} ฿
            </div>
          )}

          <div>
            <button className="edit-item-btn" onClick={this.handleOpenModal}>
              {' '}
              Edit{' '}
            </button>
          </div>
          <div>
            <button className="close-item-btn" onClick={this.handleDeleteItem}>
              {' '}
              x{' '}
            </button>
          </div>

          {/* modal edit */}
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            className="modal-edit">
            <div className="close-btn-wrapper">
              <button className="close-btn-edit" onClick={this.handleCloseModal}>
                {' '}
                x close
              </button>
            </div>
            <div className="label-editExpense">
              <div className="field-topic btn-container">Edit your transection </div>
              <form onSubmit={this.handleEditTransaction}>
                <div className="expense-mode-btn-wrapper btn-container">
                  <input
                    type="button"
                    className={
                      this.state.newType === 'income' ? 'exp-button-active' : 'exp-button-inactive'
                    }
                    name="type"
                    value="income"
                    onClick={(e) => this.handleChange(e)}
                  />
                  <input
                    type="button"
                    className={
                      this.state.newType === 'expense' ? 'exp-button-active' : 'exp-button-inactive'
                    }
                    name="type"
                    value="expense"
                    onClick={(e) => this.handleChange(e)}
                  />
                </div>

                <div className="field-container">
                  <div className="field-topic">Amount</div>
                  <input
                    type="number"
                    name="newAmount"
                    className="minimal-input"
                    contenteditable="true"
                    value={this.state.newAmount}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="field-container">
                  <div className="field-topic">Remark</div>
                  <input
                    type="text"
                    name="newRemark"
                    className="minimal-input"
                    value={this.state.newRemark}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="btn-container">
                  <button className="submit-btn" type="submit">
                    {' '}
                    Edit your transaction
                  </button>
                </div>
              </form>
            </div>
          </ReactModal>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTransaction: dispatch.exp.deleteTransaction,
    updateTransaction: dispatch.exp.updateTransaction,
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ExpenseListItem)
// ReactModal.setAppElement(ExpenseListItem)
