import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../../../components/Admin_layout/SideBar";
import Order from "../Order";
import Product from "../Product";

function Admin_Home() {
    return (
      <div style={{display: "flex",background: "rgb(240, 240, 240)"}}>
          <SideBar />
          <Routes>
                <Route path="/" element={<Product />}></Route>
                <Route path="/order" element={<Order/>}></Route>
          </Routes> 
          
      </div>
    );
  }
  
  export default Admin_Home;
  