import './Body.css' 
import Card from './Card.jsx' //default exports
import { useState } from 'react'
//named imports
import rList from '../utils/mockData.js'

 
const Body = ()=> {

  //State variable: Super powerful react variable
  //We have converted the normal variable to state variable
   
const [resList, setresList] = useState(rList);
 
    return(
         <>
        <div className="body">
            <div className='filter'>
                <button className='filter-button' onClick={()=> {
                  const filterList = resList.filter((resto) => resto.info.avgRating > 4.5)
                   setresList(filterList)
                }}>Top Rated Restaurants</button>
            </div>
            <input id="search-box"type="text" placeholder='Search'/>
            <div className="res-container">
                   {
                    resList.map((resto) => (<Card key={resto.info.id}resData = {resto}/>))
                   }
                </div>
            </div>
        </>
    ) 
}

export default Body;
