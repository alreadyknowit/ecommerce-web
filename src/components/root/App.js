import Dashboard from "./Dashboard";
import {Container} from "reactstrap";
import {Routes, Route, Redirect} from "react-router-dom"
import CartDetails from "../CartDetails";
import CreateProduct from "../product/CreateProduct";
import UpdateProduct from "../product/UpdateProduct";
import NotFound from "../other/NotFound";
import Login from "../auth/Login";
import Register from "../auth/Register";
import AuthController from "../auth/AuthController";
import Navi from "../navi/Navi";

function App() {
    return (
        <div>
            <Container>
                <Navi/>
                <Routes>
                        <Route path="/" element={<AuthController/>}/>
                        <Route path="/home" element={<Dashboard/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/cart-details" element={<CartDetails/>}/>
                        <Route path="/create" element={<CreateProduct/>}/>
                        <Route path="/update/:id" element={<UpdateProduct/>}/>
                        <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Container>
        </div>
);
}

export default App;
