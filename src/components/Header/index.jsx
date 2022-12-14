import React, { useEffect, useState } from "react";
import SideNav from "./components/SideNav/index.js";
import { GoSearch } from 'react-icons/go';
import {FaBars} from 'react-icons/fa';
import {BiUpArrow} from 'react-icons/bi';
import Navbar from "./components/Navbar/index.js";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import {loginAction } from "../../Store/authSlice.js";
import cateApi from "../../api/cateApi.js";
import { cateListAction } from "../../Store/user/cateSlice.js";
import { Loading } from "notiflix";
import Login from "../Login/index.js";
import Register from "../Register/index.js";
import {headers} from "../../assets/images/datas/headers";
import Skeleton from '@mui/material/Skeleton';
import { loginNavigateAction } from "../../Store/user/loginSlice.js";
import './index.scss';
import { cartTotalAction } from "../../Store/user/cartSlice.js";
import { cartListAction } from "../../Store/user/cartListSlice.js";
import { searchAction } from "../../Store/user/searchSlice.js";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const loginNavigate = Object.values(useSelector(state => state.login))[0];
  const cartTotal = Object.values(useSelector(state => state.cart))[0];
  const cartTotalPrice = Object.values(useSelector(state => state.cartTotalPrice))[0] || 0;
  const [login, setLogin] = useState(loginNavigate || false);
  const [register, setRegister] = useState(false);
  const [cates, setCates] = useState([]);
  const [offset, setOffset] = useState(0);
  const auth = useSelector(state => state.auths);
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

  const handleFilterSearch = (value) => {
    const action = searchAction([value]);
    dispatch(action);
  }

  const handleLoginForm = () => {
    const action = loginNavigateAction([!login]);
    dispatch(action);
    setLogin(!login);
  }

  const handleRegisterForm = () => {
    setRegister(!register);
  }

  const handleLogout = async () => {
    localStorage.clear();
    navigate("/");

    dispatch(loginAction([]));
    dispatch(cartTotalAction([0]));      
    dispatch(cartListAction([])); 
    dispatch(loginAction([])); 
  }

  const handleProfile = () => {
    if(auth.token != undefined && auth.roles == "member") navigate("/user/account/profile");
  }

  const handleCart = () => {
    if(auth.token != undefined && auth.roles == "member"){
      navigate("/cart");
    }else{
      const action = loginNavigateAction([true]);
      dispatch(action);
      navigate("/"); 
    }
     
  }

  const handlePurchase = () => {
    if(auth.token != undefined && auth.roles == "member") navigate("/user/purchase/type=1");
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
    setLogin(loginNavigate || false);
  }, [loginNavigate]);

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
        <input type="text" placeholder="T??m s???n ph???m..."/>
        <Link to="/shop">
          <GoSearch className="header__search__icon"/>
        </Link>
      </div>
      <div className="header__cart" style={{border:'none'}} onClick={() => {handleCart()}}>
        <div className="shake header__cart__icon">
          <img src={headers["cart.gif"]} alt="shopping_bag" />
          <div className="header__cart__icon__count">
            <p>{cartTotal}</p>
          </div>
        </div>
        <div className="header__cart__icon__lable">
            <p className="header__cart__icon__lable__total">
              {/* {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartTotalPrice)} */}
            </p>
            <p className="header__cart__icon__lable__cart">Gi??? h??ng</p> 
        </div>
      </div>
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
            <input 
              type="text" 
              placeholder="T??m s???n ph???m..."
              onChange={(e) => {handleFilterSearch(e.target.value)}}
            />
            <Link to="/shop">
              <GoSearch className="header__search__icon"/>
            </Link>
        </div>
        {
          (auth.token != undefined && auth.roles == "member") ?
          <div className="header__user">
            {auth.username}
            <ul className="header__user__info">
              <li onClick={handleProfile}>T??i kho???n c???a t??i</li>
              <li onClick={handlePurchase}>????n mua</li>
              <li onClick={handleLogout} >????ng xu???t</li>
            </ul>
          </div>
          :
          <div 
            className="header__guest"
            id="login-register"
            onClick={handleLoginForm}
          >
            ????ng nh???p / ????ng k??
            <hr></hr>
          </div>
        }
        <div to="/cart" className="header__cart" onClick={() => {handleCart()}}>
          <div id="cart-icon" className="header__cart__icon">
            <img src={headers["cart.gif"]} alt="shopping_bag" />
            <div className="header__cart__icon__count">
              <p>{cartTotal}</p>
            </div>
          </div> 
          <div className="header__cart__icon__lable">
              <p className="header__cart__icon__lable__total">
                {/* {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartTotalPrice)} */}
              </p>
              <p className="header__cart__icon__lable__cart">Gi??? h??ng</p>
          </div>
        </div>
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

