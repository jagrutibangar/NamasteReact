import {  useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import './RestaurantMenu.css';
//import  { MenuUrl } from '../utils/constants';

const RestaurantMenu = () => {

    //state variable to store the menu data
    const [menuData, setMenuData] = useState(); 
    const {resId} = useParams(); // destructuring the resId from the params

    const fetchMenu = async () =>{
        const menudata = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.00240&lng=73.79450&restaurantId="+resId);

        const json = await menudata.json();
        setMenuData(json);
    };

    useEffect(() => {
        fetchMenu();
        }, []); 



    if ( menuData === null) return  <Shimmer/> ;
    
    const resname = menuData?.data?.cards?.[0]?.card?.card?.text;
    
    const menuItems = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel || [];
    // ?.carousel?.[0]?.dish?.info?.name;

    return(   
        <>
        <div className="menu">
        
        <h1 style={{marginLeft:70}}>{resname}</h1>
        <h2 style={{marginLeft:80}}>Top Picks</h2>
        <ul className='menu-list'>
        <div className='menu-list-container'>
        
        {menuItems.map((item) => (
        <li className='menuList' key={item?.dish?.info?.name.id}>{item?.dish?.info?.name || "Unnamed Dish"} - Rs.{item?.dish?.info?.price/100}
        </li>

            ))
          }
        </div>
        </ul>   
        </div>
        </>
    );
};

export default RestaurantMenu;