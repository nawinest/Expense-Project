import React, { Component } from 'react';
import banner from '../img/banner.png'
import '../css/main-page.css'

class Homepage extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="container section-main">
                    <div className="item-main">
                        <div>
                            <h1 className="topic-header">
                                Your money <span className="color-topic">, Our plan. </span>
                            </h1>
                            <p className="topic-description">
                                Managing finance shouldn't be
                                complicated and time-consuming,
                                so Expense is the simplest  finance
                                application to keep track of expense
                                and plan budgets ahead.
                            </p>
                            <button className="try_btn"> TRY FOR FREE</button>
                        </div>

                        <div className="img-banner">
                            <img src={banner} alt="" />
                        </div>

                    </div>
                    

                </div>
            </div>
        );
    }
}

export default Homepage;