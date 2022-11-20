import React, { Suspense }  from 'react';
import User_Routes from './routes/user_routes/index.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loading } from 'notiflix';
import Admin_Routes from './routes/admin_routes/index.js';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const auth = useSelector(state => state.auths);

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
              <Route path="/admin/*" element={<Admin_Routes auth={auth}/>}></Route>
              <Route path="/*" element={<User_Routes auth={auth}/>}></Route>
          </Routes> 
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
