import React, { useState } from "react";
import { Link } from "react-router-dom";
import './sidebar.css'
import {AiOutlineDashboard} from "react-icons/ai"
import { Sidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';

export const SidebarMenu = () => {

 


  return (
    <>
    <div className="">


      <div className="top pt-2 fs-4 text-center ">Admin CMS</div>
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
          <li className="p-1 side-link" >
            <Link to="/category" className="nav-link">
              Category
            </Link>
          </li>
          <li className="p-1 side-link" >
            <Link to="/product" className="nav-link">
              Product
            </Link>
          </li>
          <li className="p-1 side-link" >
            <Link to="/payment-option" className="nav-link">
              Payment Option
            </Link>
          </li>
          <li className="p-1 side-link" >
            <Link to="/orders" className="nav-link">
              Order
            </Link>
          </li>
          <li className="p-1 side-link" >
            <Link to="/reviews" className="nav-link">
              Reviews
            </Link>
          </li>
          <li className="p-1 side-link" >
            <Link to="/customers" className="nav-link">
              Customer
            </Link>
          </li>
          <li className="p-1 side-link" >
            <Link to="/register" className="nav-link">
              Register admin
            </Link>
            </li>
        </ul>
      </div>
    </div>
    
    


    



   
    </>
    
    
    
    
  );
};




