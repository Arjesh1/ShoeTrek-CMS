import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './layout.css'
import { Col, Container, Row } from 'react-bootstrap'
import { SidebarMenu } from '../sidebar-menu/Sidebar'
import "./layout.css"
import SmallDeviceSidebar from '../sidebar-menu/SmallDeviceSidebar'


const UserLayout = ({children}) => {
  return (
    <div>

       
      
      <div className='smallDeviceNavbar mb-5 z-3 '>
              <SmallDeviceSidebar/>
              </div>
        <Row className=''>
          <Col  xs={2}
              className="bg-dark text-light ps-3 pt-1 sidebar"
              style={{ minHeight: "100vh", width: "225px" }}
              >
                <SidebarMenu className=""/>
              </Col>
              
              <Col className='p-0' style={{ overflowX: "scroll" }}>
                
              <Header />

                <div className='px-4 mt-3'>
                {children}
                </div>
                
                
              
              </Col>
        </Row>
      
     




       

        {/* footer section */}

        {/* <Footer/> */}
      
    </div>
  )
}

export default UserLayout
