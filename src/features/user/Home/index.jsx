import React, { useEffect, useState } from "react";
import ProductCarousel from "../../../components/CaroselsComp";
import Slider from "../../../components/Slider";
import productApi from "../../../api/productApi";
import { Loading } from "notiflix";
import cateApi from "../../../api/cateApi";
import './index.scss';

function Home() {
  const [productList, setProductList] = useState([]);
  const [cateList, setCateList] = useState([]);
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
      console.log("Fail to fetch products", error);
    }
    Loading.remove();
  }

  const fetchCates =  async () => {
    Loading.hourglass({
      clickToClose: true,
      svgSize: "50px",
      svgColor: "rgb(223, 139, 42)",
      backgroundColor: "rgb(255, 255, 255)"
      })
    try{
      const response = await cateApi.getAll();
      setCateList(response.data);
    } catch(error) {
      console.log("Fail to fetch cates", error);
    }
    Loading.remove();
  }

  useEffect(() => {
    fetchProducts();
    fetchCates();
  }, []);

  return (
    <>
      <Slider/>      
        <ProductCarousel 
          name={"Khuyến mãi"}
          delay={4000}
          productList={productList}
        />
        <ProductCarousel 
          name={"Trang điểm"}
          delay={7000}
          productList={productList}
        />
        <ProductCarousel 
          name={"Chăm sóc da mặt"}
          delay={5000}
          productList={productList}
        />
        <ProductCarousel 
          name={"Chăm sóc cơ thể"}
          delay={4000}
          productList={productList}
        />
        {cateList.length > 0
        ?
        cateList.map((cate) =>{
          <ProductCarousel 
          name={cate.name}
          delay={8000}
          cateId={cate.id}
        />
        })
        : ''
        }
    </>
  );
}

export default Home;
