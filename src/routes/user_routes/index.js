import React, { Suspense, useEffect } from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from "../../features/user/Home/index.jsx";
import About from "../../features/user/About/index.js";
import Shop from "../../features/user/Shop/index.js";
import Cart from "../../features/user/Cart/index.js";
import Product from "../../features/user/Product/index.js";
import Header from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import NotFound from "../../components/NotFound/index.jsx";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import User from "../../features/user/User/index.js";
import UserProfile from "../../features/user/User/components/Profile/index.js";
import ChangePassword from "../../features/user/User/components/Profile/components/Change_Password/index.js";
// Lazy load - Code splitting 
const Home = React.lazy(() => import('../../features/user/Home/index.jsx'));

function User_Routes(){
    const token = localStorage.getItem('token')
    return (
        <Suspense fallback={Loading.dots({
            clickToClose: true,
            svgSize: "50px",
            svgColor: "rgb(0, 0, 0)",
            backgroundColor: "rgb(255, 255, 255)"
            })}>    
            <BrowserRouter>
            <Header/>
            <Routes>  
                <Route path="/" element={<Home/>}></Route>
                <Route path="home" element={<Home/>}></Route>
                <Route path="shop" element={<Shop/>}></Route>
                <Route path="cart" element={<Cart/>}></Route>
                <Route path="product/:id" element={<Product/>}></Route>
                <Route path="about" element={<About/>}></Route>
                {token ? 
                    <Route path="user" element={<User/>}>
                        <Route path="account/profile" element={<UserProfile/>}></Route>
                        <Route path="account/password" element={<ChangePassword/>}></Route>
                    </Route> 
                    : <Route path="*" element={<NotFound/>}></Route>
                }               
                <Route path="/danh-muc/*" element={<Shop/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
                {/* <Route path="/login" element={<Login/>}></Route> */}
            </Routes> 
            <Footer/>
        </BrowserRouter>
        </Suspense>
    );
}

export default User_Routes;