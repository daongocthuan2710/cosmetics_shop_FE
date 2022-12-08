import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../../../components/Admin_layout/SideBar";
import Account from "../Account";
import Brand from "../Brand";
import Category from "../Category";
import Order from "../Order";
import Product from "../Product";
import Statistical from "../Statistical";
import Type from "../Type";

function Admin_Home() {
    return (
      <div style={{display: "flex",background: "rgb(240, 240, 240)"}}>
          <SideBar />
          <Routes>
                <Route path="/" element={<Order/>}></Route>
                <Route path="/product" element={<Product />}></Route>
                <Route path="/account" element={<Account />}></Route>
                <Route path="/category" element={<Category />}></Route>
                <Route path="/type" element={<Type/>}></Route>
                <Route path="/brand" element={<Brand />}></Route>
                <Route path="/statistical" element={<Statistical />}></Route>
          </Routes> 
          
      </div>
    );
  }
  
  export default Admin_Home;
  