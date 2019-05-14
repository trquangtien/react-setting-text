import React, { Component } from 'react';

export default class SizeSetting extends Component {
  onClickSetFontSize(value) {
    let currentFontSize = this.props.fontSize;
    this.props.setFontSize(currentFontSize + value);
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">Size: {this.props.fontSize}px</div>
          <div className="card-body">
            <button type="button" className="btn btn-primary" onClick={() => this.onClickSetFontSize(-5)}>
              Decrease
            </button>
            &nbsp;
            <button type="button" className="btn btn-success" onClick={() => this.onClickSetFontSize(5)}>
              Increase
            </button>
          </div>
        </div>
      </div>
    );
  }
}
