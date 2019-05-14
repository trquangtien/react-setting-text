import React, { Component } from 'react';

export default class SizeSetting extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">Size: 15px</div>
          <div className="card-body">
            <button type="button" className="btn btn-primary">
              Decrease
            </button>
            &nbsp;
            <button type="button" className="btn btn-success">
              Increase
            </button>
          </div>
        </div>
      </div>
    );
  }
}
