import {API_URL} from "../../const/url";
import {cartActions} from "../slice/cartSlice";
import alertify from "alertifyjs";
import {uiActions} from "../slice/uiSlice";


export const addToCart = (product) => {


    const productDto = {
        "id": product.id,
        "productName": product.productName,
        "quantityPerUnit": product.quantityPerUnit,
        "unitPrice": product.unitPrice,
        "unitsInStock": product.unitsInStock,
        "categoryId": product.category.id
    }


    const userId = 1;
    return (dispatch) => {
        dispatch(uiActions.setIsLoading(true))
        fetch(API_URL + '/cartItem?userId=' + userId, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(productDto)
            }
        ).then((response) => {
            if (!response.ok) {
                throw Error("Couldn't add " + productDto.productName + " to the cart.")
            }
            return response.json()
        }).then((result) => {
            dispatch(cartActions.addProductToCart(result))
            dispatch(uiActions.setIsLoading(false))
            alertify.success(productDto.productName + " added successfully.",0.8)

        }).catch((err) => {
            dispatch(uiActions.setError(err))
            dispatch(uiActions.setIsLoading(false))
            alertify.error(err.message)
        })
    }

}

export const fetchCart = () => {
    const userId = 1;
    return (dispatch) => {
        dispatch(uiActions.setIsLoading(true))

        fetch(API_URL + '/cartItem?userId=' + userId, {
            method: 'GET'
        }).then((response) => {
            if (!response.ok) {
                throw Error("Couldn't fetch cart data")
            }
            return response.json()
        }).then((result) => {
            dispatch(cartActions.fetchCart(result))
            dispatch(uiActions.setIsLoading(false))
        }).catch((err) => {
            dispatch(uiActions.setError(err))
            dispatch(uiActions.setIsLoading(false))
            alertify.error(err.message)
        })
    }
}

export const removeFromCart = (cartItem) => {
    return (dispatch) => {

        fetch(API_URL + '/cartItem/' + cartItem.id,
            {
                method: 'DELETE',
                headers: {"Content-Type": "application/json"}
            }
        ).then((response) => {
            if (!response.ok) {
                throw Error('Something went wrong -- DELETE')
            }
            return response.json()

        }).then(()=>{
            dispatch(cartActions.removeFromCart(JSON.parse(JSON.stringify(cartItem))))
            dispatch(uiActions.setIsLoading(false))
            alertify.success(`${cartItem.product.productName} removed from the cart`,0.8)
        })

            .catch((err) => {
            dispatch(uiActions.setError(err))
        })
    }
}