import React, { useState } from "react";
import SideNav from "./components/SideNav/index.js";
import { GoSearch } from 'react-icons/go';
import {FaBars} from 'react-icons/fa';
import Navbar from "./components/Navbar/index.js";
import logo from "../../assets/images/header/logo_header.png";
import shopping_bag from "../../assets/images/header/cart.gif";
import phone_call from "../../assets/images/header/phone_call.gif";
import './index.scss';
import { Link } from "react-router-dom";

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const openNav = () => {
    setIsExpanded(!isExpanded);
  }
  
  const closeNav = () => {
    setIsExpanded(!isExpanded);
  }
  return (
  <>
    <div className="header">
        <FaBars 
          aria-hidden="true"
          className="header__bars-icon"
          onClick={openNav}
          />
        <Link to="/" className="header__logo">
            <img src={logo} alt="Cosmetic Shop" />
        </Link>
        <div className="header__search">
            <input type="text" placeholder="Tìm sản phẩm..."/>
            <Link to="/shop">
              <GoSearch className="header__search__icon"/>
            </Link>
        </div>
        <div className="header__user">
            Đăng nhập / Đăng ký
            <hr></hr>
        </div>
        <Link to="/cart" className="header__cart">
          <div className="header__cart__icon">
            <img src={shopping_bag} alt="shopping_bag" />
            <div className="header__cart__icon__count">
              <p>3</p>
            </div>
          </div>
          <div className="header__cart__icon__lable">
              <p className="header__cart__icon__lable__total">0đ</p>
              <p className="header__cart__icon__lable__cart">Giỏ hàng</p>
            </div>
        </Link>
        <div className="header__hotline">
              <img src={phone_call} alt="hotline" />
            <div>
              <p>Hotline</p>
              <p>1900 675 695</p>
            </div>
        </div>
    </div>

    <Navbar isExpanded = {isExpanded}/>
    <SideNav 
        isExpanded = {isExpanded}
        openNav = {openNav}
        closeNav = {closeNav}
    />
  </>
  );
}

export default Header;
