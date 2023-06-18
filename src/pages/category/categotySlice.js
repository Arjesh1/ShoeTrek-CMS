import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    category:[],
}

const catSlice = createSlice({
    name: "cat",
    initialState, 
    reducers:{
        setCat: (state, {payload}) =>{
            state.category = payload 
        }
    }
})

const {reducer, actions} = catSlice
export const {setCat} = actions

export default reducer