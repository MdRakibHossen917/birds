import { Outlet } from 'react-router'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function RootLayouts() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootLayouts

