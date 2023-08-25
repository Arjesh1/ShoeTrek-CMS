import React from 'react'
import {AiOutlineDashboard, AiOutlineShoppingCart} from "react-icons/ai"
import {MdCategory, MdOutlinePayment, MdOutlineReviews} from "react-icons/md"
import {TbCategory} from "react-icons/tb"
import {BsPeople} from "react-icons/bs"
import {RiAdminLine} from "react-icons/ri"
import { Link } from 'react-router-dom';
import Logo from "../assets/images/logo.png"
import { Button } from 'react-bootstrap'

const SmallDeviceSidebar = () => {
  return (
    <>
    <nav class="navbar  fixed-top">
      <div class="">
        <Button
          class="navbar-toggler ms-3 mt-3   bg-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          variant='light'
          
        >
          <span class="navbar-toggler-icon bg-light"></span>
        </Button>
        <div
          class="offcanvas offcanvas-start bg-dark text-light w-50"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
          <img src={Logo} alt="Logo" style={{height:"7rem", width:"auto"}}/>
            <button
              type="button"
              class="btn-close btn-close-white   "
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body  ">
          <ul class="navbar-nav  sidebar sidebar-dark accordion">
          <li className=" side-link nav-item active "    >
            <Link to="/dashboard" className="nav-link  ">
              <div className="d-flex gap-2 align-items-center text-light ">
              <AiOutlineDashboard className="fs-3"/>  
            <span>Dashboard</span>
              </div>
              
            </Link>
          </li>
          <li className="side-link nav-item active" >
            <Link to="/category" className="nav-link">
            <div className="d-flex gap-2 align-items-center text-light ">
              <MdCategory className="fs-3"/>  
            <span>Category</span>
            </div>
            </Link>
          </li>
          <li className="side-link nav-item active" >
            <Link to="/product" className="nav-link">
            <div className="d-flex gap-2 align-items-center text-light ">
              <TbCategory className="fs-3"/>  
            <span>Product</span>
            </div>
            </Link>
          </li>
          <li className="side-link nav-item active" >
            <Link to="/payment-option" className="nav-link">
            <div className="d-flex gap-2 align-items-center text-light ">
              <MdOutlinePayment className="fs-3"/>  
            <span>Payment</span>
            </div>
            </Link>
          </li>
          <li className="side-link nav-item active" >
            <Link to="/orders" className="nav-link">
            <div className="d-flex gap-2 align-items-center text-light ">
              <AiOutlineShoppingCart className="fs-3"/>  
            <span>Orders</span>
            </div>
            </Link>
          </li>
          <li className="side-link nav-item active" >
            <Link to="/reviews" className="nav-link">
            <div className="d-flex gap-2 align-items-center text-light ">
              <MdOutlineReviews className="fs-3"/>  
            <span>Reviews</span>
            </div>
            </Link>
          </li>
          <li className="side-link nav-item active" >
            <Link to="/customers" className="nav-link">
            <div className="d-flex gap-2 align-items-center text-light ">
              <BsPeople className="fs-3"/>  
            <span>Customers</span>
              </div>
            </Link>
          </li>
          <li className="side-link nav-item active" >
            <Link to="/register" className="nav-link">
            <div className="d-flex gap-2 align-items-center text-light ">
              <RiAdminLine className="fs-3"/>  
            <span>Admin</span>
              </div>
            </Link>
            </li>
        </ul>
            
          </div>
        </div>
      </div>
    </nav>
      
    </>
  )
}

export default SmallDeviceSidebar
