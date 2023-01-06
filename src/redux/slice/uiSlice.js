import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice(
    {
        initialState:{isLoading:false, errors:null, isAuthenticated:false},
        name:'ui_slice',
        reducers:{

            setIsLoading(state,action) {
                state.isLoading=action.payload
            },
            setError(state,action){
                state.errors = action.payload
            },
            setIsAuthenticated(state,action){
                state.isAuthenticated = action.payload
            }
        }
    }
)


export const uiActions = uiSlice.actions;

export default uiSlice;