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
        <ReactSVG className="home-content-svg" src={process.env.PUBLIC_URL + '/assets/finance.svg'} />
      </div>
    </div>
  );
}
