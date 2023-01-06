import React, {useEffect} from 'react';
import Dashboard from "../root/Dashboard";
import Login from "./Login";
import {useSelector} from "react-redux";

const AuthController = () => {
    const isAuthenticated = useSelector(state => state.uiStore.isAuthenticated)

    return (
        <div>
            {
                        isAuthenticated ?
                    <Dashboard/> : <Login/>
            }
        </div>
    );
};

export default AuthController;