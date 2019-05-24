import React, { Component } from 'react';
import '../css/header.css'
class Header extends Component {
    state = {}
    render() {
        return (
            <div className="header-wrap  ">

                <div className="header container">
                    <div className="nav-brand">
                        Expense App
                    </div>
                    <div className="nav">
                        <div className="nav-list">
                            <li>Login</li>
                            <li>Sign Up</li>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Header;