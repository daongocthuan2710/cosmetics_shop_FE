import * as React from "react";
import {Route, Routes, useNavigate } from 'react-router-dom';
import Admin_Home from "../../features/admin/Home/index.js";
import Admin_Login from "../../features/admin/SignIn/index.js";

function Admin_Routes({auth}){
    const navigate = useNavigate();

    React.useEffect(() =>{
        if(auth.token == undefined || auth.roles == "admin"){
            navigate("/admin/login");
        }
      }, []);


    
        return (
            <>
                <Routes>
                    <Route path="/" element={<Admin_Home/>}></Route>
                    <Route path="login" element={<Admin_Login/>}></Route>
                </Routes> 
            </>
        );
}

export default Admin_Routes;