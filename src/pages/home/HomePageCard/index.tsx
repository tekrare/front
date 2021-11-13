import React, { Component } from 'react';

import './index.css';

interface Props {
  rarity: 'rare' | 'super-rare' | 'unique';
  title: string;
  description: string;
}

export default class HomePageCard extends Component<Props> {
  render() {
    return (
      <div className="home-page-card-container">
        <img src={process.env.PUBLIC_URL + `/assets/showcase-${this.props.rarity}-card.png`} className="home-page-card" alt="" />
        <div className="home-page-card-text">
          <div className="home-page-card-text-title">
            <p>{this.props.title}</p>
            <div className={`home-page-card-text-title-underline home-page-card-text-title-${this.props.rarity}-underline`} />
          </div>
          <p className="home-page-card-text-description">{this.props.description}</p>
        </div>
      </div>
    );
  }
}
