import React, { useEffect } from "react";
import { Col, Row, NavLink } from 'react-bootstrap';
import {products} from "../../../../../../../assets/images/datas/products";
import {errors} from "../../../../../../../assets/images/datas/errors";
import { useState } from "react";
import orderApi from "../../../../../../../api/orderApi";
import "./index.scss";
import { Loading } from "notiflix";
import { useSelector } from "react-redux";
import {RiTruckLine} from "react-icons/ri";

export default function AllType(props) {
    const IMAGE_CLOUD = {
        CLOUD_NAME: 'dwwuvc6qo',
        GET_URL: 'https://res.cloudinary.com',
    }
    const userInfo = useSelector(state => state.auths) || [];

    const [orders, setOrders] = useState([]);
    console.log('orders',orders);
    console.log('orders.length',orders.length);
    const fetchOrders =  async (userInfo) => {
        Loading.hourglass({
          clickToClose: true,
          svgSize: "50px",
          svgColor: "rgb(223, 139, 42)",
          backgroundColor: "rgb(255, 255, 255)"
          })
        try{
            const body = {
                token: userInfo.token,
                id: userInfo.id
            }
          const response = await orderApi.getOrdersByAccount(body);
          const data = response.data.content;
          setOrders(data);
        //   if(response.status == 200)
        //   {
        //     setOrders(data);
        //     // if(data.length > 0){
        //     //     let orderList = [];
        //     //     data.forEach(async(item) => {
        //     //         if(props.type == "Tất cả")
        //     //         {
        //     //             console.log(props.type);
        //     //             const body = {
        //     //                 token: userInfo.token,
        //     //                 orderId: item.id
        //     //             }
        //     //             const response = await orderApi.getOrderDetail(body);
        //     //             if(response.status == 200){
        //     //                 let detail = {...item,detail:response.data};
        //     //                 orderList.push(detail);
        //     //             }
        //     //         }

        //     //         if(item.status == props.type)
        //     //         {
        //     //             console.log(props.type);
        //     //             const body = {
        //     //                 token: userInfo.token,
        //     //                 orderId: item.id
        //     //             }
        //     //             const response = await orderApi.getOrderDetail(body);
        //     //             if(response.status == 200){
        //     //                 let detail = {...item,detail:response.data};
        //     //                 orderList.push(detail);
        //     //             }
        //     //         }
        //     //     }) 
        //     //     setOrders(orderList);    
        //     // }
        //   }
        } catch(error) {
          console.log("Fail to fetch orders", error);
        }
        Loading.remove();
    }

    // const fetchOrderDetails =  async (userInfo) => {
    //     try{
    //         const body = {
    //             token: userInfo.token,
    //             orderId: item.id
    //         }
    //         const response = await orderApi.getOrderDetail(body);
    //         const data = response.data.content;
    //     } catch(error) {
    //       console.log("Fail to fetch orders", error);
    //     }
    // }
  
    useEffect(() =>{
    fetchOrders(userInfo);   
    }, []);

    const [imgSrc, setImgSrc] = useState(null);
    return ( 
      <>
        <Col md={12} className="all_type">
            {orders.length > 0
            ?
            orders.map((item) =>{
                return(
                    <Row className="all_type_order" key={item.id}>
                        <Col md={12}>
                            <div className="order-status">
                                {item.status == "Đã nhận hàng" || item.status == "Đã giao"
                                ?
                                <div className="order-status_1">
                                    <span style={{fontSize:"20px"}}><RiTruckLine/></span>&ensp;
                                    Giao hàng thành công
                                </div>
                                :''}

                                <div className="order-status_2">{item.status}</div>
                            </div>
                        </Col>
                        <Col md={12} className="order-detail-list">
                            {item.detail.length > 0
                            ?
                            item.detail.map((itemDetail) =>{
                                return(
                                    <Row className="order-detail-item" key={itemDetail.id}>
                                        <Col xs={10} sm={9}>
                                            <Row>
                                                <Col
                                                    xs={2}
                                                    sm={2}
                                                >
                                                    <NavLink to="/">
                                                        <img
                                                            src={`${IMAGE_CLOUD.GET_URL}/${IMAGE_CLOUD.CLOUD_NAME}/image/upload/${itemDetail.product_image}`}
                                                            onError={() => (setImgSrc(errors['no_image.jpg']))}
                                                            className="img-fluid rounded-top"
                                                            alt="lipstick_1"
                                                        />
                                                    </NavLink>
                                                </Col>
                                                <Col xs={10} sm={10} className="mt-3 all_type_order_detail">
                                                    <Col
                                                        xs={12}
                                                        sm={12}                              
                                                    >
                                                        <NavLink to="/">
                                                        {itemDetail.product_name || ''}
                                                        </NavLink>
                                                    </Col>
                                                    <Col
                                                        xs={12}
                                                        sm={12}
                                                        className="mt-4"
                                                    >
                                                        x{itemDetail.quantity}
                                                    </Col>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={2} sm={3}>
                                            <div className="order-detail-item-price">
                                                {itemDetail.price != itemDetail.cost
                                                ?
                                                <span className="sidenav__matches__autocomplete-suggestion__suggestion-price__woocommerce-Price-amount" style={{color:'grey', textDecoration: 'line-through'}}> 
                                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(itemDetail.cost || 0)}
                                                </span>
                                                :''}
                                                <span className="sidenav__matches__autocomplete-suggestion__suggestion-price__woocommerce-Price-amount" style={{color:'oranged'}}> 
                                                &ensp;{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(itemDetail.price || 0)}
                                                </span>
                                            </div>
                                        </Col>   
                                    </Row>  
                                )
                            })
                            :''}
                     
                        </Col>
                        <Col md={12}>
                            <Row>
                                <Col md={12}>
                                    <div className="order-total">
                                        <span className="order-total-text">Tổng số tiền: &ensp;</span> 
                                        <span className="order-total-price">
                                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.total || 0)}
                                        </span> 
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="order-handle">
                                        {/* <button className="order-handle-rating">
                                            Đánh giá
                                        </button> */}
                                        <button className="order-handle-buy">
                                            Mua lại
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
        
                    </Row>  
                )                 
            })
            :''}
        </Col>
      </>
    );
  }  