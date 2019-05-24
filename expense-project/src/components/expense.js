import React, { Component } from 'react'
import '../css/expense.css'
import '../css/logup.css'


class expense extends Component {

  state = {
    user    : '',
    amount  : '',
    type    : '',
    remark  : '',
    data    : '',
  }


  handleChange = (e, field) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

//<div className='s1f1'></div>
//{/* <div className='s1f1 row center-item'>
//                <p>Type : </p>
//
//            </div> */}
              // {/* <div className='s1f2 row center-item'>
              //   <p>Amount : </p>
              //   <input  type='text' name='amount'
              //         className='input-field ' 
              //         placeholder="amount"
              //         onChange={this.handleChange}/>
              // </div>
              // <div className='s1f3 row center-item'>
              //   <p>Remark : </p>
              //   <input  type='text' name='remark'
              //         className='input-field ' 
              //         placeholder="remark"
              //         onChange={this.handleChange}/>
              // </div>

              // <div className='s1f4 row align-item-between'>
              //   <input  type="button" 
              //     className='input-submitbutton'
              //     value='Save'
              //     onClick={this.handleLogin}/>
              // </div> */}


  render() {
    return (
      <div>
        <div className='exp-grid'>
            <div className='exp-section1
                            grid-section1
                            justify-item-center
                            row grow'>
              <div className='s1f1 align-item-center'>
                <table className='table '>
                  <tr>
                    <th>   name   </th>
                  </tr>
                  <tr>
                    <td>Type:</td>
                    <td> Income / Expense</td>
                  </tr>
                  <tr>
                    <td>Amount:</td>
                    <td><input  type='text' name='amount'
                          className='input-field ' 
                          placeholder="amount"
                          onChange={this.handleChange}/>
                    </td>
                  </tr>
                  <tr>
                    <td>Remark : </td>
                    <td><input  type='text' name='remark'
                          className='input-field ' 
                          placeholder="remark"
                          onChange={this.handleChange}/>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2'  >
                    <input  type="button" 
                        className='input-submitbutton'
                        value='Save'
                        onClick={this.handleLogin}/>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className='exp-section2 row grow'>
              <div className='column-side grid
                        center-item 
                        light-1'>
                        </div>
                <div className='column-side grid
                        center-item 
                        light-2'>
                        </div>
            </div>
            <div className='exp-section3 row grow'></div>
        </div>
      </div>
    )
  }
}





export default expense