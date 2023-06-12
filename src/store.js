import { configureStore } from "@reduxjs/toolkit";
import adminReducer from './pages/user_Redux/userSlice'

export default configureStore({
    reducer:{
        admin: adminReducer,
        
    }
})