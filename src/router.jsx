import { createBrowserRouter } from 'react-router'
import RootLayouts from './layouts/RootLayouts.jsx'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import AboutUs from './pages/AboutUs.jsx'
import AllBirds from './pages/AllBirds.jsx'
import Award from './pages/Award.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import CookiePolicy from './pages/CookiePolicy.jsx'
import LoveBirds from './pages/LoveBirds.jsx'
import LoveBirdDetail from './pages/LoveBirdDetail.jsx'
import BlogDetail from './pages/BlogDetail.jsx'

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
        path: '/blog/:id',
        element: <BlogDetail />,
      },
      {
        path: '/award',
        element: <Award />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/terms-of-service',
        element: <TermsOfService />,
      },
      {
        path: '/cookie-policy',
        element: <CookiePolicy />,
      },
      {
        path: '/lovebirds',
        element: <LoveBirds />,
      },
      {
        path: '/lovebird/:id',
        element: <LoveBirdDetail />,
      },
    ],
  },
])

export default router

