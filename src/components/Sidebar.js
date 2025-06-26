import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isSidebarOpen = useSelector(store => store.app.isSidebarOpen);

  if(!isSidebarOpen) return null;

  return (
    <div className='shadow-lg p-5 w-[12rem]'>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscritions</li>
        <li>You</li>
    </ul>
    
    </div>
  );

};


export default Sidebar;
