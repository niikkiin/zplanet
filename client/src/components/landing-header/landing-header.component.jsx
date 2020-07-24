import React from 'react'

import { Carousel } from 'antd';

import 'components/landing-header/landing-header.styles.css';

// images
import banner from 'assets/banner.jpg';

export const LandingHeader = () => {
  return (
    <Carousel autoplay={false}>
    <div className="banner">
      <img src={banner} alt="banner" />
    </div>
    <div>
      <h3>2</h3>
    </div>
  </Carousel>
  )
}
