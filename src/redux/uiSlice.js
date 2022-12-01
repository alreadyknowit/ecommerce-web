import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice(
    {
        initialState:{isLoading:false, errors:[]},
        name:'ui_slice',
        reducers:{

            setIsLoading(state,action) {
                state.isLoading=action.payload
            },
            setError(state,action){
                state.errors.push(action.payload)
            }
        }
    }
)

export const uiActions = uiSlice.actions;

export default uiSlice;