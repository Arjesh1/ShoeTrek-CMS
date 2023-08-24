import { signOut } from 'firebase/auth';
import React from 'react'
import { Button, Dropdown, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../config/firebase-config';
import { setUser } from '../../pages/user_Redux/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import {IoIosNotificationsOutline} from 'react-icons/io'
import {FaRegUser} from 'react-icons/fa'
import SmallDeviceSidebar from '../sidebar-menu/SmallDeviceSidebar';
import "./layout.css"
import Logo from "../assets/images/logo.png"
import { setShowProfileModal } from '../../system/systemSlice';
import ProfileModal from '../modal/ProfileModal';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user} = useSelector(state => state.admin)

  const handleOnLogOut = () =>{
    signOut(auth).then(() =>{
      dispatch(setUser({}))
      navigate("/")

    })
  }





  return (


    <>
    <ProfileModal/>


{user.uid? (
  <div className="d-flex justify-content-between align-items-center bg-dark text-light px-4">

  <div className=' d-flex gap-1 py-3 px-1 pe-0 mt-2'>

  <div className='smallDeviceNavbar  
   '>

  <SmallDeviceSidebar/>
  </div>
  </div>


  <div className="d-flex gap-1 py-3 px-1 pe-0 align-items-center">
    <div className=" d-flex fs-3 justify-content-center align-items-center p-2">
      <IoIosNotificationsOutline/>
    </div>
    <div className="px-2">
      <Nav.Link to="https://www.facebook.com/">
       Store page
       </Nav.Link>
       </div>
    <div className="">
      <div className=" d-flex justify-content-center align-items-center text-light p-2 fw-bold rounded-circle">
      <Dropdown>
  <Dropdown.Toggle className='btn p-0' variant="dark" id="dropdown-basic">
  <FaRegUser className='fs-4'/>
  </Dropdown.Toggle>
  <Dropdown.Menu className='mt-4'>
    <Dropdown.Item onClick={()=> dispatch(setShowProfileModal(true))}>Profile</Dropdown.Item>
    <NavDropdown.Divider />
    <Dropdown.Item variant="dark" onClick={handleOnLogOut}>Log Out</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        
      </div>
    </div>
  </div>
  
</div>

):(

  <div className="d-flex justify-content-between align-items-center bg-dark text-light px-4">

  <div className=' d-flex gap-1 py-3 px-1 pe-0 mt-2'>

  <div className=' 
   '>

  <img src={Logo} alt='Logo' style={{height:"6.5rem", width:"auto"}}/>
  </div>
  </div>


  <div className="d-flex gap-1 py-3 px-1 pe-0 align-items-center">
    
    <div className="px-2">
      <Nav.Link to="https://www.facebook.com/">
       Store page
       </Nav.Link>
       </div>
    
  </div>
  
</div>

)}

    
    
    
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
