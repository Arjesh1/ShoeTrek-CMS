import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user:{},
    clients:[],
    admins:[],
    messages: [],
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
        setMessages: (state, {payload}) =>{
            state.messages = payload 
        },

    }
})

const {reducer, actions} = userSlice
export const {setUser, setClients, setAdmins, setMessages} = actions

export default reducer