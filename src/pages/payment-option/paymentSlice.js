import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    payment:[],
}

const paymentSlice = createSlice({
    name: "pay",
    initialState, 
    reducers:{
        setPay: (state, {payload}) =>{
            state.payment = payload 
        }
    }
})

const {reducer, actions} = paymentSlice
export const {setPay} = actions

export default reducer