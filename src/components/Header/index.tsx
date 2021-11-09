import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

interface Props {
  isLoggedIn: boolean;
}

export default class Header extends Component<Props> {
  render() {
    return (
      <div className="header">
        <Link to="/"><span className="header-logo">TekRare</span></Link>
        <div className="header-menu">
          <Link to="/"><span className="header-menu-item">Home</span></Link>
          {!this.props.isLoggedIn ? (
            <>
              <div className="header-menu-vertical-bar header-menu-item"/>
              <Link to="/register"><span className="header-menu-item">Register</span></Link>
              <Link to="/login"><span className="header-menu-item">Login</span></Link>
            </>
          ) : null}
        </div>
      </div>
    )
  }
}
