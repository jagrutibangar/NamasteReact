const ItemList = ({items}) =>{
    //console.log(items);
    //console.log(items[1]?.card?.info?.name);
   
    //const itemImage = items?.card?.info?.imageId;
    return(
        <>
       <div className="flex flex-wrap justify-between items-justify items-center">
        {items.map(item => 
        (<div className="flex-col flex-wrap justify-between" key={item?.card?.info?.id}>
        <div>
        <span className="font-bold">{ item?.card?.info?.name}</span></div>
        <div className="font-bold">Rs. {item?.card?.info?.price/100}</div>


        <div className="flex flex-row items-between h-fit"> 
        <p className="font-light text-gray-500 font-serif w-120 pt-2">{item?.card?.info?.description} 
        </p>
        <img className="rounded-2xl h-50 w-50 mb-15" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item?.card?.info?.imageId} alt="itemimage"/>
        </div>
        <button className="border-1 border-black-500 rounded-xl h-fit p-2 w-23 font-bold text-green-500 shadow-xl cursor-pointer ml-135 ">ADD</button>
        </div>))}
       </div>
        </>
    );
};


export default ItemList;