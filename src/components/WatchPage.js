import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v"); 

  useEffect(() =>{
    dispatch(closeMenu());
  }, [dispatch])


  return (
    <>
    <div className='flex flex-col w-full'>
      <div className='ml-20 mt-5 p-4'>
      <iframe width="900" height="480" 
      src={"https://www.youtube.com/embed/"+ videoId} 
      title="Storytime : Traumatised by traitors" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

      <div className='flex flex-col w-full'>
        <CommentsContainer/>
      </div>

    </div>
    </>
  );
}

export default WatchPage;
