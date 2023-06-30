import React from "react";
import { Link } from "react-router-dom";

export const SidebarMenu = () => {
  return (
    <div>
      <div className="top fs-3 text-center ">Admin CMS</div>
      <hr />
      <div className="list ">
        <ul className="list-unstyled fw-bolder fs-6 d-flex flex-column gap-3 sidebar-menu">
          <li>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/category" className="nav-link">
              Category
            </Link>
          </li>
          <li>
            <Link to="/product" className="nav-link">
              Product
            </Link>
          </li>
          <li>
            <Link to="/payment-option" className="nav-link">
              Payment Option
            </Link>
          </li>
          <li>
            <Link to="/orders" className="nav-link">
              Order
            </Link>
          </li>
          <li>
            <Link to="/reviews" className="nav-link">
              Reviews
            </Link>
          </li>
          <li>
            <Link to="/customers" className="nav-link">
              Customer
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-link">
              Register admin
            </Link>
            </li>
        </ul>
      </div>
    </div>
  );
};