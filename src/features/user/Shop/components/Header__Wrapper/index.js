import React from "react";
import { Col, Row } from "react-bootstrap";
import Breadcrumb from "../../../../../components/Breadcrumb";
import "./index.scss";

export default function HeaderWrapper() {

    return (
      <>
        <Col md={12} className="shop-header d-flex justify-content-between">
              <span>Showing 1–12 of 309 results</span>
              <span>Sắp xếp theo</span>
              <div>Khuyến mãi</div>
              <div>Bán chạy</div>
              <div>Giá</div>
        </Col>
      </>
    );
  }

  