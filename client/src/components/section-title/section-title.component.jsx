import React from 'react'

export const Sectiontitle = ({title, subtitle}) => {
  return (
    <div className='section-title-container'>
    <div className="section-title">
      {title}
    </div>
    <div className="section-subtitle">
      {subtitle}
    </div>
    </div>
  )
}
