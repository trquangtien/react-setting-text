import React, { Component } from 'react';

export default class Result extends Component {
  setColor() {
    return {
      color: this.props.color,
      fontSize: this.props.fontSize
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>
            Color: <label>{this.props.color}</label> - Font size: {this.props.fontSize}px
          </h3>
          <div id="content" style={this.setColor()}>
            Text Content
          </div>
        </div>
      </div>
    );
  }
}
