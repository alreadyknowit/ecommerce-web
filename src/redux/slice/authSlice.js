import {createSlice} from "@reduxjs/toolkit";



const initial_username = null;
const initial_password = null;
const authSlice = createSlice({
    name:'auth',
    initialState:{user:{username:initial_username,password:initial_password}},
    reducers:{
        login(state,action){
            state.user.username=action.payload.username
            state.user.password=action.payload.password
        },

        register(state,action){
            state.user.username=action.payload.username
            state.user.password=action.payload.password
        },
        logout(state,action){
            state.user.username=initial_username
            state.user.password=initial_password
        }
    }
})

export const authActions =authSlice.actions

export default authSlice