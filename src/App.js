import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/color-picker.component';
import SizeSetting from './components/size-setting.component';
import Result from './components/result.component';
import Reset from './components/reset.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 15
    };
  }

  onSetColor = (param1, param2) => {
    console.log(`onSetColor param1: ` + param1 + ', param2: ' + param2);

    const selectedColor = param1;
    this.setState({
      color: selectedColor
    });
  };

  render() {
    return (
      <div className="container">
        <h1>React Setting Text</h1>
        <div className="row">
          <ColorPicker color={this.state.color} setColor={this.onSetColor} />
          <SizeSetting />
        </div>

        <br />
        <Reset />
        <br />

        <Result color={this.state.color} />
      </div>
    );
  }
}

export default App;
