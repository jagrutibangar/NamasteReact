import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar} from '../utils/appSlice';
import { SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';


const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  

  
  useEffect(()=>{
    const timer = setTimeout(() => {

    if(searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery]);
    }
    else{
      getSearchSugesstions();
    }
    },200);

    return () =>{
      setTimeout(timer);
    }
  }, [searchQuery]);


const getSearchSugesstions = async () => {

  const raw = await fetch(SEARCH_API + searchQuery);
  const str = await raw.text();
  const match = str.match(/window\.google\.ac\.h\((.*)\)/);

  if (!match || !match[1]) {
    setSuggestions([]); // Clear suggestions if no match
    return;
  }
  let suggestionData = JSON.parse(match[1]);
  const suggestionList = suggestionData[1].map(item => item[0]);
  setSuggestions(suggestionList);

  //update cache
  dispatch(cacheResults({
    [searchQuery] : suggestionList,  
  }
  ));
  };


  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };


  return (
    <div className='flex flex-row h-26'>
        
    {/* Logo and Icon div  */}
      <div className='flex flex-row'>
        <img 
        onClick={() => toggleSidebarHandler()}
        src="https://cdn-icons-png.flaticon.com/128/2516/2516745.png" 
        className='p-4 h-14 w-15 mt-4 bg-white cursor-pointer rounded-3xl hover:bg-gray-100' 
        alt="menu"
         />
        <a href="/">
        <img src="https://imgs.search.brave.com/0jMEbl-2WeSaQHRXZ2T0rRRxpr6bYa9d5QILr3u6B8M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA1/L1lvdXR1YmUtTG9n/by01MDB4MjgxLnBu/Zw" className='h-20 mt-2' alt="logo" />
        </a>
      </div>

    {/* Search box and Search Icon  */}
    <div className=' ml-28 mt-5 flex flex-row'>
      <input type="text" 
      className='border-2 border-gray-300 rounded-s-full h-12 w-[32rem] p-4 text-xl px-6'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onFocus={() => setShowSuggestions(true)}
      onBlur={() => setShowSuggestions(false)}
      onScroll={() => setShowSuggestions(false)}
      placeholder='Search'/>

      <div className='border-gray-300 border-r-2 border-t-2 border-b-2 h-12 w-20 rounded-e-full cursor-pointer  bg-gray-50 hover:bg-gray-200'>
      <img className='h-8 ml-7 mt-2' src="https://cdn-icons-png.flaticon.com/128/2811/2811806.png" alt="" />
      </div>

      <img className='h-8 ml-4 mt-2 border-black border-1'  src="https://cdn-icons-png.flaticon.com/128/7175/7175253.png" alt="" />
    </div>


    {/** Search Suggestions display */}

    { showSuggestions && (<div className='fixed ml-80 mt-20 bg-white py-2 px-4 w-[37rem] shadow-lg rounded-xl border-gray-300'>
      <ul>
        {suggestions.map((suggestion, i) => ( 
          <li key={i} className='px-1 py-2 font-semibold hover:bg-gray-100'>{suggestion}</li>))}
      </ul>
    </div>)}

    {/* Search box and Search Icon  */}
    <div className='flex flex-row'>
        <div className='h-14 w-18 ml-[4rem] mt-3 cursor-pointer rounded-full bg-white hover:bg-gray-100 p-2'>
        <img  className="w-12 h-15 pb-3" src="https://cdn-icons-png.flaticon.com/128/2326/2326010.png" alt="Notifications" /></div>
      
        <div className='h-12 rounded-full w-12 ml-[8rem] mt-3 cursor-pointer  bg-white hover:bg-gray-100'>
            <img className='h-12 mt-3' src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" alt="" />
        </div>
    </div>

    </div>
  );
}

export default Header;
