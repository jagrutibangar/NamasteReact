import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode, lazy, Suspense} from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import About from './components/About.jsx'
import ContactUs from './components/ContactUs.jsx'
import Error from './components/Error.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx';
//import Grocery from './components/Grocery.jsx'


//lazy loading
const Grocery = lazy(() => import('./components/Grocery.jsx'));

const appRouter = createBrowserRouter(
    [
      {
      path: "/",        //if on / landing page
      element: (
        <>
        <Header/>
        <Body/>
        </>  
      ),
      errorElement:
        <Error/>
    },
        {
          path: "/about",
          element: (
            <>
            <Header/>
            <About/>
            </>
          ),
        },
        {
            path: "/contactus",
            element:(
              <>
              <Header/>
              <ContactUs/>
              </>
            ),
      },
      {
        path: "/restaurants/:resId", //Dynamic Routing for restaurant id
        //Every restaurant has a unique id, so we can use that to fetch the data of that restaurant
        element:(
          <>
          <Header/>
          <RestaurantMenu/>
          </>
        )
},//Render App component

{
  path: "/grocery",
  element: (
    <>
    <Header/>
    <Grocery/>
   </>
  ),
}
]
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
  