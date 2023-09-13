import React from "react";
import Header from "./Header";
import "./layout.css";
import { SidebarMenu } from "../sidebar-menu/Sidebar";

const UserLayout = ({ children }) => {
  return (
    <div>
      <div className="user-Layout">
        <div
          className="bg-dark text-light ps-3 pt-1 left"
          style={{ minHeight: "100vh", width: "225px" }}
        >
          <SidebarMenu />
        </div>

        <div className="p-0 right">
          <Header />

          <div className="children-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
