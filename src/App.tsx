import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="background-rectangle background-rectangle-1" />
        <div className="background-rectangle background-rectangle-2" />
        <div className="background-rectangle background-rectangle-3" />
        <div className="background-rectangle background-rectangle-4" />
        <div className="background-rectangle background-rectangle-5" />
        <div className="background-rectangle background-rectangle-6" />
        <Routes>
          <Route path="/" element={<Home isLoggedIn={false} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
