import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user:{},
    clients:[],
    admins:[],
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
        setAdmins: (state, {payload}) =>{
            state.admins = payload 
        },

    }
})

const {reducer, actions} = userSlice
export const {setUser, setClients, setAdmins} = actions

export default reducer