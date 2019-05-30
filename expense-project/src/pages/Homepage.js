import React, { Component } from 'react';
import banner from '../img/banner.png'
import '../css/main-page.css'
import Rotate from 'react-reveal/Rotate';
import Pulse from 'react-reveal/Pulse';

class Homepage extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="container section-main">
                    <div className="item-main">
                        <div>
                            <Rotate bottom right>
                                <h1 className="topic-header">
                                    Your money <span className="color-topic">, Our plan. </span>
                                </h1>
                            </Rotate>
                            <Rotate bottom right>
                                <p className="topic-description">
                                    Managing finance shouldn't be
                                    complicated and time-consuming,
                                    so Expense is the simplest  finance
                                    application to keep track of expense
                                    and plan budgets ahead.
                            </p>
                            </Rotate>
                            <Rotate bottom right>
                                <button className="try_btn"> TRY FOR FREE</button>
                            </Rotate>
                        </div>

                        <div className="img-banner">
                            <Pulse>
                                <img src={banner} alt="" />
                            </Pulse>
                        </div>

                    </div>


                </div>
            </div>
        );
    }
}

export default Homepage;