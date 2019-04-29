import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import EventDetails from './components/event/EventDetails';
import SignIn from './components/auth/SignIn';
import SignUpPlayer from './components/auth/SignUpPlayer';
import CreateEvent from './components/event/CreateEvent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/event/:id" component={EventDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUpPlayer} />
            <Route path="/create" component={CreateEvent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
