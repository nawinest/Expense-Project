
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import Expensepage from './pages/Expensepage';
import React, { Component } from 'react';
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

import store from './store';
import { Provider } from 'react-redux';



class App extends Component {
  state = {}
  
  componentDidMount(){
    store.dispatch.user.loadUser()
  }
  
  renderRouter() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Header />
            <div>
              <Route exact path="/" component={Homepage} />
              <Route path="/login" component={Loginpage} />
              <Route path="/signup" component={Signuppage} />
              <Route path="/expense" component={Expensepage} />
            </div>
          </Router>
        </Provider>
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

