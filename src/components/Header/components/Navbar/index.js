import { Loading } from "notiflix";
import React from "react";
import { Nav, NavMenu, NavLink } from './styledNav.js';
function Navbar(props){

    Loading
    //get data
    Loading.remove()
    return(
        <>
            <Nav>
                <NavMenu className={`${props.isExpanded ? "is-expanded" : ""}`}>
                    <NavLink to="/about" activestyle = "true">
                        Thương hiệu
                    </NavLink>
                    <NavLink to="/shop" activestyle = "true">
                        Shop
                    </NavLink>
                    <NavLink to="/Cart" activestyle = "true">
                        Cart
                    </NavLink>
                    <NavLink to="/product/1" activestyle = "true">
                        Product
                    </NavLink>
                    <NavLink to="/home" activestyle = "true">
                        Nước hoa
                    </NavLink>
                    <NavLink to="/home" activestyle = "true">
                        Khuyến mãi
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar;