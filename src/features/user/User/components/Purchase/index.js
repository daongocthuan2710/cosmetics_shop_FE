import React from "react";
import { useState } from "react";
import { Col, Row, NavLink } from 'react-bootstrap';
import { useSelector } from "react-redux";
import {Outlet} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./index.scss";

export default function UserPurchase() {
  const userInfo = useSelector(state => state.auths);
  const [active, setActive] = useState(Number.parseInt(window.location.pathname.split("=").at(-1)));
  const TYPE = {
    ALL: 1,
    ORDER_WAITING: 2,
    ORDER_CONFIRMED: 3,
    ORDER_RECEIVED: 4,
    DELIVERING: 5,
    DELIVERED: 6, 
    RECEIVED: 7, 
    CANCELLED: 8 
  };
  const navigate = useNavigate();
  const handleChangePurchaseType = (i,event, link) => {
      document.querySelectorAll(".purchase_nav ul li").forEach((e) => {
          e.classList.remove("active");
        });
        setActive(i);
        navigate(link);
    };
 
    return (
      <>
        <div className="purchase">
            <Row>
                <Col md={12} className="purchase_nav">
                    <ul>
                        <li 
                          onClick={(e)=> handleChangePurchaseType(1,e,"/user/purchase/type=1")}
                          className={`${TYPE.ALL === active ? "active" : ""}`} 
                        >
                          <NavLink>Tất cả</NavLink>
                        </li>
                        <li 
                          onClick={(e)=>handleChangePurchaseType(2,e,"/user/purchase/type=2")}
                          className={`${TYPE.ORDER_WAITING === active ? "active" : ""}`}
                        >
                          <NavLink>Chưa xác nhận</NavLink>
                        </li>
                        <li 
                          onClick={(e)=>handleChangePurchaseType(3,e,"/user/purchase/type=3")}
                          className={`${TYPE.ORDER_CONFIRMED === active ? "active" : ""}`}
                        >
                          <NavLink>Đã xác nhận</NavLink>
                        </li>
                        <li 
                          onClick={(e)=>handleChangePurchaseType(4,e,"/user/purchase/type=4")}
                          className={`${TYPE.ORDER_RECEIVED === active ? "active" : ""}`}
                        >
                          <NavLink>Đã nhận đơn</NavLink>
                        </li>
                        <li 
                          onClick={(e)=>handleChangePurchaseType(5,e,"/user/purchase/type=5")}
                          className={`${TYPE.DELIVERING === active ? "active" : ""}`}
                        >
                          <NavLink>Đang giao</NavLink>
                        </li>
                        <li 
                          onClick={(e)=>handleChangePurchaseType(6,e,"/user/purchase/type=6")}
                          className={`${TYPE.DELIVERED === active ? "active" : ""}`}
                        >
                          <NavLink>Đã giao</NavLink>
                        </li>
                        <li 
                          onClick={(e)=>handleChangePurchaseType(7,e,"/user/purchase/type=7")}
                          className={`${TYPE.RECEIVED === active ? "active" : ""}`}
                        >
                          <NavLink>Đã nhận hàng</NavLink>
                        </li>
                        <li 
                          onClick={(e)=>handleChangePurchaseType(8,e,"/user/purchase/type=8")}
                          className={`${TYPE.CANCELLED === active ? "active" : ""}`}
                        >
                          <NavLink>Đã Hủy</NavLink>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className="purchase_content">
                <Outlet/>
            </Row>
        </div>
      </>
    );
  }  