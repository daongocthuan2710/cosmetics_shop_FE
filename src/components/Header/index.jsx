import React, { useEffect, useState } from "react";
import SideNav from "./components/SideNav/index.js";
import { GoSearch } from 'react-icons/go';
import {FaBars} from 'react-icons/fa';
import {BiUpArrow} from 'react-icons/bi';
import Navbar from "./components/Navbar/index.js";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import {loginAction } from "../../Store/user/authSlice.js";
import cateApi from "../../api/cateApi.js";
import { cateListAction } from "../../Store/user/cateSlice.js";
import { Loading } from "notiflix";
import Login from "../Login/index.js";
import Register from "../Register/index.js";
import {headers} from "../../assets/images/datas/headers";
import Skeleton from '@mui/material/Skeleton';
import './index.scss';

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [cates, setCates] = useState([]);
  const [offset, setOffset] = useState(0);
  const token = localStorage.getItem('token');
  const userInfo = useSelector(state => state.auths);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNav = () => {
    setIsExpanded(!isExpanded);
  }
  const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
  }

  const handleLoginForm = () => {
    setLogin(!login);
  }

  const handleRegisterForm = () => {
    setRegister(!register);
  }

  const handleLogout = async () => {
    localStorage.clear();
    navigate("/");
    const action = loginAction([]);
    dispatch(action);
  }

  const handleProfile = () => {
    if(token) navigate("/user/account/profile");
  }

  const handlePurchase = () => {
    if(token) navigate("/user/purchase");
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

    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if(cates.length > 0){
    Loading.remove();
  }
  return (
  <>
    {
      offset > 180 ?
      <div className="header is-sroll" style={{position:'fixed'}}>
      <FaBars 
        aria-hidden="true"
        className="header__bars-icon"
        onClick={handleNav}
        /> 
      <Link to="/" className="header__logo" style={{width:'100px'}}>
          <img src={headers["logo_header.png"]} alt="Cosmetic Shop" />
      </Link>
      <div className="header__search">
          <input type="text" placeholder="Tìm sản phẩm..."/>
          <Link to="/shop">
            <GoSearch className="header__search__icon"/>
          </Link>
      </div>
      <Link to="/cart" className="header__cart" style={{border:'none'}}>
          <div className="header__cart__icon">
            <img src={headers["cart.gif"]} alt="shopping_bag" />
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
            <img src={headers["phone_call.gif"]} alt="hotline" />
          <div>
            <p>Hotline</p>
            <p className="fw-bold">1900 675 695</p>
          </div>
      </div>
      <div 
        className="sroll-top"
        onClick={handleScrollToTop}
      >
        <BiUpArrow/>
      </div>
      </div>
      :
      <div className="header">
        <FaBars 
          aria-hidden="true"
          className="header__bars-icon"
          onClick={handleNav}
          />
        <Link to="/" className="header__logo">
            <img src={headers["logo_header.png"]} alt="Cosmetic Shop" />
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
            <ul className="header__user__info">
              <li onClick={handleProfile}>Tài khoản của tôi</li>
              <li onClick={handlePurchase}>Đơn mua</li>
              <li onClick={handleLogout} >Đăng xuất</li>
            </ul>
          </div>
          :
          <div 
            className="header__guest"
            id="login-register"
            onClick={handleLoginForm}
          >
            Đăng nhập / Đăng ký
            <hr></hr>
          </div>
        }
        <Link to="/cart" className="header__cart">
          <div className="header__cart__icon">
            <img src={headers["cart.gif"]} alt="shopping_bag" />
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
              <img src={headers["phone_call.gif"]} alt="hotline" />
            <div>
              <p>Hotline</p>
              <p className="fw-bold">1900 675 695</p>
            </div>
        </div>
      </div>
    }

    {cates.length > 0
    ?
      <Navbar 
        isExpanded = {isExpanded}
        caterogyList = {cates}
      />
    :<Skeleton 
      variant="text" 
      width="100%"
      height={100}
      animation={'pulse'}
    />}

    <SideNav 
        isExpanded = {isExpanded}
        handleNav = {handleNav}
        categoryList = {cates}
    />
    <Login 
      login={login} 
      closeLoginForm = {handleLoginForm}
      register={register}
      handleRegisterForm = {handleRegisterForm} 
    />
    <Register  
      register = {register} 
      closeRegisterForm = {handleRegisterForm}
      login={login}
      handleLoginForm = {handleLoginForm}
    />
  </> 
  );
}

