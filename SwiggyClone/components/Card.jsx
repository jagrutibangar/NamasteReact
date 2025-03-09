import './Card.css'

const Card = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    sla: { deliveryTime },
  } = resData.info;

  return (
    <>
      <div className="res-card">
        <img id="res-image" src="https://blog.themalamarket.com/wp-content/uploads/2024/06/Vegetarian-pulled-noodles-lead-more-sat.jpg" alt="" />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h5>{avgRating} Stars</h5>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </>
  )
}

export default Card;
