import { signOut } from 'firebase/auth';
import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../config/firebase-config';
import { setUser } from '../../pages/user_Redux/userSlice';

const Header = () => {
  const dispatch = useDispatch()

  const {user} = useSelector(state => state.admin)

  const handleOnLogOut = () =>{
    signOut(auth).then(() =>{
      dispatch(setUser({}))

    })
  }





  return (
   
        <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Shoe CMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto fs-5">
          <Nav.Link href="facebook.com">Main Page</Nav.Link>
          {user.uid? (
            <>

          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link  disabled={true}><p className='text-light'>{user.fName+ " " + user.lName}</p></Nav.Link>
          <Nav.Link href="/login"><Button variant="light" className='rounded-pill' onClick={handleOnLogOut}>Log Out</Button></Nav.Link>
          </>

          ):(

            <>
            <Nav.Link href="/login"><Button variant="light" className='rounded-pill'>Log In</Button></Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            </>

          ) }
            
            
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


      
  )
}

export default Header
