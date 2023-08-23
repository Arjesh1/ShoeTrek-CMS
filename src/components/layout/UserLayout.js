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

        {/* header */}
        {/* <div className='fixed-top  '> */}
        
        {/* </div> */}

      <Container fluid>
      <div className='smallDeviceNavbar mb-5 z-3 '>
              <SmallDeviceSidebar/>
              </div>
        <Row>
          <Col  xs={2}
              className="bg-dark text-light ps-3 pt-1 sidebar"
              style={{ minHeight: "100vh", width: "225px" }}
              >
                <SidebarMenu/>
              </Col>
              
              <Col style={{ overflowX: "scroll" }}>
                
                
              <Header />
              {children}</Col>
        </Row>
      </Container>
     




       

        {/* footer section */}

        {/* <Footer/> */}
      
    </div>
  )
}

export default UserLayout
