import React from "react";
import { Nav, NavMenu, NavLink } from './styledNav.js';
function Navbar(props){

    return(
        
        <>
            <Nav>
                <NavMenu className={`${props.isExpanded ? "is-expanded" : ""}`}>
                    <NavLink to="/about" activestyle = "true">
                        Thương hiệu
                    </NavLink>
                    {props.caterogyList ?
                    props.caterogyList.map((item) => (
                        <NavLink to={`/danh-muc/${item.name.split(" ").join("-")}`} activestyle = "true" key={item.id}>
                            {item.name}
                        </NavLink>
                    )) : ''
                    }
                    <NavLink to="/home" activestyle = "true">
                        Khuyến mãi
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar;