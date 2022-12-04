import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Badge, Button, Table} from "reactstrap";
import {useNavigate} from "react-router-dom";
import {fetchProducts} from "../../redux/thunk/productActionsThunk";
import {addToCart} from "../../redux/thunk/cartActionThunk";

const ProductList = () => {

    const currentCategory = useSelector((state) => state.categoryStore.category)
    const products = useSelector((state) => state.productListStore.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(fetchProducts(currentCategory && currentCategory.id))
    }, [dispatch, currentCategory])

    const handleAddingCart = (product) => {
        dispatch(addToCart(product))
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