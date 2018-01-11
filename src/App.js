import React, { Component } from 'react';
import { Button } from "./components/Button";
import { BigButton } from "./components/BigButton";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Button/>
        <BigButton/>
      </React.Fragment>
    );
  }
}

export default App;
