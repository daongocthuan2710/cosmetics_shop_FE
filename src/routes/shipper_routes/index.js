import * as React from "react";
import {Route, Routes, useNavigate } from 'react-router-dom';
import Shipper_Home from "../../features/shipper/Home/index.js";
import Shipper_Login from "../../features/shipper/Login/index.js";

function Shipper_Routes({auth}){
    const navigate = useNavigate();

    React.useEffect(() =>{
        if(auth.token == undefined){
            navigate("/shipper/login");
        }else{
            navigate("/shipper");
        }
      }, []); 
        return (
            <>
                <Routes>
                    <Route path="/login" element={<Shipper_Login/>}></Route>
                    <Route path="/*" element={<Shipper_Home />}></Route>
                </Routes> 
            </>
        );
}

export default Shipper_Routes;