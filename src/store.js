import { configureStore } from "@reduxjs/toolkit";
import adminReducer from './pages/user_Redux/userSlice'
import categoryReducer from './pages/category/categotySlice'
import systemReducer from './system/systemSlice'
import paymentReducer from './pages/payment-option/paymentSlice'
import productReducer from './pages/product/productSlice'


export default configureStore({
    reducer:{
        admin: adminReducer,
        cat: categoryReducer,
        system: systemReducer, 
        payOption: paymentReducer,
        product: productReducer,
        
    }
})