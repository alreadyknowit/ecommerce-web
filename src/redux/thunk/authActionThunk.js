import {API_URL} from "../../const/url";
import {authActions} from "../slice/authSlice";
import {uiActions} from "../slice/uiSlice";
import alertify from "alertifyjs";
import {userActions} from "../slice/userSlice";
import {saveUser} from "./userActionThunk";

export const login = (user) => {

    return (dispatch) => {
        dispatch(uiActions.setIsLoading(true))
        const url = API_URL + "/login";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        }).then((response) => {
            if (response.status === 400) {
                throw response.json()
            }

            if (!response.ok) {
                throw Error("Something went fucking wrong!!")
            }

            return response.json()
        }).then((result) => {
            localStorage.setItem('user', JSON.stringify(result))
            dispatch(uiActions.setIsLoading(false))
            dispatch(uiActions.setIsAuthenticated(false))
            dispatch(authActions.login(result))
            dispatch(uiActions.setError(null))
            alertify.success(user.username + " logged in successfully.", 1.2)

        }).catch((err) => {
            err.then((e) => {
                dispatch(uiActions.setError(e))
                dispatch(uiActions.setIsLoading(false))
                alertify.error(e.message)

            })

        });

    }
}


export const register = (user) => {
    return (dispatch) => {
        dispatch(uiActions.setIsLoading(true))
        const url = API_URL + "/register";

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        }).then((response) => {
            if (response.status === 409) {
                throw response.json()
            }

            if (!response.ok) {
                throw Error("Register error")
            }
            return response.json()
        }).then((result) => {
            dispatch(uiActions.setIsLoading(false))
            dispatch(uiActions.setError(null))
            dispatch(authActions.register(result))

            alertify.success(user.username + " registered successfully.", 1.2)

        }).catch((err) => {
            err.then((e) => {
                dispatch(uiActions.setIsLoading(false))
                dispatch(uiActions.setError(e))
                alertify.error(e.message)
            })

        });


    }
}