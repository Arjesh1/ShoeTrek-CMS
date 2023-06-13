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


function App() {
  const dispatch = useDispatch()


  //let firebase to reauth user if they reload the page
onAuthStateChanged(auth, (userData) =>{
  if(userData.uid){
    dispatch(getUserAction(userData.uid))

  }
})


  return (
    <div className="">

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='category' element={<Category/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='payment-option' element={<Payment/>}/>
        <Route path='orders' element={<Orders/>}/>
        <Route path='reviews' element={<Reviews/>}/>
        <Route path='customers' element={<Customers/>}/>
      </Routes>
      
        
      
     <ToastContainer/>
    </div>
  );
}

export default App;
