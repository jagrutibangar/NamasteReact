import React from 'react';

const Button = ({name}) => {

const buttonList = ["All", "Music", "News", "Workout", "Live", "Dance", "News", "War Breaking", "New Releases"]

  return (
    <div className='flex mt-5 mr-5 ml-10'>
    {buttonList.map((name, index) => (
      <button
        key={index}
        className='h-10 px-3 py-1 rounded-xl bg-gray-100 font-semibold mx-2 text-lg pb-3'>
        {name}
      </button>
    ))}
  </div>
  );
}

export default Button;
