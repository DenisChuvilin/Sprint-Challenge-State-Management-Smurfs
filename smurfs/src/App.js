import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm"
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <h3>Add a Smurf to the village!</h3>
        <SmurfForm /> 
      </div>
    );
  }
}

export default App;
