import React from 'react'

export const CollectionItem = ({id, name, price, imageURL }) => {
  return (
    <div className='collection-item'>
      <div className="image" style={{ backgroundImage: imageURL}}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  )
}
