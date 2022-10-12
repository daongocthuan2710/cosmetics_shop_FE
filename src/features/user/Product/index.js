import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCarousel from "../../../components/CaroselsComp";
import ProductInfo from "./components/Product_Info";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./index.scss";
import Product_Description from "./components/Description";
import Delivery from "./components/Delivery";
import Review from "./components/Review";
import ProductDetail from "./components/Product_detail";
import Breadcrumb from "../../../components/Breadcrumb";

function Product() {
  let productId = Number.parseInt(window.location.href.split("/").at(-1));
  // const [productInfo, setProductInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  const productInfo = {
    category_name: "",
    avgratingstar: "",
    product_id: "1",
    product_photo: "lipstick1",
  };

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
                product_id={productId} 
              />
              <Row>
                <Col md={12} xs={12}> 
                  <Tabs
                    defaultActiveKey="description"
                    id="uncontrolled-tab-example"
                    className="mb-3 tabs-title"
                  >
                    <Tab eventKey="description" title="Description">
                      <Product_Description/>
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
        <ProductCarousel name={"Sản phẩm tương tự"} delay={4000} />
      </div>
    </>
  );
}

export default Product;
