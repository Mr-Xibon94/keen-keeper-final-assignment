import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layouts from './Component/Layouts/Layouts'
import Dashboard from './Component/Dashboard/Dashboard'
import ErrorHandling from './Component/Pages/ErrorHandling/ErrorHandling'
import TimelinePage from './Component/Pages/Timeline/TimelinePage'
import StatsChart from './Component/Pages/Stats/StatsChart'


const router = createBrowserRouter([
  {
    path:'/',
    Component: Layouts,
    children:[
      {
        index:true,
        Component: Dashboard,
        loader: async() => {
          const res = await fetch('/FriendData.json');
          return res.json();
        },
      },
      {
        path:'/timeline',
        Component: TimelinePage,
      },
      {
        path:'/stats',
        Component: StatsChart
      }
    ],
    errorElement:<ErrorHandling/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>,
  </StrictMode>,
)
