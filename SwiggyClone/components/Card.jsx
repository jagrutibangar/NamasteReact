import React from 'react'
import './Card.css'

const Card = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    sla: { deliveryTime },
  } = resData.info;

  return (
    <>
      <div className="res-card">
        <img id="res-image" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}alt="" />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h5>{avgRating} Stars</h5>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </>
  )
}

export default Card;
