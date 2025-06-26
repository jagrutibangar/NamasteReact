import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import store from './utils/store';
import { createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import  VideoContainer from './components/Videocontainer';
import { RouterProvider } from 'react-router';
import Header from './components/Header'


const appRouter = createBrowserRouter([{
  path:'/',
  element:(
    <>
    <Header/>
    <Body/>
    
    </>

  ),
  children:[
    {
      path:'/watch',
      element:<WatchPage/>,
    },
    {
      path:'/',
      element:<VideoContainer/>,
    },
  ],
}])

function App() {
  return (
    
    <Provider store={store}>
      <RouterProvider router={appRouter}/>
    </Provider>
    
  );
}

export default App;