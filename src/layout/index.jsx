import Footer from '../components/Footer/Footer'
import { Background } from '../components/Gloabal'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router'
const Layout = () => {
  return (
    <>
      <div className="background">
        <Background/>
        <Header />
        <Outlet />
        <Footer />
      </div>

    </>
  )
}

export default Layout
