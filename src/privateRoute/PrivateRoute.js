import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const {user} = useSelector(state => state.admin)
  console.log(user.role);
  return user?.role === "admin" ? children : <Navigate to="/login" />;
};