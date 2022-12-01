import {createSlice} from "@reduxjs/toolkit";

const productListSlice = createSlice({
    name: 'product',
    initialState: {products: []},
    reducers: {
        fetchProducts(state, action) {
            state.products = action.payload
        },
        addProduct(state,action){
            state.products.push(action.payload)
        },
    }
})

export const productListActions = productListSlice.actions

export default productListSlice;