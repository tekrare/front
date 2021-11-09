import React, { Component } from 'react';

import './index.css';

interface Props {
  title: string;
  className?: string;
  onClick?: () => void;
}

export default class Button extends Component<Props> {
  render() {
    return (
      <button onClick={this.props.onClick} className={`button ${this.props.className}`}>
        {this.props.title}
      </button>
    )
  }
}
