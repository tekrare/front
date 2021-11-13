import React from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import Button from '../../components/Button';
import Header from '../../components/Header';

import './index.css';

interface Props {
  isLoggedIn: boolean;
}

export default function Home(props: Props) {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div>
      <Header isLoggedIn={props.isLoggedIn} />
      <div className="home-content">
        <div className="home-content-title">
          <p>Take part in the first Epitech's <span className="home-content-nft">NFT</span> Platform</p>
          <Button onClick={() => navigate('/login')} className="home-content-button" title="Try it" />
        </div>
        <div className="home-content-svg">
          <div className="home-content-circular-shadow-1" />
          <div className="home-content-circular-shadow-2" />
          <ReactSVG src={process.env.PUBLIC_URL + '/assets/finance.svg'} />
        </div>
      </div>
      <div className="home-page-cards-container">
        <p className="home-page-cards-title">Earn precious cards</p>
        <p className="home-page-cards-description">Choose from 3 rarity</p>
        <div className="home-page-cards">
          <div className="home-page-card-container">
            <img src={process.env.PUBLIC_URL + '/assets/showcase-rare-card.png'} className="home-page-card" alt="" />
            <div className="home-page-card-text">
              <div className="home-page-card-text-title">
                <p>Rare</p>
                <div className="home-page-card-text-title-underline home-page-card-text-title-rare-underline" />
              </div>
              <p className="home-page-card-text-description">10 per collection</p>
            </div>
          </div>
          <div className="home-page-card-container">
            <img src={process.env.PUBLIC_URL + '/assets/showcase-super-rare-card.png'} className="home-page-card" alt="" />
            <div className="home-page-card-text">
              <div className="home-page-card-text-title">
                <p>Super Rare</p>
                <div className="home-page-card-text-title-underline home-page-card-text-title-super-rare-underline" />
              </div>
              <p className="home-page-card-text-description">3 per collection</p>
            </div>
          </div>
          <div className="home-page-card-container">
            <img src={process.env.PUBLIC_URL + '/assets/showcase-unique-card.png'} className="home-page-card" alt="" />
            <div className="home-page-card-text">
              <div className="home-page-card-text-title">
                <p>Unique</p>
                <div className="home-page-card-text-title-underline home-page-card-text-title-unique-underline" />
              </div>
              <p className="home-page-card-text-description">1 per collection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
