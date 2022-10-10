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

// Lazy load - Code splitting 
const Home = React.lazy(() => import('../../features/user/Home/index.jsx'));

function User_Routes(){
        return (
            <Suspense fallback={<div>Loading...</div>}>               
                <BrowserRouter>
                <Header/>
                <Routes>  
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/shop" component={Shop}></Route>
                    <Route path="/cart" component={Cart}></Route>
                    <Route path="/product/:id" component={Product}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route component={NotFound}></Route>
                    {/* <Route path="/login" element={<Login/>}></Route> */}
                </Routes> 
                <Footer/>
            </BrowserRouter>
            </Suspense>
        );
}

export default User_Routes;