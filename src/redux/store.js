import {configureStore} from "@reduxjs/toolkit";
import categorySlice from "./slice/categorySlice";
import categoryListSlice from "./slice/categoryListSlice";
import productListSlice from "./slice/productListSlice";
import cartSlice from "./slice/cartSlice";
import prodcutSlice from "./slice/prodcutSlice";
import uiSlice from "./slice/uiSlice";


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