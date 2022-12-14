import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCarousel from "../../../components/CaroselsComp";
import ProductInfo from "./components/Product_Info";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Product_Description from "./components/Description";
import Delivery from "./components/Delivery";
import Review from "./components/Review";
import ProductDetail from "./components/Product_detail";
import Breadcrumb from "../../../components/Breadcrumb";
import productApi from "../../../api/productApi";
import { Loading } from "notiflix";
import "./index.scss";
import { breadcrumbList } from "../../../Store/user/breadcrumbSlice";
import { useDispatch } from "react-redux";

function Product() {
  const [productList, setProductList] = useState([]);

  let productId = Number.parseInt(window.location.href.split("/").at(-1));
  const [productInfo, setProductInfo] = useState({});
  const fetchProductById =  async () => {
    Loading.hourglass({
      clickToClose: true,
      svgSize: "50px",
      svgColor: "rgb(223, 139, 42)",
      backgroundColor: "rgb(255, 255, 255)"
      })
    try{
      const response = await productApi.getProductById(productId);
      setProductInfo(response.data);
    } catch(error) {
      console.log("Fail to fetch category", error);
    }
    Loading.remove();
  }
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

  useEffect(() =>{
    fetchProductById();
    fetchProducts();
  }, []);

  useEffect(() =>{
    handleBreadcrumb(productInfo);
  }, [productInfo]);

  const dispatch = useDispatch();
  const handleBreadcrumb = (item) => {
    if(item.id != undefined)
    {
      const breadcrumb = item != [] ? [item.category, item.type, item.name] : [];
      const action = breadcrumbList(breadcrumb);
      dispatch(action);
    }

  }

  return (
    <>
    <div className="product-item">  
        <Container className="product-item__content">
          <Row className="breadcrumb-wrap">
            <Col>
              <Breadcrumb/>
            </Col>            
          </Row>
          <Row>
            <Col md={9} className="bg-light">
              <ProductInfo 
                productInfo={productInfo} 
              />
              <Row>
                <Col md={12} xs={12}> 
                  <Tabs
                    defaultActiveKey="description"
                    id="uncontrolled-tab-example"
                    className="mb-3 tabs-title"
                  >
                    <Tab eventKey="description" title="Description">
                      <Product_Description description={productInfo.description}/>
                    </Tab>
                    <Tab eventKey="detail" title="Detail">
                      <ProductDetail/>
                    </Tab>
                    <Tab eventKey="review" title="Review (12)">
                      <Review
                        product_id={productId}
                      />
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
            </Col>
            <Col md={3}>
                <Delivery/>
            </Col>
          </Row>
        </Container>
        <ProductCarousel 
          name={"S???n ph???m t????ng t???"} 
          delay={4000} 
          productList={productList}
        />
      </div>
    </>
  );
}

export default Product;
