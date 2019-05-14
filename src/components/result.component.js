import React, { Component } from 'react';

export default class Result extends Component {
  setColor() {
    return {
      color: this.props.color
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>
            Color: <label style={this.setColor()}>{this.props.color}</label> - Font size: 15px
          </h3>
          <div id="content" style={this.setColor()}>
            Text Content
          </div>
        </div>
      </div>
    );
  }
}
