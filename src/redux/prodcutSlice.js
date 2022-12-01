import {createSlice} from "@reduxjs/toolkit";


export const productSlice =createSlice({
    name:'product',
    initialState:{product:null},
    reducers:{
        fetchOneProduct(state,action){
            state.product = action.payload
        },
        updateProduct(state,action){
            state.product=action.payload
        }
    }
})

export const productActions = productSlice.actions;

export default productSlice;