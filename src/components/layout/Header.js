import { signOut } from 'firebase/auth';
import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../config/firebase-config';
import { setUser } from '../../pages/user_Redux/userSlice';
import { Link } from 'react-router-dom';

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

          <Link className='nav-link' to="/dashboard">Dashboard</Link>
          <Link className='nav-link'  disabled={true}><p className='text-light'>{user.fName+ " " + user.lName}</p></Link>
          <Link className='nav-link'><Button variant="light" className='rounded-pill' onClick={handleOnLogOut}>Log Out</Button></Link>
          </>

          ):(

            <>
            <Link className='nav-link' to="/login"><Button variant="light" className='rounded-pill'>Log In</Button></Link>
            <Link className='nav-link' to="/register">Register</Link>
            </>

          ) }
            
            
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


      
  )
}

export default Header
