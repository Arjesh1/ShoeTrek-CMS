import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    category:{},
}

const categorySlice = createSlice({
    name: "category",
    initialState, 
    reducers:{
        setCategory: (state, {payload}) =>{
            state.category = payload 
        }
    }
})

const {reducer, actions} = categorySlice
export const {setCategory} = actions

export default reducer