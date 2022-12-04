import React, {useEffect} from 'react';
import {Badge, DropdownItem, DropdownMenu, DropdownToggle, Spinner, UncontrolledDropdown} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../redux/slice/cartSlice";
import {useNavigate} from "react-router-dom"
import alertify from "alertifyjs";
import {fetchCart} from "../redux/thunk/cartActionThunk";

const CartSummary = () => {


    const cart = useSelector(state => (state.cartStore.cart))
    const isLoading = useSelector(state => (state.uiStore.isLoading))
    const dispatch = useDispatch()
    const handleRemoveFromCart = (product) => {
        dispatch(cartActions.removeFromCart(product.id))
        alertify.error(product.productName + " removed from the cart", 1)
    }
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(fetchCart())
    }, [dispatch])


    return (
        <div>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Cart
                </DropdownToggle>
                <DropdownMenu>
                    {
                            cart.cartItems.map((item) => {
                                    return item&&  <DropdownItem
                                        style={{
                                            justifyContent: "space-between",
                                            display: "flex",
                                            alignContent: "center",
                                            margin: 10
                                        }}
                                        key={item.id}>
                                        {item.product.productName}
                                        <Badge color="success">{item.totalQuantity}</Badge>
                                    </DropdownItem>
                                }
                            )



                    }
                    <DropdownItem divider/>
                    <DropdownItem style={{textAlign: "end"}}> <Badge
                        color="success">${cart.totalPrice}</Badge></DropdownItem>
                    <DropdownItem style={{textAlign: "center"}} onClick={() => navigate("/cart-details")}>Show
                        cart details</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    );
};

export default CartSummary;