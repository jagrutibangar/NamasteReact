import useResMenu from "../utils/useResmenu";
import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {

    //state variable to store the menu data
    const {resId} = useParams(); // destructuring the resId from the params
    const resMenu = useResMenu(resId);
    //const itemImage = resMenu?.dish?.info?.imageId;

    
    //console.log(resMenu);
    if ( resMenu === null) return  <MenuShimmer/> ;
    
    const resname = resMenu?.data?.cards?.[0]?.card?.card?.text;
    
    const menuItems = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel || [];

    
    const categories = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    //console.log(categories);


    return(   
        <>
        <div className="flex flex-col bg-gray-50 h-full p-10 mt-4">
        
        <h1 className="mt-2 ml-70 font-bold text-3xl ">{resname}</h1>
        <h2 className="mt-5 ml-70 font-medium text-xl">Top Picks</h2>
        <ul className='border-2 border-gray-200 rounded-lg shadow-md mt-4 h-full ml-65 p-3 flex-wrap w-190 items-justify items-center'>
        <div className='flex flex-wrap gap-x-1 gap-y-5 items-justify items-center'>    
        
        {menuItems.map((item) => ( 
        <li className='border-1 w-80 h-60 rounded-lg p-3 ml-7 hover:shadow-2xl  pl-2 hover: font-bold' key={item?.dish?.info?.name.id}>{item?.dish?.info?.name || "Unnamed Dish"} - Rs. {item?.dish?.info?.price/100}
        <img className="h-40 w-70 rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item?.dish?.info?.imageId} alt="itemimage" />
        </li>
            ))
          }
        </div>
        </ul>  
    <div>
    {
    categories.map(category => (
    <RestaurantCategories key={category?.card?.card?.info?.title} menucategory = {category?.card?.card}/>))
    }
    </div> 
</div>
    
</>
);
};

export default RestaurantMenu;
