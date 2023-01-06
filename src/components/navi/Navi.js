import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav, NavItem, NavLink,
} from 'reactstrap';
import CartSummary from "../CartSummary";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

function Navi() {
    const [isOpen, setIsOpen] = useState(true);
    const isAuthenticated = useSelector(state => state.uiStore.isAuthenticated)

    const navigate = useNavigate()
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            { /*TODO:cahnge to link instead of navlink*/}
            <Navbar color="light" expand="md" style={{justifyContent: "space-evenly"}}>
                <NavbarBrand onClick={()=>navigate('/home')}>Reactaurant</NavbarBrand>
                <NavbarToggler onClick={handleToggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/create/">Add Product</NavLink>
                        </NavItem>
                        <CartSummary/>
                        {
                            isAuthenticated ?
                                <NavLink href="login">Login</NavLink> :
                                <NavLink href="logout">Logout</NavLink>
                        }

                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navi;