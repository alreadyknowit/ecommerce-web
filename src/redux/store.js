import {configureStore} from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import categoryListSlice from "./categoryListSlice";
import productListSlice from "./productListSlice";
import cartSlice from "./cartSlice";
import prodcutSlice from "./prodcutSlice";
import uiSlice from "./uiSlice";


const store = configureStore({
    reducer: {
        categoryStore: categorySlice.reducer,
        categoryListStore: categoryListSlice.reducer,
        productListStore: productListSlice.reducer,
        productStore: prodcutSlice.reducer,
        cartStore: cartSlice.reducer,
        uiStore:uiSlice.reducer
    }
})

export default store;