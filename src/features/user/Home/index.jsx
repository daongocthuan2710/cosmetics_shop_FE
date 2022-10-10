import React from "react";
import ProductCarousel from "../../../components/CaroselsComp";
// import {Route, Routes, useMatch  } from 'react-router-dom';
// import NotFound from "../../../components/NotFound";
import Slider from "../../../components/Slider";
import './index.scss';
function Home() {
  // const match = useMatch (); 
  // console.log({match});
  return (
    <>
      <Slider/>      
        <ProductCarousel 
          name={"Trang điểm"}
          delay={4000}
        />
        <ProductCarousel 
          name={"Bodycare"}
          delay={6000}
        />
        <ProductCarousel 
          name={"Skincare"}
          delay={5000}
        />
        <ProductCarousel 
          name={"Nước hoa"}
          delay={7000}
        />
    </>

    // <Switch>  
    //   <Route exact path={match.url} component={MainPage}></Route>
    //   <Route path={`${match.url}/add`} component={AddEditPage}></Route>
    //   <Route path={`${match.url}/:ProductId`} component={AddEditPage}></Route>
    //   <Route component={NotFound}></Route>
    // </Switch> 
  );
}

export default Home;
