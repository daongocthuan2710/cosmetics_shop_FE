import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsAward } from "react-icons/bs";
import { GoGift } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import "./index.scss";

function Delivery() {
  return (
    <>
        <Container className="delivery">
            <Row style={{width:'100%'}}>
                <Col style={{padding:'0'}}>
                  <ul className="benifit-icon">
                    <li className="icon_list_item">
                      <Link>
                        <Row style={{width:'100%'}}>
                            <Col md={2} xs={2} className="icon_custom">
                                <BsAward/>
                            </Col>
                            <Col md={10} xs={10} className="icon_description_text">
                            <p className="delivery-tilte">HÀNG CHÍNH HÃNG 100%</p>
                            <p className="delivery-desc">Tất cả mặt hàng đều có bill order từ nước ngoài</p>
                            </Col>   
                        </Row>     
                      </Link>
                    </li>
                    <li className="icon_list_item">
                      <Link>
                      <Row style={{width:'100%'}} >
                            <Col md={2} xs={2} className="icon_custom">
                                <GoGift/>
                            </Col>
                            <Col md={10} xs={10} className="icon_description_text">
                            <p className="delivery-tilte">TÍCH ĐIỂM ĐẾN 10% KHI MUA TẠI CỬA HÀNG</p>
                            <p className="delivery-desc">Và tặng quà khi mua online</p>
                            </Col>   
                        </Row>     
                      </Link>
                    </li>
                    <li className="icon_list_item">
                      <Link>
                        <Row style={{width:'100%'}}>
                            <Col md={2} xs={2} className="icon_custom">
                                <TbTruckDelivery/>
                            </Col>
                            <Col md={10} xs={10} className="icon_description_text">
                            <p className="delivery-tilte"> GIAO HÀNG TOÀN QUỐC</p>
                            <p className="delivery-desc">Và hỗ trợ phí ship rẻ nhất cho các quận, tỉnh còn lại.</p>
                            </Col>  
                        </Row>      
                      </Link>
                    </li>
                    <li className="icon_list_item">
                      <Link>
                        <Row style={{width:'100%', margin:'0 !important'}}>
                            <Col md={2} xs={2} className="icon_custom">
                                <AiOutlineHome/>
                            </Col>
                            <Col md={10} xs={10} className="icon_description_text">
                            <p className="delivery-tilte">HỆ THỐNG 7 CỬA HÀNG THUẬN TIỆN MUA SẮM </p>
                            </Col>  
                        </Row>      
                      </Link>
                    </li>
                  </ul>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default Delivery;
