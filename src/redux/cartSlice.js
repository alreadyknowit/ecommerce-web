import {createSlice} from "@reduxjs/toolkit";
/*
"cartItem":
        {
        product,
        totalPrice,
        totalQuantity
        }
------------------------
"cart":[
    "cartItemList":[
        cartItem,
        cartItem,
        cartItem,
        ...
    ],
    "totalPrice":0
    "totalQuantity":0
    "showCart"true
]

 */
const cartSlice = createSlice({
    name: 'cart',
    initialState: {cart: {cartItemList: [], totalPrice: 0, totalQuantity: 0, showCart: false}},
    reducers: {
        //payload is product
        addProduct(state, action) {
            const product = action.payload
            const existingCartItem = state.cart.cartItemList.find((cartItem) => cartItem.product.id === product.id)
            /*
               if we already added the product to cartItemList,
               we need to update cartItem
            */
            if (existingCartItem) {
                existingCartItem.totalPrice += product.unitPrice;
                existingCartItem.totalQuantity++;
                state.cart.totalPrice += product.unitPrice;
            } else {
                /*
                    we are adding the product for the first time.
                 */
                state.cart.cartItemList.push({
                    product,
                    totalPrice: product.unitPrice,
                    totalQuantity: 1
                })
                state.cart.totalPrice += product.unitPrice;
                state.cart.totalQuantity++;
            }
        },
        //payload is product id
        removeFromCart(state, action) {
            const existingCartItem = state.cart.cartItemList.find((cartItem) => cartItem.product.id === action.payload)


            state.cart.totalPrice-=existingCartItem.totalPrice;
            state.cart.totalQuantity--;
          state.cart.cartItemList= state.cart.cartItemList.filter((cartItem) => cartItem.product.id !== action.payload)
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;