
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import Expensepage from './pages/Expensepage';
import React, { Component } from 'react';
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

class App extends Component {
  state = {}
  renderRouter() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={Loginpage} />
            <Route path="/signup" component={Signuppage} />
            <Route path="/expense" component={Expensepage} />
          </div>
        </Router>
      </div>

    )
  }

  render() {
    return (
      <Router>{this.renderRouter()}</Router>
    );
  }
}

export default App;

