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
  const [promotionProduct, setPromotionProduct] = useState([]);
  const [cate1Product, setcate1Product] = useState([]); // Trang điểm
  const [cate2Product, setcate2Product] = useState([]); // Chăm sóc da mặt
  const [cate3Product, setcate3Product] = useState([]); // Chăm sóc da mặt
  const [cate4Product, setcate4Product] = useState([]); // Chăm sóc cơ thể

  const fetchProducts =  async () => {
    Loading.hourglass({ 
      clickToClose: true,
      svgSize: "50px",
      svgColor: "rgb(223, 139, 42)",
      backgroundColor: "rgb(255, 255, 255)"
      })
    try{
      const response = await productApi.getAll();
      const products = response.data.content;
      setProductList(products);

      let tempPromotionProduct = [];
      products.forEach((item) => {
          if(item.discount > 0){
            tempPromotionProduct.push(item);
          }
      });
      setPromotionProduct(tempPromotionProduct);
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
      const cates = response.data;
      setCateList(cates);
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
          productList={promotionProduct}
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
        {/* {cateList.length > 0
        ?
        cateList.map((cate) =>{
          return(
          <div key={cate.id} style={{marginTop:"-30px"}}>
            <ProductCarousel 
            name={cate.name}
            delay={4000}
            productList={productList}
          />;
        </div>
        )})
        : ''
        } */}
    </>
  );
}

export default Home;
