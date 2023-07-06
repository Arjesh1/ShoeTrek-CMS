import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    product:[],
    selectedProduct:{},
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
        }
    }
})

const {reducer, actions} = productSlice
export const {setProdu,setSelectedProduct } = actions

export default reducer