import React, {useEffect, useState} from 'react';
import {Button, Form, FormGroup, Input, Label, Spinner} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchOneProduct, updateProduct} from "../../redux/productActionsThunk";
import {fetchCategories, fetchOneCategory} from "../../redux/categoryActionThunk";
import {useParams} from "react-router-dom";
import {PageSpinner, ButtonSpinner} from "../spinner/Spinner";

const UpdateProduct = () => {
    let {id} = useParams()
    const dispatch = useDispatch()

    const categories = useSelector((state) => state.categoryListStore.categories)
    const product = useSelector((state) => state.productStore.product)
    const currentCategory = useSelector((state) => state.categoryStore.category)
    const isLoading = useSelector((state) => state.uiStore.isLoading)
    const errors = useSelector((state) => state.uiStore.errors)

    const [name, setName] = useState()
    const [quantity, setQuantity] = useState()
    const [price, setPrice] = useState()
    const [categoryId, setCategoryId] = useState()
    const [unitsInStock, setUnitsInStock] = useState()

console.log('errors',errors)
    const handleSubmit = (e) => {
        e.preventDefault()

        const productToUpdate = {
            id: parseInt(id),
            categoryId: parseInt(categoryId),
            productName: name,
            quantityPerUnit: quantity,
            unitPrice: parseFloat(price),
            unitsInStock: parseInt(unitsInStock)
        }
        dispatch(updateProduct(productToUpdate))

    }
    useEffect(() => {
        dispatch(fetchCategories())
        dispatch(fetchOneProduct(id))
    }, [dispatch, id])

    useEffect(() => {
        if (product) {
            dispatch(fetchOneCategory(product.category.id))
            setName(product.productName)
            setPrice(product.unitPrice)
            setCategoryId(product.category.id)
            setQuantity(product.quantityPerUnit)
            setUnitsInStock(product.unitsInStock)
        }
    }, [dispatch, product])

    const renderLoading = () => {
        return <PageSpinner/>
    }

    const renderPage = () => {
        return (
            <div>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="category">
                            Select
                        </Label>
                        <Input
                            id="category"
                            name="category"
                            type="select"
                            defaultValue={product.category.id}
                            onChange={(e) => setCategoryId(e.target.value)}
                        >
                            {
                                categories.map((category) => <option key={category.id}
                                                                     value={category.id}
                                >{category.categoryName}</option>)
                            }
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="productName">
                            Product Name
                        </Label>
                        <Input
                            id="productName"
                            name="productName"
                            type="text"
                            required
                            defaultValue={product.productName}
                            onChange={(e) => setName(e.target.value === undefined ? product.productName : e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="quantity">
                            Quantity
                        </Label>
                        <Input
                            id="quantity"
                            name="quantity"
                            type="text"
                            required
                            defaultValue={product.quantityPerUnit}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">
                            Price
                        </Label>
                        <Input
                            id="price"
                            name="price"
                            type="text"
                            required
                            defaultValue={product.unitPrice}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="unitsInStock">
                            Units In Stock
                        </Label>
                        <Input
                            id="unitsInStock"
                            name="unitsInStock"
                            type="number"
                            required
                            defaultValue={product.unitsInStock}
                            onChange={(e) => setUnitsInStock(e.target.value)}
                        />
                    </FormGroup>
                    <Button disabled={isLoading}>

                        {
                            isLoading ?
                                <ButtonSpinner/> : "Update"
                        }
                    </Button>
                </Form>

                {
                    errors.map((error)=><p>{error.message}</p>)
                }
            </div>

        )
    }
    return product && currentCategory ? renderPage() : renderLoading();
};

export default UpdateProduct;