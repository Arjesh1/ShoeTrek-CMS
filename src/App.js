import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/registration/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Product from './pages/product/Product';
import Payment from './pages/payment option/Payment';
import Orders from './pages/orders/Orders';
import Category from './pages/category/Category';
import Reviews from './pages/reviews/Reviews';
import Customers from './pages/customers/Customers';
import { ToastContainer } from 'react-toastify';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase-config';
import { useDispatch } from 'react-redux';
import { getUserAction } from './pages/user_Redux/userAction';
import { PrivateRoute } from './privateRoute/PrivateRoute';


function App() {
  const dispatch = useDispatch()


  //let firebase to reauth user if the page is reloaded
onAuthStateChanged(auth, (userData) =>{
  if(userData?.uid){
    dispatch(getUserAction(userData.uid))

  }
})


  return (
    <div className="">

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>

        <Route path='dashboard' element={
          <PrivateRoute>
        <Dashboard/>
        </PrivateRoute>
        }/>
        <Route path='category' element={
          <PrivateRoute>
        <Category/>
        </PrivateRoute>
        }/>
        <Route path='product' element={
          <PrivateRoute>
        <Product/>
        </PrivateRoute>
        }/>
        <Route path='payment-option' element={
          <PrivateRoute>
        <Payment/>
        </PrivateRoute>
        }/>
        <Route path='orders' element={
        <PrivateRoute>
        <Orders/>
        </PrivateRoute>}/>
        <Route path='reviews' element={
        <PrivateRoute>
        <Reviews/>
        </PrivateRoute>}/>
        <Route path='customers' element={
        <PrivateRoute>
        <Customers/>
      </PrivateRoute>}/>
      </Routes>
      
        
      
     <ToastContainer/>
    </div>
  );
}

export default App;
