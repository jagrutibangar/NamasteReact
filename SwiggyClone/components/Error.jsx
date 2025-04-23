import React from 'react'
import {useRouteError} from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <>
    <div>
        <h1>
            Oops! Something went wrong!
            <p>{error.statusText || error.message}</p>
        </h1>
    </div>
    </>
  );
}

export default Error
