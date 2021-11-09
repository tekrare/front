import React from 'react';
import Header from '../../components/Header';

interface Props {
  isLoggedIn: boolean;
}

export default function Home(props: Props) {
  return (
    <div>
      <Header isLoggedIn={props.isLoggedIn} />
    </div>
  );
}
