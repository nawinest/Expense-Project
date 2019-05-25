import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '../css/logup.css'
import { connect } from 'react-redux'

class signup extends Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = (e, field) => {
    //react web but not compatible with react native
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSignup = async () => {
    const { signup } = this.props
    try {
      await signup(this.state)
      console.log('signup success')
      if(this.props.user.user_id){
        this.props.history.push('/expense')
      }
      // if (user.isShowExpense){
      //   this.props.history.push('/expense')
      // }
    } catch (e) {
      console.log('signup fail')
    }
  }

  componentWillUpdate(prevProps, prevState) {
    // console.log(prevProps.user)
    // if(prevProps.user !== this.props.user){
    //   this.props.history.push('/expense')
    // }
  }

  render() {
    return (
      <div className="app-login">
        <div className="login-container center-content ">
          <div className="signup-container column center-column">
            <div className="login-left-container column ">
              <div className="login-left-content center-self">
                <h2 className="head-margin">Sign Up</h2>
              </div>
              <div className="login-left-content">Username</div>
              <div className="login-left-content">
                <input
                  type="text"
                  name="username"
                  className="input-text"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="login-left-content">Password</div>
              <div className="login-left-content">
                <input
                  type="text"
                  name="password"
                  className="input-text"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="login-left-content">
                <input
                  type="button"
                  className="input-button"
                  value="Sign Up"
                  onClick={this.handleSignup}
                />
              </div>
              <div className="login-left-content center-self" />
              <div className="login-left-content center-self" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return state
  // return {
  //   user_id : state.user.user_id
  // }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: dispatch.user.signup,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(signup))
