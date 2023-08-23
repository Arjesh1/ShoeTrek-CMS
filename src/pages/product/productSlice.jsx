import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    product:[],
    selectedProduct:{},
    orders:[],
}

const productSlice = createSlice({
    name: "produ",
    initialState, 
    reducers:{
        setProdu: (state, {payload}) =>{
            state.product = payload 
        },
        setSelectedProduct: (state, {payload}) =>{
            if (payload.id === setSelectedProduct.id) {
                return;
              }
            state.selectedProduct = payload 
        },
        setOrders: (state, {payload}) =>{
            state.orders = payload 
        },
    }
})

const {reducer, actions} = productSlice
export const {setProdu,setSelectedProduct, setOrders } = actions

export default reducer