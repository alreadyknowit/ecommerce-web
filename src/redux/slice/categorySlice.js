import {createSlice} from "@reduxjs/toolkit";


const categorySlice = createSlice({

    name: 'category',
    initialState: {category: null},
    reducers: {
        selectCategory(state, action) {
            state.category = action.payload
        },
        fetchOneCategory(state,action){
            state.category=action.payload;
        }

    }

})



export const categoryActions = categorySlice.actions;

export default categorySlice;