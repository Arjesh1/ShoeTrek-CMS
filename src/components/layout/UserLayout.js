import React from 'react'
import Header from './Header'
import './layout.css'
import { Col, Row } from 'react-bootstrap'
import { SidebarMenu } from '../sidebar-menu/Sidebar'
import "./layout.css"



const UserLayout = ({children}) => {
  return (
    <div>

       
      
      
        <Row className=''>
          <Col  xs={2}
              className="bg-dark text-light ps-3 pt-1 sidebar"
              style={{ minHeight: "100vh", width: "225px" }}
              >
                <SidebarMenu style={{position:"fixed"}}/>
              </Col>
              
              <Col className='p-0' >
                
              <Header />

                <div className='px-4  children-content' >
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
