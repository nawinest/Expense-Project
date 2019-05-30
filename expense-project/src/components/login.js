import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Pulse from 'react-reveal/Pulse';

import '../css/logup.css'

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
      <Pulse>
        <div className="container login-wrapper">
          <div className="login-item login-panel">
            <div className="topic-login-panel">
              <h1>
                Hello ~
            </h1>
              <p style={{ textAlign: 'center' }}> Sign in to your account</p>
            </div>
            <div className="form-login-panel">
              <div className="username-f">

                <input
                  type="text"
                  name="username"
                  className="input-text"
                  placeholder="Username"
                  onChange={this.handleChange}
                />

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
                  value="Sign In"
                  onClick={this.handleLogin}
                /></div></div>
            <div className="signup-btn">
              Dont't have account?
             <Link to="/signup"> Sign Up</Link>
            </div>
          </div>
        </div>
      </Pulse>
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
