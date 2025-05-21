import React from 'react'
import User from './User';
import UserClass from './UserClass';

const About = () => {
    return(
        <>
        <div className='bg-gray-50 h-full p-4 mt-4'>
            <h1 className='font-bold mt-15 ml-40 text-4xl'>About Us</h1>
            <h2 className='font-bold mt-10 ml-40 text-2xl'>This is a Swiggy Clone</h2>
{/* //Passing props to the User component */}

            <User/>
            <br></br>
            <UserClass name={"Sakshi Bangar"} location={"Pune"}/> 
            {/* //Child component */}
        </div>
        </>
    );
};

export default About;