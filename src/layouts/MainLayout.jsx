import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = ({children}) => {
  return (
    <>
      <Navbar/>
      <div className="comtainer" mt-4>
      {children}
      </div>
        
      <Footer/>
    </>
  )
}

export default MainLayout