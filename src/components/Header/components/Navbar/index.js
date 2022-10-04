import React from "react";
import { Nav, NavMenu, NavLink, NavBtn, NavBtnLink } from './styledNav.js';
function Navbar(props){

    return(
        <>
        <Nav>
            <NavMenu classNameName={`${props.isExpanded ? "is-expanded" : ""}`}>
                <NavLink to="/about" activestyle = "true">
                    About
                </NavLink>
                <NavLink to="/shop" activestyle = "true">
                    Shop
                </NavLink>
                <NavLink to="/Cart" activestyle = "true">
                    Cart
                </NavLink>
                <NavLink to="/product" activestyle = "true">
                    Product
                </NavLink>
                <NavLink to="/home" activestyle = "true">
                    Sign-up
                </NavLink>
                <NavLink to="/home" activestyle = "true">
                    Contact-Us
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/sign-in">
                    Sign In
                </NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
}

export default Navbar;