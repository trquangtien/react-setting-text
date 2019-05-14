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

  onSetFontSize = (param) => {
    const selectedFontSize = param;
    // fontSize is only from 5 to 45
    this.setState({
      fontSize: selectedFontSize >= 5 && selectedFontSize <= 45 ? selectedFontSize : this.state.fontSize
    });
  };

  onClickReset = () => {
    this.setState({
      color: 'red',
      fontSize: 15
    });
  };

  render() {
    return (
      <div className="container">
        <h1>React Setting Text</h1>
        <div className="row">
          <ColorPicker color={this.state.color} setColor={this.onSetColor} />
          <SizeSetting fontSize={this.state.fontSize} setFontSize={this.onSetFontSize} />
        </div>

        <br />
        <Reset resetToDefaultSetting={this.onClickReset} />
        <br />

        <Result color={this.state.color} fontSize={this.state.fontSize} />
      </div>
    );
  }
}

export default App;
