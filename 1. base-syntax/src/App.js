import React, { Component } from 'react';
import './App.css';
import UserOutput from './components/UI/UserOutput/UserOutput';
import UserInput from './components/UI/UserInput/UserInput';

class App extends Component {
  state = {
    userName : "Gregor"
  }

  updateUserNameHandler = (event) => {
    this.setState({ userName: event.target.value });
}

  render() {
    return (
      <div className="App">
        <UserInput 
          changed={this.updateUserNameHandler}
          value={this.state.userName} />
        <UserOutput 
          userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
