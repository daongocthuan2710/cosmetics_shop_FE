import React, { useEffect, useState }  from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderWrapper from "./components/Header__Wrapper";
import ProductList from "./components/Product_List";
import Sidebar from "./components/Sidebar";
import Pagination from '@mui/material/Pagination';
import Breadcrumb from "../../../components/Breadcrumb";
import productApi from "../../../api/productApi";
import { Loading } from "notiflix";
import { useSelector } from "react-redux";
import "./index.scss";

export default function Shop() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [productList, setProductList] = useState([]);
  const categoryList = useSelector(state => state.cates);
  const handleNav = () => {
    setIsExpanded(!isExpanded);
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
      console.log("Fail to fetch category", error);
    }
    Loading.remove();
  }

  useEffect(() =>{
    fetchProducts();
  }, []);

    return (
      <>
        <Container className="shop">
          <Row>
            <Col md={3} className="shop__sidebar">
              <Sidebar categoryList={categoryList}/>
            </Col>
            <Col md={9} className="shop__wrapper">
              <Row>
                <Breadcrumb/>
              </Row>
              <Row>
                <HeaderWrapper/>
              </Row>
              <Row>
                <ProductList productList={productList}/>
              </Row>
              <Row>
                <Col className="review__body__pagination">
                  <Pagination 
                    count={10} 
                    shape="rounded" 
                    // page= {3}
                    defaultPage={3}
                    // // onChange={handleChange}
                    siblingCount={1} 
                    boundaryCount={1}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        {/* <Sidebar
          isExpanded = {isExpanded}
          openNav = {handleNav}
          closeNav = {handleNav}
        /> */}
      </>
    );
  }  