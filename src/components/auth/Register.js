import React, {useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {register} from "../../redux/thunk/authActionThunk";
import {ButtonSpinner} from "../spinner/Spinner";
import {useNavigate} from "react-router-dom";

export default function Register() {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()
    const errors = useSelector(state => (state.uiStore.errors))

    const handleRegister = (e) => {
        e.preventDefault()
        const user = {
            username: username,
            password: password
        }
        dispatch(register(user))
    }

    return (

        <form className="row d-flex col-md-6 " onSubmit={handleRegister}>
            <h3>Sign In</h3>
            <div className="mb-4">
                <label>Username</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}

                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}

                />
            </div>
            <div className="mb-3">
                <label>Repeat Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Repeat Password"
                    onChange={(e) => setPassword2(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                        Remember me
                    </label>
                </div>
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Register
                </button>
            </div>
            <span>
                <p className="btn btn-link" onClick={() => navigate('/login')}>Already have an account? Login</p>
            </span>

        </form>
    );
}

