import React from 'react';

import Hero from '../components/hero';
import HomeContent from '../components/homeContent';

function HomePage(props) {
  return (
    <React.Fragment>
      <Hero title={props.title} subTitle={props.subTitle} />
      <HomeContent />{' '}
    </React.Fragment>
  );
}

export default HomePage;
