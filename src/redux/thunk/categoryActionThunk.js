import {categoryListActions} from "../slice/categoryListSlice";
import {categoryActions} from "../slice/categorySlice";
import {API_URL} from "../../const/url";

export const fetchCategories = () => {
    return (dispatch) => {
        setTimeout(() => fetch(API_URL+'/categories', {
            method: 'GET'
        }).then((response) => {
            if (!response.ok) {
                throw Error("Couldn't fetch categories")
            }
            return response.json()
        }).then((res) => dispatch(categoryListActions.fetchCategories(res))).catch((err) => err), 500);
    }
}


export const fetchOneCategory = (id) => {
    return (dispatch) => {
        setTimeout(() => fetch(API_URL+'/categories/'+id, {
            method: 'GET'
        }).then((response) => {

            if (!response.ok) {
                throw Error("Couldn't fetch categories")
            }
            return response.json()
        }).then((res) => {
            dispatch(categoryActions.fetchOneCategory(res))
        }).catch((err) => err), 500);
    }
}
