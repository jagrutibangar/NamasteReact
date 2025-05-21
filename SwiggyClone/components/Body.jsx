import React, { useEffect } from 'react'
import Card, {withOpenLabel} from './Card.jsx' //default exports
import { useState } from 'react'
//named imports
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer.jsx' //default exports
import useOnlineStatus from '../utils/useOnlineStatus.jsx'

 

const Body = ()=> {

  //State variable: Super powerful react variable
  //We have converted the normal variable to state variable
   
const [resList, setresList] = useState([]);

const PromotedCard = withOpenLabel(Card); // HOC (Higher Order Component) to add promoted label

useEffect(() => {
  fetchData();
}, []) 

const fetchData = async () => {

const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
const json = await data.json();


//console.log(json?.data?.cards)

setresList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
};

const status = useOnlineStatus();
//console.log(status); // Check the online status

if(status === false)
  return (
  <h1>Looks like you are offline. Please check your internet connection.</h1>
);

else{
if(resList.length === 0){
  return <Shimmer/>;
} // Check if resList is empty before rendering the component
else{
  return( 
  <>
  <div className="flex-wrap p-5 bg-gray-50 mt-4">
  <div className='p-10 m-2'>
  <button className='bg-orange-400 h-10 rounded-2xl p-2 cursor-pointer border-1 ml-50 mb-5 font-medium hover:bg-orange-600' 
    onClick={()=> {
    const filterList = resList.filter((resto) => resto.info.avgRating > 4.5)
    setresList(filterList)
    }
    }>Top Rated Restaurants</button>
    </div>
    <div className='flex p-1 -mt-26 border-1 w-100 h-10 rounded-2xl ml-130'>
      <input id="search-box"type="text" placeholder='Search' className='p-2 border-1 rounded-2xl w-fit'/>
      <button className='bg-orange-400 w-17 h-9 rounded-xl cursor-pointer border-1 ml-52 p-2 text-justify -mt-1'>Search</button>
    </div>
  
  <div className="flex flex-wrap justify-center items-center p-3"> 
  {resList.map((resto, index) => (
    <Link key={resto.info.id} to={"/restaurants/" + resto.info.id}>
    
    {resList?.info?.availability?.opened ? (<PromotedCard key={`${resto.info.id}-${index}`} resData={resto}/>) :

    (<Card key={`${resto.info.id}-${index}`} resData={resto}/>)
}
    </Link>
    ))
    }
</div>
</div>
</>
    )
  } 
}
};

export default Body;
