import React from 'react';
import {useNavigate} from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate()
    return (
        <div>
            <h2>Where do you think you are going, soldier? <span onClick={() => navigate("/")}>Go back home</span></h2>
        </div>
    );
};

export default NotFound;