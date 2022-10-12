import React, { Suspense } from "react";

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
// Lazy load - Code splitting 
const Home = React.lazy(() => import('../../features/user/Home/index.jsx'));

function User_Routes(){
        return (
            <Suspense fallback={Loading.dots({
                clickToClose: true,
                svgSize: "50px",
                svgColor: "rgb(220, 176, 93)",
                backgroundColor: "rgba(255, 255, 255, 0.44)"
              })}>    
              {Loading.remove()}           
                <BrowserRouter>
                <Header/>
                <Routes>  
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/shop" element={<Shop/>}></Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                    <Route path="/product/:id" element={<Product/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route element={<NotFound/>}></Route>
                    {/* <Route path="/login" element={<Login/>}></Route> */}
                </Routes> 
                <Footer/>
            </BrowserRouter>
            </Suspense>
        );
}

export default User_Routes;