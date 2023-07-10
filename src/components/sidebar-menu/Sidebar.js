import React from "react";
import { Link } from "react-router-dom";
import './sidebar.css'

export const SidebarMenu = () => {
  return (
    <div>
      <div className="top pt-2 fs-5 text-center ">Admin CMS</div>
      <hr />
      <div className="list ">
        <ul className="list-unstyled fw-bolder  d-flex flex-column gap-1 sidebar-menu">
          <li className="p-1 side-link">
            <Link to="/dashboard" className="nav-link ">
              Dashboard
            </Link>
          </li>
          <li className="p-1 side-link">
            <Link to="/category" className="nav-link">
              Category
            </Link>
          </li>
          <li className="p-1 side-link">
            <Link to="/product" className="nav-link">
              Product
            </Link>
          </li>
          <li className="p-1 side-link">
            <Link to="/payment-option" className="nav-link">
              Payment Option
            </Link>
          </li>
          <li className="p-1 side-link">
            <Link to="/orders" className="nav-link">
              Order
            </Link>
          </li>
          <li className="p-1 side-link">
            <Link to="/reviews" className="nav-link">
              Reviews
            </Link>
          </li>
          <li className="p-1 side-link">
            <Link to="/customers" className="nav-link">
              Customer
            </Link>
          </li>
          <li className="p-1 side-link">
            <Link to="/register" className="nav-link">
              Register admin
            </Link>
            </li>
        </ul>
      </div>
    </div>
  );
};