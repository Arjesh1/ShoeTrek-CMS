import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    product:[],
    selectedProduct:{},
    orders:[],
    reviews:[],
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
        setReviews: (state, {payload}) =>{
            state.reviews = payload 
        },
    }
})

const {reducer, actions} = productSlice
export const {setProdu,setSelectedProduct, setOrders, setReviews } = actions

export default reducer