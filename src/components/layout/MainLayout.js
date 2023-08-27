import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './layout.css'

const MainLayout = ({children}) => {
  return (
    <div>

        {/* header */}
       
        <Header />
       
     




        {/* main content area */}
       <div className='main ' >{children}</div>

        {/* footer section */}

        <Footer/>
      
    </div>
  )
}

export default MainLayout
