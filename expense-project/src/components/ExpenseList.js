import React, { Component } from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux'
class ExpenseList extends Component {
    state = {}
    componentDidMount(){
       
    }

    render() {
        
        return (
            <div>
                <ExpenseListItem />
                <ExpenseListItem />
                <ExpenseListItem />
            </div>);
    }
}



const mapStateToProps = (state) => ({
   
})

const mapDispatchToProps = (dispatch) => {
    return {
        getTransaction : dispatch.exp.getTransaction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList)