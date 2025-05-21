import React from 'react'

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
      <div className="w-70 h-115 sm:w-70 rounded-4xl mt-10 m-2 bg-white shadow-lg hover:bg-gray-200 xl transition-shadow duration-300 ease-in-out ">
        <img className="w-full h-70 rounded-4xl " src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
        <h3 className='p-1 font-semibold'>{name}</h3>
        <h4 className='p-1'>{cuisines.join(', ')}</h4>
        <h5 className='p-1'>{avgRating} Stars</h5>
        <h4 className='p-1'>{deliveryTime} minutes</h4>
      </div>
    </>
  )
};

export { Card };

// Higher Order Component (HOC) to add a "Open" label
export const withOpenLabel = (Card) => {
  return (props) => {
    return(
      <>
      <div>
      <label className='bg-black absolute text-white rounded-lg border-amber-500 font-sans'> Open </label>
      <Card {...props}></Card>
      </div>
      </>
    );
  }
}

const PromotedCard = withOpenLabel(Card);

export default PromotedCard;
