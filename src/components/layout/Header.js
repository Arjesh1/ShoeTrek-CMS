import { signOut } from "firebase/auth";
import React from "react";
import { Button, Dropdown, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../config/firebase-config";
import { setUser } from "../../pages/user_Redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import SmallDeviceSidebar from "../sidebar-menu/SmallDeviceSidebar";
import "./layout.css";
import Logo from "../assets/images/logo.png";
import { setShowProfileModal } from "../../system/systemSlice";
import ProfileModal from "../modal/ProfileModal";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.admin);

  const handleOnLogOut = () => {
    signOut(auth).then(() => {
      dispatch(setUser({}));
      navigate("/");
    });
  };

  return (
    <div className="fixed-top z-2 ">
      <ProfileModal />

      {user.uid ? (
        <div className="d-flex justify-content-between align-items-center bg-dark text-light px-4">
          <div className=" d-flex gap-1 py-3 px-1 pe-0 mt-2">
            <div
              className="smallDeviceNavbar  
   "
            >
              <SmallDeviceSidebar />
            </div>
          </div>

          <div className="d-flex gap-1 py-3 px-1 pe-0 align-items-center z-3 ">
            <div className=" d-flex fs-3 justify-content-center align-items-center p-2">
              <IoIosNotificationsOutline />
            </div>
            <div className="px-2">
              <Nav.Link href="https://shoe-trek.vercel.app/">
                Store page
              </Nav.Link>
            </div>
            <div className="">
              <div className=" d-flex justify-content-center align-items-center text-light p-2 fw-bold rounded-circle">
                <Dropdown>
                  <Dropdown.Toggle
                    className="btn p-0"
                    variant="dark"
                    id="dropdown-basic"
                  >
                    <FaRegUser className="fs-4" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="mt-4">
                    <Dropdown.Item
                      onClick={() => dispatch(setShowProfileModal(true))}
                    >
                      Profile
                    </Dropdown.Item>
                    <NavDropdown.Divider />
                    <Dropdown.Item variant="dark" onClick={handleOnLogOut}>
                      Log Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-between align-items-center bg-dark text-light px-4 z-3">
          <div className=" d-flex gap-1 py-3 px-1 pe-0 mt-2">
            <div
              className=" 
   "
            >
              <img
                src={Logo}
                alt="Logo"
                style={{ height: "6.5rem", width: "auto" }}
              />
            </div>
          </div>

          <div className="d-flex gap-1 py-3 px-1 pe-0 align-items-center">
            <div className="px-2">
              <Nav.Link to="https://www.facebook.com/">Store page</Nav.Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
