import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;
