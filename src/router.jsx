import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayouts from './layouts/RootLayouts.jsx'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import AboutUs from './pages/AboutUs.jsx'
import AllBirds from './pages/AllBirds.jsx'

const router = createBrowserRouter([
  {
    element: <RootLayouts />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/birds',
        element: <AllBirds />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
    ],
  },
])

export default router

