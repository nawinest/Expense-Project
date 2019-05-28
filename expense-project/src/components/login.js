import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import '../css/logup.css'
import Background from '../img/businessman-character-meditating_1012-332.jpg'

class login extends Component {
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

  handleLogin = async () => {
    const { login } = this.props
    console.log('sss')
    try {
      // await login(this.state)
      await login(this.state)
      console.log('login success')
      if (this.props.user.user_id) {
        this.props.history.push('/expense')
      }
    } catch (e) {
      console.log('login fail')
    }
  }

  render() {
    return (
      <div className="app-login">
        <div className="login-container light-2">
          <div className="login-left column center-column">
            <div className="login-left-container column ">
              <div className="login-left-content center-self">
                <h2 className="head-margin">Welcome Back</h2>
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
                  value="Sign In"
                  onClick={this.handleLogin}
                />
              </div>
              <div className="login-left-content center-self">
                <hr />
              </div>
              <div className="login-left-content center-self">
                <p>
                  Dont't have account?
                  <Link to="/signup">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="login-right center-content" >
            <img className='image' alt='back' src={Background}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: dispatch.user.login,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(login))
