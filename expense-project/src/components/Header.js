import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import '../css/header.css'
class Header extends Component {
  state = {

  }

  componentDidMount() {
    this.props.loadUser()

  }

  handleLogout = () => {
    const { logout , loadUser  } = this.props
    logout()
    loadUser()
    this.props.history.push('/')
  }

  render() {
    let isLogin = false;
    let username = ''

    if (this.props.user.username) {
      console.log(this.props.user)
      isLogin = true;
      username = this.props.user.username
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
                  <Link to="/expense"><li style={{ 'color': '#007BFF' }}>{username}</li></Link>
                  )}
              </li>
              <li style={{ cursor: 'pointer' }}>
                {!isLogin ? (
                  <Link to="/signup">Sign Up</Link>
                ) : (
                    <li onClick={this.handleLogout}> Log out </li>
                  )}
              </li>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => {
  return {
    logout: dispatch.user.logout,
    loadUser: dispatch.user.loadUser
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header))
