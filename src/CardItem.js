import React from 'react'
import "./index"

const CardItem = props => {
    const {cardDetails} = props
    const {title, description, className, imgUrl} = cardDetails
  return (
    <li className={`${className} card-item`}>
      <h1 className="Courseheading">{title}</h1>
      <p className="description">{description}</p>
      <div className="img-container">
        <img className="image-style" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem