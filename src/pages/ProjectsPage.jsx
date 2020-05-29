import React from 'react';

import Hero from '../components/hero';
import Carousel from '../components/carousel';

function ProjectsPage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      <Carousel />
    </div>
  );
}

export default ProjectsPage;
