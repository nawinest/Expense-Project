import React, { Component } from 'react';


import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux'
class ExpenseList extends Component {
    state = {}
       
    componentDidMount() {
        this.props.getTransaction({user_id :localStorage.getItem('token')})
    }

    renderExpenseListItem = (data) => {
        const dateSelected = this.props.date
        const result = data.filter(function(el){
            let dateSelect = new Date(dateSelected[0]).getDate()+"/"+new Date(dateSelected[0]).getMonth()+"/"+new Date(dateSelected[0]).getFullYear()
            let dateExpense  = new Date(el.date).getDate()+"/"+new Date(el.date).getMonth()+"/"+new Date(el.date).getFullYear();
            dateSelect = dateExpense
            return dateSelect
        })
       const cleanData = result.map((item)=>{
           console.log(item)
           return (
            <ExpenseListItem data={item} key={item.trans_id}/>
           )
       })
       return cleanData
    }

    render() {
        const data = this.props.exp.expenseData
        let cleanData = ''
        if (data) {
            cleanData = this.renderExpenseListItem(data)
        }

        return (
            <div>
                {cleanData}
            </div>);
    }
}



const mapStateToProps = (state) => ({
    exp: state.exp
})

const mapDispatchToProps = (dispatch) => {
    return {
        getTransaction: dispatch.exp.getTransaction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList)