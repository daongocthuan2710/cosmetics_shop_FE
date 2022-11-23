import React from "react";
import { Col, Row } from "react-bootstrap";
import "./index.scss";

export default function HeaderWrapper(props) {

  return (
      <>
        <Col md={12} className="shop-header d-flex justify-content-between">
              <span>Hiển thị 1–{props.totalProducts < 12 ? props.totalProducts : 12} trong {props.totalProducts} sản phẩm </span>
              {/* <span>Sắp xếp theo</span>
              <div>Khuyến mãi</div>
              <div>Bán chạy</div> */}
              <div>
              <select 
                className="form-select" 
                aria-label="Default select example" 
                defaultValue = "default"
                onChange={(e) => {props.handlePriceSort(e.target.value)}}
              >
                <option value="default">Chọn theo mặc định</option>
                <option value="DESC">Giá từ cao đế thấp</option>
                <option value="ASC">Giá từ thấp đến cao</option>
              </select>
              </div>
        </Col>
      </>
    );
  }

  