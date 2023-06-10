import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
   
        <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Shoe CMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto fs-5">
          <Nav.Link href="#page">Main Page</Nav.Link>
            <Nav.Link href="#home">Dashboard</Nav.Link>
            <Nav.Link href="#login"><Button variant="light" className='rounded-pill'>Log In</Button></Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
            <Nav.Link  disabled={true}><p className='text-light'>Welcome Admin!</p></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


      
  )
}

export default Header
