import { configureStore } from "@reduxjs/toolkit";
import adminReducer from './pages/user_Redux/userSlice'
import categoryReducer from './pages/category/categotySlice'
import systemReducer from './system/systemSlice'

export default configureStore({
    reducer:{
        admin: adminReducer,
        cat: categoryReducer,
        system: systemReducer, 
        
    }
})