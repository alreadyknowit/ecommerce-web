import {productListActions} from "./productListSlice";
import {productActions} from "./prodcutSlice";
import {API_URL} from "../const/url";
import {uiActions} from "./uiSlice";
import alertify from "alertifyjs";

export const fetchProducts = (categoryId) => {
    let url = API_URL + "/products";

    if (categoryId) {
        url += "?categoryId=" + categoryId;
    }
    return (dispatch) => {
        setTimeout(() => fetch(url, {
            method: 'GET'
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error("Couldn't fetch products")
                }
                return response.json()
            }).then((result) => dispatch(productListActions.fetchProducts(result)))
            .catch((err) => err), 300)
    }

}

export const fetchOneProduct = (productId) => {
    let url = API_URL + "/products/" + productId;

    return (dispatch) => {
        setTimeout(() => fetch(url, {
            method: 'GET'
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error("Couldn't fetch products")
                }
                return response.json()
            }).then((result) => dispatch(productActions.fetchOneProduct(result)))
            .catch((err) => err), 300)
    }

}


export const addProduct = (product) => {
    let url = API_URL + "/products";
    return (dispatch) => {
        dispatch(uiActions.setIsLoading(true))
        fetch(url, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(product)
        }).then((response) => {
            if (!response.ok) {
                throw Error("Couldn't add the product product with product name: " + product.productName)
            }
            return response.json()
        }).then((result) => {
            dispatch(productListActions.addProduct(result))
            dispatch(uiActions.setIsLoading(false))
            alertify.success(product.productName + " added successfully.")

        }).catch((err) => {
            dispatch(uiActions.setError(err))
            dispatch(uiActions.setIsLoading(false))
            alertify.error(err.message)

        })
    }
}

export const updateProduct = (product) => {
    let url = API_URL + "/products/" + product.id;

    return (dispatch) => {
        dispatch(uiActions.setIsLoading(true))
        setTimeout(() =>
                fetch(url, {
                    method: 'PUT',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(product)
                }).then((response) => {
                    if (!response.ok) {
                        throw Error("Couldn't update the product: " + product.productName)
                    }
                    return response.json();
                }).then((result) => {
                        dispatch(productActions.updateProduct(result))
                        dispatch(uiActions.setIsLoading(false))
                        alertify.success(product.productName + " updated successfully.")
                    }
                ).catch((err) => {
                    dispatch(uiActions.setError(err))
                    dispatch(uiActions.setIsLoading(false))
                    alertify.error(err.message)
                })
            , 1000)

    }

}

