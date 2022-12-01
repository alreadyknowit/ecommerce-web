import React from 'react';
import {Badge, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../redux/cartSlice";
import {useNavigate} from "react-router-dom"
import alertify from "alertifyjs";
const CartSummary = () => {


    const cart = useSelector(state => (state.cartStore.cart))
    const dispatch = useDispatch()
    const handleRemoveFromCart = (product) => {
        dispatch(cartActions.removeFromCart(product.id))
        alertify.error(product.productName + " removed from the cart",1)

    }
    const navigate = useNavigate()


    return (
        <div>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Cart
                </DropdownToggle>
                <DropdownMenu>
                    {
                        cart.cartItemList.map((cartItem) => (
                        <DropdownItem
                            style={{
                                justifyContent: "space-between",
                                display: "flex",
                                alignContent: "center",
                                margin: 10
                            }}
                            key={cartItem.product.id}>
                            <Badge onClick={() => handleRemoveFromCart(cartItem.product)} color="danger">-</Badge>
                            {cartItem.product.productName}
                            <Badge color="success">{cartItem.totalQuantity}</Badge>
                        </DropdownItem>
                    ))
                    }
                    <DropdownItem divider/>
                    <DropdownItem style={{textAlign: "end"}}> <Badge
                        color="success">${cart.totalPrice}</Badge></DropdownItem>
                    <DropdownItem style={{textAlign:"center"}} onClick={()=>navigate("/cart-details")}>Show cart details</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    );
};

export default CartSummary;