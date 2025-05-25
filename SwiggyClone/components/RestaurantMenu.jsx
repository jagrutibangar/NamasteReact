import React, { useState } from "react";
import useResMenu from "../utils/useResmenu";
import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import RestaurantCategories from "./RestaurantCategories";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice.jsx";

const RestaurantMenu = () => {

    //state variable to store the menu data
    const {resId} = useParams(); // destructuring the resId from the params
    const resMenu = useResMenu(resId);
    //const itemImage = resMenu?.dish?.info?.imageId;

    const [showIndex, setShowIndex] = useState(null);

    const dispatch = useDispatch();



    //console.log(resMenu);
    if ( resMenu === null) return  <MenuShimmer/> ;
    const resname = resMenu?.data?.cards?.[0]?.card?.card?.text;
    
    const menuItems = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel || [];

    const categories = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //console.log(categories);


    const handleAddItem = (item) => {
        // Dispatch an action to add the item to the cart
        console.log("Item added to cart:", item);
        dispatch(addToCart(item));
    }


    return(   
        <>
        <div className="flex flex-col bg-gray-50 h-auto p-10 mt-4">
        
        <h1 className="mt-2 ml-70 font-bold text-3xl ">{resname}</h1>
        <h2 className="mt-5 ml-70 font-medium text-xl">Top Picks</h2>

        <ul className='border-2 border-gray-200 rounded-lg shadow-md mt-4 h-full ml-65 p-3 flex-wrap w-190 items-justify items-center'>

        <div className='flex flex-wrap gap-x-1 gap-y-5 items-justify items-center h-auto justify-between'>    
       
        {menuItems.map((item) => ( 
        <li className='border-1 w-80 h-auto rounded-lg p-3 ml-7 hover:shadow-2xl  pl-2 hover: font-bold flex-col ' key={item?.dish?.info?.name.id}>{item?.dish?.info?.name || "Unnamed Dish"} - Rs. {item?.dish?.info?.price/100}
        
        <button className="border-1 border-black-500 rounded-xl h-fit p-2 w-25 font-bold text-green-500 shadow-xl cursor-pointer absolute mt-44 bg-amber-50 hover:bg-gray-300 " onClick={ () =>
            // Dispatch an action to add the item to the cart
        handleAddItem(item)}>ADD</button>

        <img className="h-50 w-70 rounded-2xl p-4" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item?.dish?.info?.imageId}
         alt="itemimage" />
            
        </li>

            ))
          }
        </div>
        </ul>  
    <div>
    {
    categories.map((category, index) => (
    <RestaurantCategories 
        key={category?.card?.card?.info?.title}
        menucategory = {category?.card?.card}
        showItems={index == showIndex ? true : false}
        setShowIndex={() => setShowIndex(index)
    }
    /> 
    //The above component is a controlled component. It takes the props from the parent component and renders the data based on the props passed to it.
    ))
    }
    </div> 
</div>
    
</>
);
};

export default RestaurantMenu;
