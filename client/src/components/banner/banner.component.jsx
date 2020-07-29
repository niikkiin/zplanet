import React from 'react'

// banner
import banner from 'assets/banner.jpg';

export const Banner = () => {
  return (
    <div className='banner-container'>
      <img className='banner-img' src={banner} alt="Banner" />
    </div>
  )
}
