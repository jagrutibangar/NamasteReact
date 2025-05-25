import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode, lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import About from './components/About.jsx'
import ContactUs from './components/ContactUs.jsx'
import Error from './components/Error.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'
import { Provider } from 'react-redux'
//import store from './store' // <-- import your Redux store here
import appStore from './utils/appStore.jsx'
import Cart from './components/Cart.jsx'
import ItemList from './components/ItemList.jsx'
// import Grocery from './components/Grocery.jsx'

// lazy loading
const Grocery = lazy(() => import('./components/Grocery.jsx'))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    errorElement: <Error />
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
      </>
    ),
  },
  {
    path: "/contactus",
    element: (
      <>
        <Header />
        <ContactUs />
      </>
    ),
  },
  {
    path: "/restaurants/:resId",
    element: (
      <>
        <Header />
        <RestaurantMenu />
      </>
    ),
  },
  {
    path: "/grocery",
    element: (
      <>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Grocery />
        </Suspense>
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
      <Header />
      <Cart/>
      </>
    ),
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
)

;