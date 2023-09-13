import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./sidebar.css";
import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { MdCategory, MdOutlinePayment, MdOutlineReviews } from "react-icons/md";
import { BiMessageDots } from "react-icons/bi";
import { TbCategory } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { RiAdminLine } from "react-icons/ri";
import Logo from "../assets/images/logo.png";

export const SidebarMenu = () => {
  const [selectedList, setSelectedList] = useState("");

  const handleItemClick = (item) => {
    setSelectedList(item);
  };

  return (
    <>
      <div className=" sidebar  " style={{ width: "225px" }}>
        <Link to="/dashboard" className="nav-link ">
          <div className="top pt-2 fs-4 text-center ">
            <img
              src={Logo}
              alt="Logo"
              style={{ height: "8rem", width: "auto" }}
            />
          </div>
        </Link>
        <hr />
        <div className="list ">
          <ul class="navbar-nav  sidebar sidebar-dark accordion  ps-4 ">
            <li
              className=" side-link nav-item active ps-1 pe-5"
              onClick={() => handleItemClick("dashboard")}
              style={selectedList === "dashboard" ? { background: "grey" } : {}}
            >
              <Link to="/dashboard" className="nav-link ">
                <div className="d-flex gap-2 align-items-center  ">
                  <AiOutlineDashboard className="fs-3" />
                  <span>Dashboard</span>
                </div>
              </Link>
            </li>
            <li
              className=" side-link pe-5 ps-1"
              style={selectedList === "category" ? { background: "grey" } : {}}
            >
              <Link
                to="/category"
                className="nav-link"
                onClick={() => handleItemClick("category")}
              >
                <div className="d-flex gap-2 align-items-center text-light ">
                  <MdCategory className="fs-3" />
                  <span>Category</span>
                </div>
              </Link>
            </li>
            <li
              className=" side-link pe-5 ps-1"
              style={selectedList === "product" ? { background: "grey" } : {}}
            >
              <Link
                to="/product"
                className="nav-link"
                onClick={() => handleItemClick("product")}
              >
                <div className="d-flex gap-2 align-items-center text-light ">
                  <TbCategory className="fs-3" />
                  <span>Product</span>
                </div>
              </Link>
            </li>
            <li
              className=" side-link pe-5 ps-1"
              style={selectedList === "payment" ? { background: "grey" } : {}}
            >
              <Link
                to="/payment-option"
                className="nav-link"
                onClick={() => handleItemClick("payment")}
              >
                <div className="d-flex gap-2 align-items-center text-light ">
                  <MdOutlinePayment className="fs-3" />
                  <span>Payment</span>
                </div>
              </Link>
            </li>
            <li
              className=" side-link pe-5 ps-1"
              style={selectedList === "orders" ? { background: "grey" } : {}}
            >
              <Link
                to="/orders"
                className="nav-link"
                onClick={() => handleItemClick("orders")}
              >
                <div className="d-flex gap-2 align-items-center text-light ">
                  <AiOutlineShoppingCart className="fs-3" />
                  <span>Orders</span>
                </div>
              </Link>
            </li>
            <li
              className=" side-link pe-5 ps-1"
              style={selectedList === "reviews" ? { background: "grey" } : {}}
            >
              <Link
                to="/reviews"
                className="nav-link"
                onClick={() => handleItemClick("reviews")}
              >
                <div className="d-flex gap-2 align-items-center text-light ">
                  <MdOutlineReviews className="fs-3" />
                  <span>Reviews</span>
                </div>
              </Link>
            </li>
            <li
              className=" side-link pe-5 ps-1"
              style={selectedList === "customers" ? { background: "grey" } : {}}
            >
              <Link
                to="/customers"
                className="nav-link"
                onClick={() => handleItemClick("customers")}
              >
                <div className="d-flex gap-2 align-items-center text-light ">
                  <BsPeople className="fs-3" />
                  <span>Customers</span>
                </div>
              </Link>
            </li>
            <li
              className=" side-link pe-5 ps-1"
              style={selectedList === "customers" ? { background: "grey" } : {}}
            >
              <Link
                to="/messages"
                className="nav-link"
                onClick={() => handleItemClick("customers")}
              >
                <div className="d-flex gap-2 align-items-center text-light ">
                  <BiMessageDots className="fs-3" />
                  <span>Messages</span>
                </div>
              </Link>
            </li>
            <li
              className=" side-link pe-5 ps-1"
              style={selectedList === "admin" ? { background: "grey" } : {}}
            >
              <Link
                to="/admin"
                className="nav-link"
                onClick={() => handleItemClick("admin")}
              >
                <div className="d-flex gap-2 align-items-center text-light ">
                  <RiAdminLine className="fs-3" />
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
