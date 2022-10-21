import React, { useEffect, useState } from "react";
import SideNav from "./components/SideNav/index.js";
import { GoSearch } from 'react-icons/go';
import {FaBars} from 'react-icons/fa';
import Navbar from "./components/Navbar/index.js";
import logo from "../../assets/images/header/logo_header.png";
import shopping_bag from "../../assets/images/header/cart.gif";
import phone_call from "../../assets/images/header/phone_call.gif";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../api/authApi.js";
import { useDispatch, useSelector} from "react-redux";
import {loginAction } from "../../reduxToolKit/user/authSlice.js";
import cateApi from "../../api/cateApi.js";
import { cateListAction } from "../../reduxToolKit/user/cateSlice.js";
import './index.scss';
import { Loading } from "notiflix";
import Login from "../Login/index.js";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [login, setLogin] = useState(false);
  const [cates, setCates] = useState([]);
  const token = localStorage.getItem('token');
  const userInfo = useSelector(state => state.auths);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNav = () => {
    setIsExpanded(!isExpanded);
  }

  const handleLoginForm = () => {
    setLogin(!login);
  }

  const handleLogout = async () => {
    localStorage.clear();
    // window.location.reload();
    navigate("/")
    const action = loginAction([]);
    dispatch(action);
  }

  const handleProfile = () => {
    if(token) navigate("/user/account/profile")
  }

  const fetchCategory =  async () => {
    try{
      const response = await cateApi.getAll();
      const action = cateListAction(response.data);
      dispatch(action);
      setCates(response.data);
    } catch(error) {
      console.log("Fail to fetch category", error);
    }
  }

  useEffect(() =>{
    fetchCategory();
  }, []);

  return (
  <>
    <div className="header">
        <FaBars 
          aria-hidden="true"
          className="header__bars-icon"
          onClick={handleNav}
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
        {
          token ?
          <div className="header__user">
            {userInfo.username}
            {Loading.remove()}   
            <ul className="header__user__info">
              <li onClick={handleProfile}>Tài khoản của tôi</li>
              <li onClick={handleLogout} >Đăng xuất</li>
            </ul>
          </div>
          :
          <div 
            className="header__guest"
            onClick={handleLoginForm}
          >
            {Loading.remove()}
            Đăng nhập / Đăng ký
            <hr></hr>
          </div>
        }
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
              <p className="fw-bold">1900 675 695</p>
            </div>
        </div>
    </div>

    <Navbar 
      isExpanded = {isExpanded}
      caterogyList = {cates}
    />
    <SideNav 
        isExpanded = {isExpanded}
        handleNav = {handleNav}
        categoryList = {cates}
    />
    <Login 
      login={login} 
      closeLoginForm = {handleLoginForm} 
    />
  </> 
  );
}

