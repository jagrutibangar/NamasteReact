import React from 'react';

const Videocard = ({info}) => {


if (!info || !info.snippet || !info.statistics) return null;

const {snippet, statistics} = info;
const {channelTitle, title, thumbnails} = snippet;

  return (
    <div className='h-fit w-80 mt-7 ml-10 rounded-xl border-black border-1 cursor-pointer'>
    <img className='rounded-2xl pb-1' src={thumbnails.medium.url} alt="" />
    <h1 className='font-bold'>{title}</h1>
    <h2 className='text-gray-600'>{channelTitle}</h2>
    <ul>
        <li className='text-gray-600'>{statistics.viewCount / 1000}K Views</li>
    </ul>   
    </div>
  );
}

export default Videocard;
