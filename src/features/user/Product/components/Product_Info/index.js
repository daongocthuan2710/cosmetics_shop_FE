import React from "react";
import InputSpinner from "react-bootstrap-input-spinner";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import {errors} from "../../../../../assets/images/datas/errors";
import {products} from "../../../../../assets/images/datas/products";
import {useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { loginNavigateAction } from "../../../../../Store/user/loginSlice";
import { cartTotalAction } from "../../../../../Store/user/cartSlice";
import { cartListAction } from "../../../../../Store/user/cartListSlice";
import Swal from 'sweetalert2';
import "./index.scss";

function ProductInfo(props) {
    const IMAGE_CLOUD = {
        CLOUD_NAME: 'dwwuvc6qo',
        GET_URL: 'https://res.cloudinary.com',
    }

    const [imgSrc, setImgSrc] = useState(`${IMAGE_CLOUD.GET_URL}/${IMAGE_CLOUD.CLOUD_NAME}/image/upload/${props.productInfo != undefined ? props.productInfo.image : ''}`);
    const [quantity, setQuantity] = useState(1);
    const auth = useSelector(state => state.auths);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleAddToCart = (item) => {
        if(auth.token == undefined || auth.roles != "member"){
            const action = loginNavigateAction([true]);
            dispatch(action);
            navigate("/"); 
        }
        else{
            const isSelect = (element) => element.id == item.id;
            let cartTmp = JSON.parse(localStorage.getItem('cart')) || [];
            const getId = cartTmp.findIndex(isSelect);
            if(getId >= 0){
                cartTmp[getId].quantity += quantity;
            }
            else{
                const newItem = {...item, quantity: quantity};
                cartTmp = [...cartTmp,newItem];
                const action = cartTotalAction([cartTmp.length]);
                dispatch(action);      
            }
            const action = cartListAction([cartTmp]);
            dispatch(action);  
            localStorage.setItem('cart', JSON.stringify(cartTmp));
            
            Swal.fire({
                position: 'center',
                icon: 'success',
                text: 'Thêm vào giỏ hàng thành công',
                width: '200px',
                height:'200px',
                showConfirmButton: false,
                timer: 1000
              })
        }
    }

    const handleByNow = (item) => {

        if(auth.token == undefined || auth.roles != "member"){
            const action = loginNavigateAction(true);
            dispatch(action);
            navigate("/");
        }
    }
    return ( 
        <div className="card">
            <div 
                className="row" 
            >
                <div className="col-md-6 col-xs-12 card__img">
                    <img
                        src={imgSrc ? imgSrc : products[props.productInfo.image]} 
                        onError={() => (setImgSrc(errors['no_image.jpg']))}
                        className="img-fluid rounded-start"
                        alt={props.productInfo.name}
                    />
                    {props.productInfo.discount > 0
                    ?
                    <div className="promotion">
                        -23%
                    </div>
                    :''}
                </div>
                <div className="col-md-6 col-xs-12 card__body">
                    <div className="card-body basel-scroll-content card__body__info">
                        <h1 className="product-title">
                            {props.productInfo.name}
                        </h1>
                        <p className="price">
                            {props.productInfo.discount > 0
                            ?
                                <>
                                    <span className="origin-price">
                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.productInfo.price)}
                                    </span>
                                    <span className="promotion-price text-danger">
                                        &nbsp; {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.productInfo.price*(1-props.productInfo.discount/100))} &nbsp;                
                                    </span>
                                    <span className="label-deal">Hot deal</span>
                                </>
                            : <span className="promotion-price text-danger">
                                &nbsp; {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.productInfo.price)} &nbsp;                
                              </span>
                        }

                        </p>
                        {/* <div className="value">
                            <select id="pa_tone-mau" defaultValue="0" className="attribute_pa_tone-mau" aria-label="Default select example">
                                <option value="0">Chọn một tùy chọn</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>   
                        </div> */}
                        <Container className="card__body__info__cart" style={{padding:'0'}}>
                            <Row style={{margin:'0'}}>
                                <Col md={4} xs={4} className="quantity">
                                    <InputSpinner
                                        editable={true}
                                        type={"real"}
                                        precision={2}  
                                        max={10}
                                        min={0}
                                        step={1}
                                        value={1}
                                        onChange={(num) => setQuantity(num)}
                                        variant={"secondary"}
                                        size=""
                                    />
                                </Col>
                                <Col md={8} xs={8} className="inventory">
                                    <div> Còn lại 112 sản phẩm</div>
                                </Col>
                            </Row>
                            <Row className="mt-3"> 
                                <Col md={7} xs={7}>
                                    <Button 
                                    className="add-to-cart"
                                        disabled = {quantity == 0 ? true : false}
                                        onClick={() => {handleAddToCart(props.productInfo)}}
                                    >
                                        Thêm Vào Giỏ Hàng
                                    </Button>
                                </Col>
                                <Col md={5} xs={5}>
                                    <Button 
                                        className="buy-now" 
                                        disabled = {quantity == 0 ? true : false}
                                        onClick={() => {handleByNow(props.productInfo)}}
                                    >
                                        Mua Ngay
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                        <hr/>
                        <div className="call-order">
                            <p>
                                <span> Gọi đặt mua và kiểm tra hàng tại cửa hàng: </span> 
                                <span style={{color:"#e74040"}}>0886 838 939</span>
                                </p>
                            <p>hoặc <span style={{color:"#e74040"}}>1900 636 737</span> (Ấn phím 1)</p>
                            <p>Thời gian hoạt động: 9h - 21h</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}   

export default ProductInfo;
