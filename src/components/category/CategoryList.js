import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Badge, ListGroup, ListGroupItem} from "reactstrap";
import {categoryActions} from "../../redux/categorySlice";
import {fetchCategories} from "../../redux/categoryActionThunk";


const CategoryList = () => {
    const categories = useSelector((state) => state.categoryListStore.categories)
    const selectedCategory = useSelector((state) => state.categoryStore.category)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    const handleSelection = (category) => {
        dispatch(categoryActions.selectCategory(category))
    }

    return (
        <div>
            <h3><Badge color="warning">Category List</Badge></h3>
            <ListGroup type="unstyled">
                {
                    categories ? categories.map((category) => <ListGroupItem
                            active={selectedCategory && selectedCategory.id === category.id}
                            onClick={() => handleSelection(category)}
                            key={category.id}>{category.categoryName}</ListGroupItem>)
                        : <div>HATA</div>
                }
            </ListGroup>
        </div>
    );
};

export default CategoryList;