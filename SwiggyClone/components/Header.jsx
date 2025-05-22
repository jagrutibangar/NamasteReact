import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus.jsx';
import UserContext from '../utils/UserContext.jsx';

const Header= () =>{

    const [btnnameReact, setbtnnameReact] = useState("Login");
    const onstatus = useOnlineStatus();

    //If there is no Dependency array passed, Use effect is called everytime the component renders.
    //If an Empty dependancy array is passed then, UseEffect is Called only once at Initialrender.
    //If there is any variable passed in the array then, Useeffect is called whenever that variable changes

    useEffect(() => {}, [btnnameReact]);

    const {user} = useContext(UserContext);

    return(
        <>
        <div className="flex justify-between items-center item h-20 p-7 bg-gray sm:bg-white">

        <div className="p-5 sm:p-1">
            <img id="logo" src="https://cdn.iconscout.com/icon/free/png-256/free-swiggy-logo-icon-download-in-svg-png-gif-file-formats--food-delivery-package-pack-logos-icons-1369418.png?f=webp&w=256" alt="logo" className="w-25 sm:20 p-1 ml-15 mt-5" />
        </div>

        <div className="flex p-9 items-center">
        <ul className='flex justify-between items-center p-4 '>
        <li className='p-4 '>{onstatus ? "✅" : "❌"}</li>
        <li className='p-4 font-serif'><Link to="/">Home</Link></li>
        <li className='p-4 font-serif'><Link to="/grocery">Grocery</Link></li>
        <li className='p-4 font-serif'><Link to="/about">About Us</Link></li>
        <li className='p-4 font-serif'> <Link to="/contactus">Contact Us</Link></li>
        <li className='p-4 font-serif'><Link to="/cart">Cart</Link></li>
        <button className='bg-orange-400 rounded-3xl mt-4 cursor-pointer font-serif border-1 p-2 m-2' onClick={() => btnnameReact == "Login" ? setbtnnameReact("Logout") : setbtnnameReact("Login")}>{btnnameReact}
        </button>
        </ul>
        <div className='size-0.5'>{user}</div>

        </div>
        </div>
        </>
    )
}

export default Header;
