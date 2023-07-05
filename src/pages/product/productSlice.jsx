import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    product:[],
}

const productSlice = createSlice({
    name: "produ",
    initialState, 
    reducers:{
        setProdu: (state, {payload}) =>{
            state.category = payload 
        }
    }
})

const {reducer, actions} = productSlice
export const {setProdu} = actions

export default reducer