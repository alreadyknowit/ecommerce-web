import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav, NavItem, NavLink,
} from 'reactstrap';
import CartSummary from "../CartSummary";
import {Link} from "react-router-dom";

function Navi() {
    const [isOpen, setIsOpen] = useState(true);
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Navbar color="light" expand="md" style={{justifyContent: "space-evenly"}}>
                <NavbarBrand href="/">Reactaurant</NavbarBrand>
                <NavbarToggler onClick={handleToggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/create/">Add Product</NavLink>
                        </NavItem>
                        <CartSummary/>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navi;