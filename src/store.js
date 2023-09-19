import { configureStore } from "@reduxjs/toolkit";
import adminReducer from './pages/user_Redux/userSlice'
import categoryReducer from './pages/category/categotySlice'
import systemReducer from './system/systemSlice'
import paymentReducer from './pages/payment-option/paymentSlice'
import productReducer from './pages/product/productSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //defaults to loaclstorage


const persistConfig = {
    key: "root", //key for the persisted state in storage
    storage, //storage engine to use (localStorage by default)
  };

  const persistedProductReducer = persistReducer(persistConfig, productReducer);

  const store = configureStore({
    reducer:{
        admin: adminReducer,
        cat: categoryReducer,
        system: systemReducer, 
        payOption: paymentReducer,
        product: persistedProductReducer,
        
    }
})

const persistor = persistStore(store);
export { store, persistor };