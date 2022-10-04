import React from "react";
import './index.scss';

function SideNav(props) {

  
  return (
  <>
        <div id="mySidenav" className={`sidenav ${props.isExpanded ? "is-expanded" : ""}`}>
            <a href="#" 
            onClick={props.closeNav}
            className="closebtn"
            >&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
        <div className={`overlay ${props.isExpanded ? "visible" : ""}`}></div>
  </>
  );
}

export default SideNav;
