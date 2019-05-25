import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import '../css/header.css'
class Header extends Component {
  state = {}

  handleLogout = () => {
    const { logout } = this.props
    logout()
    this.props.history.push('/')
  }

  render() {
    const { user } = this.props
    let isLogin = false
    if (user.user_id) {
      isLogin = true
    }
    return (
      <div className="header-wrap  ">
        <div className="header container">
          <div className="nav-brand">Expense App</div>
          <div className="nav">
            <div className="nav-list">
              <li style={{ cursor: 'pointer' }}>
                {!isLogin ? (
                  <Link to="/login">Login</Link>
                ) : (
                  <li style={{'color':'#007BFF'}} onClick={this.handleLogout}>LogOut</li>
                )}
              </li>
              <li style={{ cursor: 'pointer' }}>
                <Link to="/signup">Sign Up</Link>
              </li>
            </div>
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
    logout: dispatch.user.logout,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header))
