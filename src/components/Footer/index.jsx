import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsAward } from "react-icons/bs";
import { GoGift } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import {headers} from "../../assets/images/datas/headers";
import "./index.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <div className="delivery-section">
          <Container>
            <Row className="d-flex justify-content-between">
              <Col sm={4} className="feature-box">
                <div className="feature-box__inner">
                  <div className="feature-box__icon">
                    <BsAward />
                  </div>
                  <div className="feature-box__content">
                    <p className="sun-delivery-title">
                      <strong>CHẤT LƯỢNG SẢN PHẨM</strong>
                      <br />
                      <strong>ĐẢM BẢO 100%</strong>
                    </p>
                    <hr />
                    <p className="sun-delivery-desc">
                      Tất cả mặt hàng đều có bill order từ nước ngoài
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4} className="feature-box">
                <div className="feature-box__inner">
                  <div className="feature-box__icon">
                    <TbTruckDelivery />
                  </div>
                  <div className="feature-box__content">
                    <p className="sun-delivery-title">
                      <strong>Tích điểm đến 10% hóa đơn</strong>
                      <br />
                      <strong>Đến 10% hóa đơn</strong>
                    </p>
                    <hr />
                    <p className="sun-delivery-desc">
                      Được nhận quà khi đặt hàng online
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4} className="feature-box">
                <div className="feature-box__inner">
                  <div className="feature-box__icon">
                    <GoGift />
                  </div>
                  <div className="feature-box__content">
                    <p className="sun-delivery-title">
                      <strong>Giao hàng toàn quốc</strong>
                    </p>
                    <hr />
                    <p className="sun-delivery-desc">
                      Và hỗ trợ phí ship rẻ nhất cho các quận, tỉnh còn lại.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container fluid className="footer-content">
          <Row className="suntory-footer-1wrap">
            <img src={headers['logo_footer.png']} alt="cosmetic" />
          </Row>
          <Row>
            <div className="intro-cosmetic">
              <p>
                Cosmetic tự hào là một trong những chuỗi cửa hàng mỹ phẩm lớn và
                đáng tin cậy nhất tại Sài Gòn, nơi có thể thỏa mãn niềm đam mê
                trong cuộc chơi phấn son của hàng triệu tín đồ yêu shopping từ
                Nam ra Bắc. Được ưu ái với tên gọi “Thiên Đường Mỹ Phẩm Triệu
                Like”, Cosmetic luôn được xem là mái nhà chung của hàng nghìn
                mặt hàng mỹ phẩm thuộc rất nhiều thương hiệu lớn nhỏ, hội tụ từ
                khắp các quốc gia trên thế giới. Cosmetic luôn sẵn sàng đáp ứng
                mọi nhu cầu làm đẹp cho phái đẹp lẫn phái mạnh mà không cần phải
                lo về giá và chất lượng sản phẩm.
              </p>
            </div>
          </Row>
          <Row className="center-menu">
            <ul className="menu-info">
              <li>
                <a>Hướng dẫn mua hàng</a>
              </li>
              <li>
                <a>Giao hàng - Shipping</a>
              </li>
              <li>
                <a>Cửa hàng</a>
              </li>
              <li>
                <a>Bán sĩ</a>
              </li>
              <li>
                <a>Liên hệ</a>
              </li>
              <li style={{borderRight: '0px'}}>
                <a>Giới thiệu</a>
              </li>
            </ul>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
