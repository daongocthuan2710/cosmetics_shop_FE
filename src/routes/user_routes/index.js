import React, { Suspense } from "react";

import {Route, Routes} from 'react-router-dom';
// import Home from "../../features/user/Home/index.jsx";
import About from "../../features/user/About/index.js";
import Shop from "../../features/user/Shop/index.js";
import Cart from "../../features/user/Cart/index.js";
import Product from "../../features/user/Product/index.js";
import Header from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import NotFound from "../../components/NotFound/index.jsx";
import User from "../../features/user/User/index.js";
import UserProfile from "../../features/user/User/components/Profile/index.js";
import ChangePassword from "../../features/user/User/components/Profile/components/Change_Password/index.js";
import UserPurchase from "../../features/user/User/components/Purchase/index.js";
import AllType from "../../features/user/User/components/Purchase/conponents/AllType/index.js";
import WaitForConfirmation from "../../features/user/User/components/Purchase/conponents/WaitForConfirmation/index.js";
import WaitingForTaking from "../../features/user/User/components/Purchase/conponents/WaitingForTaking/index.js";
import Delivering from "../../features/user/User/components/Purchase/conponents/Delivering/index.js";
import Delivered from "../../features/user/User/components/Purchase/conponents/Delivered/index.js";
import Cancelled from "../../features/user/User/components/Purchase/conponents/Cancelled/index.js";
// Lazy load - Code splitting 
const Home = React.lazy(() => import('../../features/user/Home/index.jsx'));

function User_Routes({auth}){

    return (  
        <>
            <Header/>
                <Routes>  
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="home" element={<Home/>}></Route>
                        <Route path="shop" element={<Shop/>}></Route>
                        <Route path="product/:id" element={<Product/>}></Route>
                        <Route path="about" element={<About/>}></Route>
                        {(auth.token != undefined && auth.roles == "member") ? 
                        <>
                            <Route path="cart" element={<Cart/>}></Route>
                            <Route path="user" element={<User/>}>
                                <Route path="account/profile" element={<UserProfile/>}></Route>
                                <Route path="account/password" element={<ChangePassword/>}></Route>
                                <Route path="purchase" element={<UserPurchase/>}>
                                    <Route path="type=1" element={<AllType type={"Tất cả"}/>}></Route>
                                    <Route path="type=2" element={<AllType type={"Chưa xác nhận"}/>}></Route>
                                    <Route path="type=3" element={<AllType type={"Đã xác nhận"}/>}></Route>
                                    <Route path="type=4" element={<AllType type={"Đã nhận đơn"}/>}></Route>
                                    <Route path="type=5" element={<AllType type={"Đang giao"}/>}></Route>
                                    <Route path="type=6" element={<AllType type={"Đã giao"}/>}></Route>
                                    <Route path="type=7" element={<AllType type={"Đã nhận hàng"}/>}></Route>
                                    <Route path="type=8" element={<AllType type={"Đã hủy"}/>}></Route>
                                </Route>
                            </Route> 
                        </>
                            : <Route path="*" element={<NotFound/>}></Route>
                        }               
                        <Route path="/danh-muc/*" element={<Shop/>}></Route>
                        <Route path="*" element={<NotFound/>}></Route>
                </Routes>   
            <Footer/>
        </>

    );
}

export default User_Routes;