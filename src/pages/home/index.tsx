import React from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import Button from '../../components/Button';
import HomePageCard from './HomePageCard';

import './index.css';

export default function Home() {
  const navigate: NavigateFunction = useNavigate();
  return (
    <>
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
          <HomePageCard title="Rare" description="10 per collection" rarity="rare" />
          <HomePageCard title="Super Rare" description="3 per collection" rarity="super-rare" />
          <HomePageCard title="Unique" description="1 per collection" rarity="unique" />
        </div>
      </div>
    </>
  );
}
