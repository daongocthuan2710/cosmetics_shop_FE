import * as React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home/Home.js.js";

function Admin_Router(){
        return (
            <HashRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
            </Routes> 
        <Footer/>
        </HashRouter>
        );
}

export default Admin_Router;