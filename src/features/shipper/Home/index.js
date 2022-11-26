import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../../../components/shipper_layout/SideBar";
import Delivery from "../Delivery";
import Order from "../Order";

function Shipper_Home() {
    return (
      <div style={{display: "flex",background: "rgb(240, 240, 240)"}}>
          <SideBar />
          <Routes>
                <Route path="/delivery" element={<Delivery />}></Route>
                <Route path="/" element={<Order/>}></Route>
          </Routes> 
      </div>
    );
  }
  
  export default Shipper_Home;
  