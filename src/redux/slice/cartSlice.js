import {createSlice} from "@reduxjs/toolkit";
import {round2Decimal} from "../../const/round";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {cart: {cartItems: [], totalPrice: 0, totalQuantity: 0}},
    reducers: {
        //payload is cartItem id
        addProductToCart(state, action) {
            const cartItem = action.payload
            const existingCartItem =
                state.cart.cartItems.find((item) => item.id === cartItem.id)

            // const product = action.payload
            // const existingCartItem =
            //     state.cart.cartItems.find((item) => item.product.id === product.id)
            if (existingCartItem) {
                existingCartItem.totalPrice = round2Decimal(existingCartItem.totalPrice+ existingCartItem.product.unitPrice)
                existingCartItem.totalQuantity++
                state.cart.totalPrice =round2Decimal( state.cart.totalPrice + existingCartItem.product.unitPrice)
                state.cart.cartItems =
                    state.cart.cartItems.map(item => item.id === existingCartItem.id ? existingCartItem : item)

            } else {
                state.cart.cartItems.push(cartItem)
                state.cart.totalQuantity++
                state.cart.totalPrice =round2Decimal(state.cart.totalPrice + cartItem.product.unitPrice)
            }
        },
        //payload is cartItem
        removeFromCart(state, action) {
            const cartItem = action.payload
            if (cartItem.totalQuantity === 1) {
                state.cart.cartItems = state.cart.cartItems.filter((item) => item.id !== cartItem.id)
                state.cart.totalQuantity--
                state.cart.totalPrice =round2Decimal(state.cart.totalPrice- cartItem.totalPrice)
            } else {
                cartItem.totalPrice = round2Decimal(cartItem.totalPrice- cartItem.product.unitPrice)
                cartItem.totalQuantity--
                state.cart.totalPrice =round2Decimal(state.cart.totalPrice- cartItem.product.unitPrice)
                state.cart.cartItems = state.cart.cartItems.map(item => item.id === cartItem.id ? cartItem : item)

            }
        },
        fetchCart(state, action) {
            state.cart = action.payload
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;
