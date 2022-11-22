import * as React from "react";
import {Route, Routes, useNavigate } from 'react-router-dom';
import Admin_Home from "../../features/admin/Home/index.js";
import Admin_Login from "../../features/admin/SignIn/index.js";

function Admin_Routes({auth}){
    const navigate = useNavigate();

    React.useEffect(() =>{
        // console.log(typeof(auth.token));
        if(auth.token == undefined){
            navigate("/admin/login");
        }else{
            navigate("/admin");
        }
      }, []); 
        return (
            <>
                <Routes>
                    <Route path="/login" element={<Admin_Login/>}></Route>
                    <Route path="/*" element={<Admin_Home/>}></Route>
                </Routes> 
            </>
        );
}

export default Admin_Routes;