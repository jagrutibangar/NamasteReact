import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({menucategory}) => {
    //console.log(menucategory);

    const categoryTitle = menucategory.title ;


    const [showItems, setshowItems] = useState(false); 

    const showMenu = () => {
        setshowItems(!showItems);
    }
    return (
        <>
        <div className="border-t-15 border-gray-200 w-200 h-fit mx-auto my-2 p-4 mt-5">
        <div className="justify-between flex">
        <span className="font-bold size-20 w-auto cursor-pointer h-5" onClick={showMenu}>{categoryTitle} ({menucategory?.itemCards?.length})</span>
        <span className="font-extrabold cursor-pointer" onClick={showMenu}>\/</span>
        </div>

        {/* Accordion body */}
        <div className="flex flex-wrap items-justify items-center ">
        {showItems && <ItemList items={menucategory.itemCards}/>}
        </div>
        </div>
        
        </>
    );
};



export default RestaurantCategories;