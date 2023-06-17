import { configureStore } from "@reduxjs/toolkit";
import adminReducer from './pages/user_Redux/userSlice'
import categoryReducer from './pages/category/categotySlice'

export default configureStore({
    reducer:{
        admin: adminReducer,
        category: categoryReducer,
        
    }
})