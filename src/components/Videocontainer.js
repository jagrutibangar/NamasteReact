import React, { useEffect, useState } from 'react';
import { VIDEOS_API } from '../utils/constants';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';

const Videocontainer = ({info}) => {

  const [videos, setVideos] = useState([]);

  useEffect( () => {
    getVideos();
  }, []
  );

  const getVideos = async () =>{
  const data = await fetch(VIDEOS_API);
  const json = await data.json();
  setVideos(json.items);
  };


  return (
    <div className='flex flex-wrap'>
    {videos.map(
      (video => <Link to={"/watch?v=" + video.id} >
      <Videocard key={video.id} info={video}/></Link>
       ))}
    </div>
  );
}

export default Videocontainer;
