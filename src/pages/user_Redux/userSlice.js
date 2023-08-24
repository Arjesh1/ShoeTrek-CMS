import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user:{},
    clients:[],
}

const userSlice = createSlice({
    name: "adminUser",
    initialState, 
    reducers:{
        setUser: (state, {payload}) =>{
            state.user = payload 
        },
        setClients: (state, {payload}) =>{
            state.clients = payload 
        },

    }
})

const {reducer, actions} = userSlice
export const {setUser, setClients} = actions

export default reducer