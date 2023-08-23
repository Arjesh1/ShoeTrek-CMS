import React, { useState } from "react";
import { Link } from "react-router-dom";
import './sidebar.css'
import {AiOutlineDashboard, AiOutlineShoppingCart} from "react-icons/ai"
import {MdCategory, MdOutlinePayment, MdOutlineReviews} from "react-icons/md"
import {TbCategory} from "react-icons/tb"
import {BsPeople} from "react-icons/bs"
import {RiAdminLine} from "react-icons/ri"
import Logo from "../assets/images/logo.png"







export const SidebarMenu = () => {

 


  return (
    <>
    <div className="ps-3">


      <div className="top pt-2 fs-4 text-center ">
        <img src={Logo} alt="Logo" style={{height:"8rem", width:"auto"}}/>
      </div>
      <hr />
      <div className="list ">
        <ul class="navbar-nav  sidebar sidebar-dark accordion">
          <li className=" side-link nav-item active "    >
            <Link to="/dashboard" className="nav-link  ">
              <div className="d-flex gap-2 align-items-center  ">
              <AiOutlineDashboard className="fs-3"/>  
            <span>Dashboard</span>

              </div>
              
            </Link>
          </li>
          <li className=" side-link" >
            <Link to="/category" className="nav-link">
            <div className="d-flex gap-2 align-items-center text-light ">
              <MdCategory className="fs-3"/>  
            <span>Category</span>
            </div>
            </Link>
          </li>
          <li className=" side-link" >
            <Link to="/product" className="nav-link">
            <div className="d-flex gap-2 align-items-center text-light ">
              <TbCategory className="fs-3"/>  
            <span>Product</span>
            </div>
            </Link>
          </li>
          <li className=" side-link" >
            <Link to="/payment-option" className="nav-link">
              <div className="d-flex gap-2 align-items-center text-light ">
              <MdOutlinePayment className="fs-3"/>  
            <span>Payment</span>
            </div>
            </Link>
          </li>
          <li className=" side-link" >
            <Link to="/orders" className="nav-link">
            <div className="d-flex gap-2 align-items-center text-light ">
              <AiOutlineShoppingCart className="fs-3"/>  
            <span>Orders</span>
            </div>
            </Link>
          </li>
          <li className=" side-link" >
            <Link to="/reviews" className="nav-link">
            <div className="d-flex gap-2 align-items-center text-light ">
              <MdOutlineReviews className="fs-3"/>  
            <span>Reviews</span>
            </div>
            </Link>
          </li>
          <li className=" side-link" >
            <Link to="/customers" className="nav-link">
            <div className="d-flex gap-2 align-items-center text-light ">
              <BsPeople className="fs-3"/>  
            <span>Customers</span>
              </div>
            </Link>
          </li>
          <li className=" side-link" >
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
    
  
    </> 
    
  );
};




