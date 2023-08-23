import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './layout.css'
import { Col, Container, Row } from 'react-bootstrap'
import { SidebarMenu } from '../sidebar-menu/Sidebar'


const UserLayout = ({children}) => {
  return (
    <div>

        {/* header */}
        {/* <div className='fixed-top  '> */}
        
        {/* </div> */}

      <Container fluid>
        <Row>
          <Col  xs={2}
              className="bg-dark text-light ps-3 pt-1"
              style={{ minHeight: "93.5vh", width: "200px" }}
              >
                <SidebarMenu/>
              </Col>
              <Col style={{ overflowX: "scroll" }}>
              <Header />
              {children}</Col>
        </Row>
      </Container>
     




       

        {/* footer section */}

        <Footer/>
      
    </div>
  )
}

export default UserLayout
