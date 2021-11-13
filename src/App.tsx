import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header isLoggedIn={false} />
        <div className="background-rectangle background-rectangle-1" />
        <div className="background-rectangle background-rectangle-2" />
        <div className="background-rectangle background-rectangle-3" />
        <div className="background-rectangle background-rectangle-4" />
        <div className="background-rectangle background-rectangle-5" />
        <div className="background-rectangle background-rectangle-6" />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
