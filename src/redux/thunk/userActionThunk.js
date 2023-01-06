import {userActions} from "../slice/userSlice";


export const fetchUser=()=>{
    return (dispatch)=>{
        return dispatch(userActions.fetchUser(localStorage.getItem('user')))
    }
}