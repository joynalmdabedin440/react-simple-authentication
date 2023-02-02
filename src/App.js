/* eslint-disable no-undef */


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LoginBootstrap from './compunents/LoginBootstrap';
import RegisterReactBoostrap from './compunents/RegisterReactBoostrap';
import Main from './layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<RegisterReactBoostrap></RegisterReactBoostrap>
      },
      {
        path: '/register',
        element:<RegisterReactBoostrap></RegisterReactBoostrap>
      },
      {
        path: '/login',
        element:<LoginBootstrap></LoginBootstrap>
      },
    ]
  }
])



function App() {
  return (
    <div>

      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
