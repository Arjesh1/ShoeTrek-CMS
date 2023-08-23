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
import {IoIosNotificationsOutline} from 'react-icons/io'
import {FaRegUser} from 'react-icons/fa'

const Header = () => {
  const dispatch = useDispatch()

  const {user} = useSelector(state => state.admin)

  const handleOnLogOut = () =>{
    signOut(auth).then(() =>{
      dispatch(setUser({}))

    })
  }





  return (


    <>

    <div className="d-flex justify-content-between bg-dark text-light px-4">
    
    <div className="py-3 px-3">
      <div className=""></div>
    </div>
      <div className="d-flex gap-3 py-3 px-3 align-items-center ">
        <div className=" d-flex fs-3 justify-content-center align-items-center p-2">
          <IoIosNotificationsOutline/>
        </div>
        <div className=""> Store page</div>
        <div className="">
          <div className=" bg-light d-flex justify-content-center align-items-center text-dark p-2 fw-bold rounded-circle">
            <FaRegUser/>
          </div>
        </div>
      </div>



   


      
    </div>
    
    
{/*     
    <Navbar bg="body" variant="light" expand="lg" className='border-bottom border-dark '>
      <Container>
        <Navbar.Brand href="#home" >Shoe CMS</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" > */}
          {/* <Nav className="ms-auto fs-6">
          <Nav.Link href="facebook.com">Main Page</Nav.Link>
          {user.uid? (
            <>

<div class="btn-group" role="group">
    <button  class=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>


          <Link className='nav-link'  disabled={true}><p className='text-dark'>{user.fName+ " " + user.lName}</p></Link>
          <Link className='nav-link'><Button variant="dark" className='rounded-pill' onClick={handleOnLogOut}>Log Out</Button></Link>
          </> */}

          {/* ):(

            <>
            <Link className='nav-link ' to="/login"><Button variant="dark" className='rounded-pill '>Log In</Button></Link>
           
            </>

          ) }
            
            
            
            
          </Nav> */}
        {/* </Navbar.Collapse> */}
      {/* </Container>
    </Navbar> */}
    
    </>
   
        


      
  )
}

export default Header
