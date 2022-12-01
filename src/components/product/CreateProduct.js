import React, {useEffect, useState} from 'react';
import {Button, Form, FormGroup,Input, Label} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../../redux/productActionsThunk";
import {fetchCategories } from "../../redux/categoryActionThunk";

const CreateProduct = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState()
    const [quantity, setQuantity] = useState()
    const categories = useSelector((state) => state.categoryListStore.categories)

    const [price, setPrice] = useState()
    const [categoryId, setCategoryId] = useState()
    const [unitsInStock, setUnitsInStock] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct({
            categoryId: parseInt(categoryId),
            productName: name,
            quantityPerUnit: quantity,
            unitPrice: parseFloat(price),
            unitsInStock: parseInt(unitsInStock)
        }))

    }


    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    useEffect(()=>{
        if(categories.length>0){
            setCategoryId(Object.values(categories)[0].id)
        }
    },[categories]);

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="exampleSelect">
                        Category
                    </Label>
                    <Input
                        id="category"
                        name="category"
                        type="select"
                        onChange={(e) => setCategoryId(e.target.value)}
                    >
                        {
                            categories.map((category) => <option key={category.id}
                                                                 value={category.id}>{category.categoryName}</option>)
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
                        onChange={(e) => setName(e.target.value)}
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
                        onChange={(e) => setUnitsInStock(e.target.value)}
                    />
                </FormGroup>
                <Button>
                    Add Product
                </Button>
            </Form>
        </div>
    );
};

export default CreateProduct;