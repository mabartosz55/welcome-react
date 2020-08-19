import React from 'react';
import { Route, Switch } from "react-router-dom"
import Navigation from "./components/navigation/Navigation"

import './App.css';
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/welcome/clock/Clock";
import Contact from "./components/contact/Contact";
import NoMatch from "./components/404 page/NoMatch"
import TestFetch from "./components/testfetch/TestFetch"


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/welcome/:name"
          render={(props) => <Welcome name={props.match.params.name}
          />}
        />
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Michael" />}
        />
        <Route path="/testFetch" component={TestFetch} />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={NoMatch} />

      </Switch>

    </div >
  );
}

export default App;
