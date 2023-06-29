import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    payment:[],
}

const paymentSlice = createSlice({
    name: "pay",
    initialState, 
    reducers:{
        setPay: (state, {payload}) =>{
            state.category = payload 
        }
    }
})

const {reducer, actions} = paymentSlice
export const {setCat} = actions

export default reducer