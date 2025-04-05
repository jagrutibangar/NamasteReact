import React, { useEffect } from 'react'
import './Body.css' 
import Card from './Card.jsx' //default exports
import { useState } from 'react'
//named imports

import Shimmer from './Shimmer.jsx' //default exports

 
const Body = ()=> {

  //State variable: Super powerful react variable
  //We have converted the normal variable to state variable
   
const [resList, setresList] = useState([]);

useEffect(() => {
  fetchData();
}, []) 

const fetchData = async () => {
  const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
 console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // Check the structure of the API   response
setresList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
};
console.log(resList);

if(resList.length === 0){
  return <Shimmer/>;
} // Check if resList is empty before rendering the component
    else{
      return( 
         <>
        <div className="body">
            <div className='filter'>
                <button className='filter-button' onClick={()=> {
                  const filterList = resList.filter((resto) => resto.info.avgRating > 4.5)
                   setresList(filterList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className='search'>
            <input id="search-box"type="text" placeholder='Search'/>
            <button className='search-btn'>Search</button>
            </div>
    
            <div className="res-container">
                   {
                    resList.map((resto, index) => (<Card key={`${resto.info.id}-${index}`} resData={resto} />))
                  
                   }
                   
                  
                </div>
            </div>
        </>
    )
  } 
}


export default Body;
