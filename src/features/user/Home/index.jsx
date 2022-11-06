import React, { useEffect, useState } from "react";
import ProductCarousel from "../../../components/CaroselsComp";
import Slider from "../../../components/Slider";
import productApi from "../../../api/productApi";
import { Loading } from "notiflix";
import './index.scss';

function Home() {
  const [productList, setProductList] = useState([]);

  const fetchProducts =  async () => {
    Loading.hourglass({
      clickToClose: true,
      svgSize: "50px",
      svgColor: "rgb(223, 139, 42)",
      backgroundColor: "rgb(255, 255, 255)"
      })
    try{
      const response = await productApi.getAll();
      setProductList(response.data.content);
    } catch(error) {
      console.log("Fail to fetch category", error);
    }
    Loading.remove();
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Slider/>      
        <ProductCarousel 
          name={"Trang điểm"}
          delay={4000}
          productList={productList}
        />
        <ProductCarousel 
          name={"Bodycare"}
          delay={6000}
          productList={productList}
        />
        <ProductCarousel 
          name={"Skincare"}
          delay={5000}
          productList={productList}
        />
        <ProductCarousel 
          name={"Nước hoa"}
          delay={7000}
          productList={productList}
        />
    </>
  );
}

export default Home;
