import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayouts from './layouts/RootLayouts.jsx'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import AboutUs from './pages/AboutUs.jsx'
import AllBirds from './pages/AllBirds.jsx'
import Award from './pages/Award.jsx'


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
        path: '/award',
        element: <Award />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
    ],
  },
])

export default router

