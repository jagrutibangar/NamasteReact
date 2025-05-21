import React from 'react'
//import './Shimmer.css' //default exports

const Shimmer = () => {
  return(
    <> 
    <div className='mt-4 w-full p-5 bg-gray-50'>
    <div className='border-1 rounded-2xl h-10 w-50 ml-60 mt-10 bg-orange-50'></div>
    <div className='border-1 rounded-4xl h-10 w-100 bg-gray-100 ml-130 -mt-10'></div>
    <div className='border-1 rounded-2xl h-10 w-100 bg-gray-100 ml-130 -mt-10'></div>
    <div className='border-1 rounded-2xl h-10 w-20 bg-orange-100 ml-232 -mt-10'></div>
    
    <div className='flex flex-wrap mt-4 w-screen bg-gray-50 p-5 items-center ml-15'>
    <div className='border-1 h-90 w-70 mt-1 rounded-4xl space-x-1 m-2'></div>
    <div className='border-1 h-90 w-70 mt-1 rounded-4xl ml-2 bg-gray-100'></div>
    <div className='border-1 h-90 w-70 mt-1 rounded-4xl ml-2 bg-gray-100'></div>
    <div className='border-1 h-90 w-70 mt-1 rounded-4xl ml-2 bg-gray-100'></div>
    <div className='border-1 h-90 w-70 mt-1 rounded-4xl ml-2 bg-gray-100'></div>
    <div className='border-1 h-90 w-70 mt-1 rounded-4xl ml-2 bg-gray-100'></div>
    <div className='border-1 h-90 w-70 mt-1 rounded-4xl ml-2 bg-gray-100'></div>
    <div className='border-1 h-90 w-70 mt-1 rounded-4xl ml-2 bg-gray-100'></div>
    </div>

    </div>
    </>
  )
}
export default Shimmer;
