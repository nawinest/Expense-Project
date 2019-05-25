import React, { Component } from 'react'
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
      [e.target.name]: e.target.value
    })
  }

  handleLogin = async () => {
    const {
      signup
    } = this.props;
    try {
      await signup(this.state)
      console.log('signup success')
    } catch (e) {
      console.log('signup fail')
    }
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
  return {
    signup: dispatch.user.signup
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (signup)