import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/thunk/authActionThunk";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Login(){
    const dispatch = useDispatch()
    const [username, setUsername] = useState()
    const [password, setPassword] =useState()
    const navigate = useNavigate()

    const errors = useSelector(state => (state.uiStore.errors))

    const handleLogin = (e)=>{
        e.preventDefault();

       const user = {
            username: username,
            password:password
        }
        dispatch(login(user))
        if(!errors)
        navigate("/home",{replace:true})
    }
        return (

            <div>
                <form className="row d-flex col-md-6 justify-content-center" onSubmit={handleLogin}>
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
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck"
                            />
                            <label className="custom-control-label" htmlFor="customCheck">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <p style={{color:"red"}}> {/*todo:design*/}
                        {errors && errors.message}
                    </p>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary" >
                            Login
                        </button>
                    </div>
                    <span >
                        <p  className="btn btn-link" onClick={()=>console.log('forgot password')}> Forgot password?</p>
                    </span>
                    <span >
                        <p  className="btn btn-link" onClick={()=>navigate('/register')}>  Don't have an account? Register</p>
                    </span>
                </form>

                <p>

                </p>
            </div>

        )
}