import React, { Component } from 'react';

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'green', 'blue', 'pink']
    };
  }

  showColor(color) {
    return {
      backgroundColor: color
    };
  }

  onSelectColor(color) {
    this.props.setColor(color, 'Text Param 2');
  }

  render() {
    let colorElms = this.state.colors.map((color, index) => {
      return (
        <span
          key={index}
          style={this.showColor(color)}
          className={this.props.color === color ? 'active' : ''}
          onClick={() => this.onSelectColor(color)}
        />
      );
    });

    return (
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">Color Picker</div>
          <div className="card-body">{colorElms}</div>
        </div>
      </div>
    );
  }
}
