
import { useEffect, useState } from "react";
import { MenuApi } from "./constants";
const useResMenu = (resId) => {
    
    //state variable to store the menu data
    const [menuData, setMenuData] = useState(null); 
    
    //fetch the menu data from the API
    useEffect(() => {
        getMenuData();
    }, []);

    const getMenuData = async () =>{
        const menudata = await fetch(MenuApi + resId);
        const json = await menudata.json();
        setMenuData(json);

    };
    return menuData;
}


export default useResMenu;