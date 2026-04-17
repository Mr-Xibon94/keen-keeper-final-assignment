import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layouts from './Component/Layouts/Layouts'
import Dashboard from './Component/Dashboard/Dashboard'
import ErrorHandling from './Component/Pages/ErrorHandling/ErrorHandling'
import TimelinePage from './Component/Pages/Timeline/TimelinePage'
import StatsChart from './Component/Pages/Stats/StatsChart'
import FriendDetail from './Component/Dashboard/FriendDetail'
import AllHistoryContext from './Component/Context/AllHistoryContext'
import { ToastContainer } from 'react-toastify'



const router = createBrowserRouter([
  {
    path: '/',
    Component: Layouts,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: '/timeline',
        Component: TimelinePage,
      },
      {
        path: '/stats',
        Component: StatsChart
      },
      {
        path: '/friend/:id',
        Component: FriendDetail,
        loader: async ({ params }) => {
          // console.log('my paramsssss', params.id)
          const res = await fetch('/FriendData.json')
          const data = await res.json();
          const selectedCard = data.find((myCard) => myCard.id === parseInt(params.id))
          return selectedCard
        }
      },
    ],
    errorElement: <ErrorHandling />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllHistoryContext>

      <RouterProvider router={router} />,
      <ToastContainer />
    </AllHistoryContext>
  </StrictMode>,
)
