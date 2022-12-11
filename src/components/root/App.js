import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import {Container} from "reactstrap";
import {Routes, Route} from "react-router-dom"
import CartDetails from "../CartDetails";
import CreateProduct from "../product/CreateProduct";
import UpdateProduct from "../product/UpdateProduct";
import NotFound from "../other/NotFound";
import {Login} from "../auth/Login";

function App() {
    const isLoggedIn = true
    return (
        <div>
            <Container>
                <Navi/>
                <Routes>
                    {
                        isLoggedIn ?
                            <Route path="/login" element={<Login/>}/>
                            :
                            <Route path="/" element={<Dashboard/>}/>
                    }
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
