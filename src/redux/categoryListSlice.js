import {createSlice} from "@reduxjs/toolkit";


const categoryListSlice = createSlice({

    name: 'categoryList',
    initialState: {categories: []},
    reducers: {
        fetchCategories(state, action) {
            state.categories = action.payload
        }
    }

})



export const categoryListActions = categoryListSlice.actions;

export default categoryListSlice;