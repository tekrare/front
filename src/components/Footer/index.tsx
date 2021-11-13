import React, { Component } from 'react';

import './index.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="footer-name">TekRare © 2021</p>
        <div className="footer-description">
          <p>Made with <span role="img" aria-label="emoji-heart">❤️</span></p>
          <p>by Lucas SANCHEZ</p>
        </div>
      </div>
    );
  }
}
