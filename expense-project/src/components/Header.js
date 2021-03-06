import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import '../css/header.css'
class Header extends Component {
  state = {

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.setState({})
    }

  }

  componentDidMount() {
    this.props.loadUser()

  }

  handleLogout = () => {
    const { logout, loadUser } = this.props
    logout()
    loadUser()
    this.props.history.push('/')
  }

  render() {
    let isLogin = false;
    let username = ''

    if (this.props.user.username) {
      isLogin = true;
      username = this.props.user.username
    }

    return (
      <div className="header-wrap  ">
        <div className="header container">
          <Link to="/"><div className="nav-brand">Expense App</div></Link>
          <div className="nav">
            <div className="nav-list">
              <li style={{ cursor: 'pointer' }} >
                {!isLogin ? (
                  <Link to="/login"><div className="loginBtn">Sign in</div></Link>
                ) : (
                    <Link to="/expense"><div style={{ 'color': '#007BFF' }}>{username}</div></Link>
                  )}
              </li>
              <li style={{ cursor: 'pointer' }}>
                {!isLogin ? (
                  <Link to="/signup"><div className="signupBtn">Sign Up</div></Link>
                ) : (
                    <div onClick={this.handleLogout}> Log out </div>
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
