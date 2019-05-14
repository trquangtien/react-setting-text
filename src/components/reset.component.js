import React, { Component } from 'react';

export default class Reset extends Component {
  onClickReset() {
    this.props.resetToDefaultSetting();
  }

  render() {
    return (
      <button type="button" className="btn btn-primary" onClick={() => this.onClickReset()}>
        Reset
      </button>
    );
  }
}
