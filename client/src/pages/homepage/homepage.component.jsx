import React from 'react'

// components
import Header from 'components/header/header.component'
import { Banner } from 'components/banner/banner.component'
import { SectionOne } from 'components/sections/section-one.component'
// import { SectionTwo } from 'components/sections/section-two.component'
import { SectionThree } from 'components/sections/section-three.component'
import { Footer } from 'components/footer/footer.component'
// import { About } from 'components/sections/about.component'


const HomePage = () => {
  return (
    <div className='homepage'>
      <Header />
      <Banner />
      <SectionOne />
      {/* <SectionTwo /> */}
      <SectionThree />
      {/* <About /> */}
      <Footer />
    </div>  
  )
}

export default HomePage;
