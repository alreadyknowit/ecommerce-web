import React, {useEffect} from 'react';
import {Badge, Button, Container,Table} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchCart, removeFromCart} from "../redux/thunk/cartActionThunk";

const CartDetails = () => {

    const cart = useSelector(state => (state.cartStore.cart))
    const dispatch = useDispatch();

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }

    useEffect(()=>fetchCart(),[])

    return (
        <div>
            <h3>
                <Badge color="warning">Products </Badge>
            </h3>
            <Table>
                <thead align="center">
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total price</th>
                </tr>
                </thead>
                <tbody align="center">
                {

                    cart.cartItems.map((cartItem) =>{
                    return    cartItem &&
                        <tr key={cartItem.product.id}>
                            <th scope="row">{cartItem.product.id}</th>
                            <td>{cartItem.totalQuantity}</td>
                            <td>{cartItem.product.quantityPerUnit}</td>
                            <td>{cartItem.product.unitPrice}</td>
                            <td>{cartItem.totalPrice}</td>
                            <td><Button color="danger" onClick={() => handleRemoveFromCart(cartItem)}>-</Button>
                            </td>
                        </tr>
                    }

                )}

                </tbody>
            </Table>
            <Container style={{textAlign:"end"}} >
              <Badge style={{adding:8, fontSize:20}} color="success"> Total: {cart.totalPrice}</Badge>
            </Container>
        </div>
    );
};

export default CartDetails;