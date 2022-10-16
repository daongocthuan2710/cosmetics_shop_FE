import React, { useState }  from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderWrapper from "./components/Header__Wrapper";
import ProductList from "./components/Product_List";
import Sidebar from "./components/Sidebar";
import Pagination from '@mui/material/Pagination';
import "./index.scss";
import Breadcrumb from "../../../components/Breadcrumb";

export default function Shop() {
  const [isExpanded, setIsExpanded] = useState(false);

  const openNav = () => {
    setIsExpanded(!isExpanded);
  }
  
  const closeNav = () => {
    setIsExpanded(!isExpanded);
  }
    return (
      <>
        <Container className="shop">
          <Row>
            <Col md={3} className="shop__sidebar">
              <Sidebar/>
            </Col>
            <Col md={9} className="shop__wrapper">
              <Row>
                <Breadcrumb/>
              </Row>
              <Row>
                <HeaderWrapper/>
              </Row>
              <Row>
                <ProductList/>
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
          openNav = {openNav}
          closeNav = {closeNav}
        /> */}
      </>
    );
  }  