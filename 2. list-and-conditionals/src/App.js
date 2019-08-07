import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent/ValidationComponent'
import CharComponent from './components/CharComponent/CharComponent'

class App extends Component {
  state = {
    value: ""
  }

  inputChangeHandler = (event) => {
    this.setState({ value: event.target.value });
  }

  charClickedHandler = (index) => {
    var value = this.state.value;
    const part1 = value.substring(0, index);
    const part2 = value.substring(index + 1, value.length);
    value = part1 + part2;
    this.setState({ value: value });
  }

  render() {
    var charArray = [...this.state.value];

    return (
      <div className="App">
        <input onChange={this.inputChangeHandler} value={this.state.value} placeholder="Enter text here" />
        <p>{this.state.value}</p>
        <ValidationComponent textLength={this.state.value.length} />
        {charArray.map((char, index)=> ( 
          <CharComponent value={char}
          index={index}
          clicked={this.charClickedHandler} /> 
        ))}
      </div>
    );
  }
}

export default App;
