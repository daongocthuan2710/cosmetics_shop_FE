import React, { Suspense }  from 'react';
import User_Routes from './routes/user_routes/index.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loading } from 'notiflix';
import Admin_Routes from './routes/admin_routes/index.js';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Shipper_Routes from './routes/shipper_routes/index.js';

function App() {
  const auth = useSelector(state => state.auths);
  const adminAuth = useSelector(state => state.adminAuth);
  const shipperAuth  = useSelector(state => state.shipperAuth);
  return (   
    <Suspense fallback={
      Loading.hourglass({
      clickToClose: true,  
      svgSize: "50px",
      svgColor: "rgb(223, 139, 42)",
      backgroundColor: "rgb(255, 255, 255)"
})}> 
    {Loading.remove()}   
      <BrowserRouter>
          <Routes>  
              <Route path="/admin/*" element={<Admin_Routes auth={adminAuth}/>}></Route>
              <Route path="/shipper/*" element={<Shipper_Routes auth={shipperAuth}/>}></Route>
              <Route path="/*" element={<User_Routes auth={auth}/>}></Route>
          </Routes> 
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
