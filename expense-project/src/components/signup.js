import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '../css/logup.css'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

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
      this.setState({isRedirect:true})
    } catch (e) {
      console.log('signup fail')
    }
  }

  render() {
    if(this.state.isRedirect){
      return <Redirect to='/expense' />
    }
    return (
      <div className="container login-wrapper">
        <div className="login-item login-panel">
          <div className="topic-login-panel">
            <h1>
              Sign up
            </h1>
            <p style={{textAlign:'center'}}> Create your account</p>
          </div>
          <div className="form-login-panel">
            <div className="username-f">
              <input
                type="text"
                name="username"
                className="input-text"
                placeholder="Username"
                onChange={this.handleChange} />
            </div>
            <div className="password-f">
              <input
                type="text"
                name="password"
                className="input-text"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <div className="submit-btn-login">
              <input
                type="button"
                className="input-submit-login"
                value="Sign Up"
                onClick={this.handleSignup}
              /></div></div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return state
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
