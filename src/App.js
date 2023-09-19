import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/login/Login";
import Register from "./pages/registration/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/product/Product";
import Orders from "./pages/orders/Orders";
import Category from "./pages/category/Category";
import Reviews from "./pages/reviews/Reviews";
import Customers from "./pages/customers/Customers";
import { ToastContainer } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "./pages/user_Redux/userAction";
import { PrivateRoute } from "./privateRoute/PrivateRoute";
import Payment from "./pages/payment-option/Payment";
import NewProduct from "./pages/product/NewProduct";
import EditProduct from "./pages/product/EditProduct";
import Admin from "./pages/admin/Admin";
import { useEffect } from "react";
import { getAdminsAction } from "./pages/admin/AdminAction";
import { getCategoriesAction } from "./pages/category/CategoryAction";
import { getOrdersAction } from "./pages/orders/OrderAction";
import { getProductsAction } from "./pages/product/ProductAction";
import { getClientsAction } from "./pages/customers/CustomerAction";
import Messages from "./pages/messages/Messages";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminsAction());
    dispatch(getCategoriesAction());
    dispatch(getOrdersAction());
    dispatch(getProductsAction());
    dispatch(getClientsAction());
  });

  //let firebase to reauth user if the page is reloaded
  onAuthStateChanged(auth, (userData) => {
    if (userData?.uid) {
      dispatch(getUserAction(userData.uid));
    }
  });

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="register"
          element={
            <PrivateRoute>
              <Register />
            </PrivateRoute>
          }
        />

        <Route
          path="admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />

        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="category"
          element={
            <PrivateRoute>
              <Category />
            </PrivateRoute>
          }
        />
        <Route
          path="product"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        />
        <Route
          path="product/add-product"
          element={
            <PrivateRoute>
              <NewProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="product/:id"
          element={
            <PrivateRoute>
              <EditProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="payment-option"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
        <Route
          path="orders"
          element={
            <PrivateRoute>
            <Orders />
            </PrivateRoute>
          }
        />
        <Route
          path="reviews"
          element={
            <PrivateRoute>
              <Reviews />
            </PrivateRoute>
          }
        />
        <Route
          path="customers"
          element={
            <PrivateRoute>
              <Customers />
            </PrivateRoute>
          }
        />
        <Route
          path="messages"
          element={
            <PrivateRoute>
              <Messages />
            </PrivateRoute>
          }
        />

<Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
