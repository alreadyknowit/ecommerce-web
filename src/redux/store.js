import {configureStore} from "@reduxjs/toolkit";
import categorySlice from "./slice/categorySlice";
import categoryListSlice from "./slice/categoryListSlice";
import productListSlice from "./slice/productListSlice";
import cartSlice from "./slice/cartSlice";
import prodcutSlice from "./slice/prodcutSlice";
import uiSlice from "./slice/uiSlice";
import authSlice from "./slice/authSlice";
import userSlice from "./slice/userSlice";


const store = configureStore({
    reducer: {
        categoryStore: categorySlice.reducer,
        categoryListStore: categoryListSlice.reducer,
        productListStore: productListSlice.reducer,
        productStore: prodcutSlice.reducer,
        cartStore: cartSlice.reducer,
        uiStore:uiSlice.reducer,
        authStore:authSlice.reducer,
        userStore:userSlice.reducer
    }
})

export default store;

