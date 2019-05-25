import React, { Component } from 'react';
import { withRouter,Link } from 'react-router-dom'
import '../css/header.css'
class Header extends Component {
    state = {}

    // onClick={() => this.props.history.push('/login')}>
    // Login
    // onClick={() => this.props.history.push('/signup')}>
    // Sign Up
    //<Link to="/login" >Login</Link>
    //<Link to="/signup" >Sign Up</Link>
    render() {

        return (
            <div className="header-wrap  ">

                <div className="header container">
                    <div className="nav-brand">
                        Expense App
                    </div>
                    <div className="nav">
                        <div className="nav-list">
                            <li style={{'cursor':'pointer'}}>
                                <Link to="/login" >Login</Link>
                            </li>
                            <li style={{'cursor':'pointer'}}>
                                <Link to="/signup" >Sign Up</Link>
                            </li>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(Header);