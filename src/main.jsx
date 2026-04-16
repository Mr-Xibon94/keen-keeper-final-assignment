import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layouts from './Component/Layouts/Layouts'

const router = createBrowserRouter([
  {
    path:'/',
    Component: Layouts
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>,
  </StrictMode>,
)
