import React from "react";
import "./index.scss";
import { Container, Row, Col } from "react-bootstrap";
import { slider } from "../../../../../components/Slider/datas.js";

function Product_Description() {
  return (
    <>
      <Container fluid className="panel">
        <Row>
          <Col className="panel__title">
            <p>Angel’s Liquid Tranexamic Acid Mela Cream (50ml)</p>
          </Col>
        </Row>
        <Row>
          <Col className="panel__intro">
            <p>
              Kem Dưỡng Angel’s Liquid Làm Mờ Nám Chuyên Sâu 50ml là sản phẩm
              serum đến từ thương hiệu mỹ phẩm Angel’s Liquid của Hàn Quốc, với
              thành phần T.X.A, Niacinamide và các chiết xuất cam thảo có khả
              năng làm mờ thâm nám, loại bỏ các đốm nâu, dưỡng sáng da và mờ các
              vết thâm mụn đồng thời hỗ trợ kháng viêm, làm dịu và ngăn ngừa
              kích ứng.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="panel__banner">
            <img src={slider["slide1"]} />
          </Col>
        </Row>
        <Row>
          <Col className="panel__intro">
            <p>
              Sản phẩm thích hợp cho mọi loại da kể cả da nhạy cảm. <br/><br/>
              Đặc biệt dùng được cho phụ nữ mang thai.<br/><br/>   
              Dành cho làn da xỉn màu & thâm sạm. Da xuất hiện các đốm sắc tố:
              tàn nhang, nám,…<br/>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="panel__banner">
            <img src={slider["slide2"]} />
          </Col>
        </Row>
        <Row>
          <Col className="panel__advantage">
            <p>Ưu điểm:</p>
          </Col>
        </Row>
        <Row>
          <Col className="panel__advantage-content">
            <ul>
              <li>
                T.X.A 20.000ppm giảm thâm nám chuyên sâu, làm đều màu, mờ thâm
                mụn và sáng da đồng thời thời giảm mẩn đỏ, kích ứng, kháng viêm
                và xoa dịu làn da tổn thương.<br/><br/>
              </li>
              <li>
                Niacinamide kích thích tổng hợp ceramide, kiểm soát bã nhờn, cải
                thiện lỗ chân lông và làm giảm thâm mụn.<br/><br/>
              </li>
              <li>
                Chiết xuất cam thảo dưỡng sáng da, làm chậm quá trình hình thành
                các sắc tố melanin.<br/><br/>
              </li>
              <li>
                Allantoin giúp làm dịu, bảo vệ da, chữa lành các vết thương mới
                tổn thương trên da, kích thích phát triển mô da mới, phục hồi
                nền da khoẻ mạnh.<br/><br/>
              </li>
              <li>
                Hỗ trợ làm mờ các nếp nhăn, kích thích sản sinh collagen, tăng
                độ đàn hồi và săn chắc cho da.<br/><br/>
              </li>
              <li>
                Thẩm thấu nhanh chóng, không gây cảm giác bết dính, bóng nhờn.<br/>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Product_Description;
