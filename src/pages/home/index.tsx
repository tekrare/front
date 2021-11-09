import React, { Component } from 'react';
import Header from '../../components/Header';

export default class Home extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={this.state.isLoggedIn} />
        <h1>Welcome on the Home Page</h1>
      </div>
    )
  }
}
