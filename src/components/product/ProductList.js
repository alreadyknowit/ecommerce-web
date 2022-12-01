import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Badge, Button, Table} from "reactstrap";
import {cartActions} from "../../redux/cartSlice";
import alertify from "alertifyjs"
import {useNavigate} from "react-router-dom";
import {fetchProducts} from "../../redux/productActionsThunk";

const ProductList = () => {

    const currentCategory = useSelector((state) => state.categoryStore.category)
    const products = useSelector((state) => state.productListStore.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(fetchProducts(currentCategory && currentCategory.id))
    }, [dispatch, currentCategory])

    const handleAddingCart = (product) => {
        dispatch(cartActions.addProduct(product))
        alertify.success(product.productName + " added to the cart", 1)
    }

    return (
        <div>
            <h3>
                <Badge color="warning">Products </Badge>
                <Badge color="success">{currentCategory && currentCategory.categoryName}</Badge>
            </h3>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Units In Stock</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((product) =>

                        <tr key={product.id}>


                            <th scope="row">{product.id}</th>
                            <td onClick={() => navigate(`update/${product.id}`, product)}>{product.productName}</td>
                            <td onClick={() => navigate(`update/${product.id}`, product)}>{product.quantityPerUnit}</td>
                            <td onClick={() => navigate(`update/${product.id}`, product)}>{product.unitPrice}</td>
                            <td onClick={() => navigate(`update/${product.id}`, product)}>{product.unitsInStock}</td>
                            <td><Button color="success" onClick={() => handleAddingCart(product)}>+</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default ProductList;