
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import Expensepage from './pages/Expensepage';
import React, { Component } from 'react';

class App extends Component {
  state = {}
  renderRouter() {
    return ( 
      <Router>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Loginpage} />
          <Route path="/signup" component={Signuppage} />
          <Route path="/expense" component={Expensepage} />
        </div>
      </Router>
    )
  }

  render() {
    return (
      <Router>{this.renderRouter()}</Router>
    );
  }
}

export default App;

