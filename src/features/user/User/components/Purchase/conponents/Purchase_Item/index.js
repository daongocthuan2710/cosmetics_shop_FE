import React, { useCallback } from "react";
import { Col, NavLink, Row } from 'react-bootstrap';
import { useState } from "react";
import {RiTruckLine} from "react-icons/ri";
import Skeleton from '@mui/material/Skeleton';
import { errors } from "../../../../../../../assets/images/datas/errors";
import { useSelector } from "react-redux";
import orderApi from "../../../../../../../api/orderApi";
import Swal from "sweetalert2";

function PusrchaseItem(props) {
    const IMAGE_CLOUD = {
        CLOUD_NAME: 'dwwuvc6qo',
        GET_URL: 'https://res.cloudinary.com',
    }
    const userInfo = useSelector(state => state.auths) || [];
    const orders = props.orders || [];
    const [imgSrc, setImgSrc] = useState(null);
    
    const handleCancelOrder = (orderId) =>{
        Swal.fire({
            title: 'Bạn chắc chắn chứ?',
            icon: 'warning',
            width: "350px",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Chắc chắn!',
            cancelButtonText: 'Hủy'
        }).then(async(result) => {
        if (result.isConfirmed) {
            try{
                const body = {
                    orderId: orderId,
                    token: userInfo.token,
                    accountid: userInfo.id,
                    status:7
                }
                const response = await orderApi.updateOrders(body);
    
                if(response.status == 200)
                {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        text: 'Hủy đơn thành công',
                        width: '300px',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    if(props.onForceupdateMethod){
                        setTimeout(
                            () => props.onForceupdateMethod(), 
                            1500
                            );
                    }
                }
            }catch(error) {
                console.log("Fail to update order", error);
                Swal.fire(
                    'Hủy đơn thất bại!',
                    'error'
                )
            }
        }
        })
    }

    const handleReceived = async (orderId) =>{
        try{
            const body = {
                orderId: orderId,
                token: userInfo.token,
                accountid: userInfo.id,
                status:6
            }
            const response = await orderApi.updateOrders(body);

            if(response.status == 200)
            {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    text: 'Nhận đơn thành công',
                    width: '300px',
                    showConfirmButton: false,
                    timer: 1500
                })
                if(props.onForceupdateMethod){
                    setTimeout(
                        () => props.onForceupdateMethod(), 
                        1500
                        );
                }
            }
        }catch(error) {
            console.log("Fail to update order", error);
            Swal.fire(
                'Nhận đơn thất bại!',
                'error'
            )
        }
    }

    const handlePay = (item) =>{
        Swal.fire({
            title: 'Bạn muốn thanh toán đơn hàng này?',
            icon: 'info',
            width: 350,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Thanh toán!',
            cancelButtonText: 'Hủy'
        }).then(async(result) => {
        if (result.isConfirmed) {
            try{
                const body = {
                    orderId: item.id,
                    token: userInfo.token,
                    accountid: userInfo.id,
                    paid_status: true
                }
                const response = await orderApi.updateOrders(body);
                if(response.status == 200)
                {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        text: 'Thanh toán thành công',
                        width: '300px',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    if(props.onForceupdateMethod){
                        setTimeout(
                            () => props.onForceupdateMethod(), 
                            1500
                        );
                    }
                }
            }catch(error) {
                console.log("Fail to update order", error);
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    text: 'Thanh toán thất bại!',
                    width: '300px',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
        })
    }
    
    return ( 
      <>
      {props.loading
        ?
            <Skeleton 
            variant="rectangular" 
            width="100%"
            height={150}
            animation={'pulse'}
            />
        :
            <Col md={12} className="all_type">
                {orders.length > 0
                ?
                orders.map((item) =>{ 
                    return(
                        <Row className="all_type_order" key={`order_${item.id}`}>
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
                                item.detail.map((itemDetail, index) =>{
                                    return(
                                        <Row className="order-detail-item" key={`order_${item.id}-detail_${index}`}>
                                            <Col xs={10} sm={9}>
                                                <Row>
                                                    <Col
                                                        xs={2}
                                                        sm={2}
                                                    >
                                                        <NavLink to="/">
                                                            <img
                                                                src={imgSrc ? imgSrc :`${IMAGE_CLOUD.GET_URL}/${IMAGE_CLOUD.CLOUD_NAME}/image/upload/${itemDetail.product_image}`}
                                                                onError={() => (setImgSrc(errors['no_image.jpg']))}
                                                                className="img-fluid rounded-top"
                                                                alt={itemDetail.product_name || ''}
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
                                            {item.paid_status == true || item.status == "Đã hủy"
                                            ?
                                                ''
                                            :                                             
                                            <>
                                                <button 
                                                    className="order-handle-rating"
                                                    onClick={() => handlePay(item)}
                                                >
                                                    Thanh toán
                                                </button>
                                            </>
                                            }
                                            {item.status == "Đã nhận hàng"
                                            ?
                                            <>
                                                <button className="order-handle-rating">
                                                    Đánh giá
                                                </button>
                                            </>
                                            :''}
                                            {item.status == "Đã giao"
                                            ?
                                                <button 
                                                    className="order-handle-rating"
                                                    onClick={(e) => handleReceived(item.id)}
                                                >
                                                    Xác nhận
                                                </button>
                                            :''}

                                            {item.status == "Chưa xác nhận"
                                            ?
                                            <button 
                                                className="order-handle-buy"
                                                onClick={(e) => handleCancelOrder(item.id)}
                                            >
                                                Hủy đơn
                                            </button>
                                            :''}
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>  
                    )                 
                })
                :''}
            </Col>
        }   
      </>
    );
}  

export default PusrchaseItem;
// export default React.memo(PusrchaseItem);