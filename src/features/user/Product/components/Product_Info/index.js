import React from "react";
import InputSpinner from "react-bootstrap-input-spinner";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import {errors} from "../../../../../assets/images/datas/errors";
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
    const productInfo = props.productInfo || [];
    const imgSrc = `${IMAGE_CLOUD.GET_URL}/${IMAGE_CLOUD.CLOUD_NAME}/image/upload/${productInfo != undefined ? productInfo.image: ''}`;
    const [quantity, setQuantity] = useState(1);
    const auth = useSelector(state => state.auths); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        console.log('item',item);
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
                cartTmp[getId].cart_quantity += quantity;
            }
            else{
                const newItem = {...item, cart_quantity: quantity};
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

    const handleCheckQuantity = (quantity) => {
        if(quantity == 0 || quantity > productInfo.quantity){
            return true;
        }
        return false;
    }

    return ( 
        <div className="card">
            <div 
                className="row" 
            >
                <div className="col-md-6 col-xs-12 card__img">
                    <img
                        src={imgSrc != '' ? imgSrc : errors['no_image.jpg']} 
                        // onError={() => (setImgSrc(errors['no_image.jpg']))}
                        className="img-fluid rounded-start"
                        alt={productInfo.name}
                    />
                    {productInfo.discount > 0 
                    ?
                    <div className="promotion">
                        {productInfo != undefined ? productInfo.discount : 0}%
                    </div>
                    :''}
                </div>
                <div className="col-md-6 col-xs-12 card__body">
                    <div className="card-body basel-scroll-content card__body__info">
                        <h1 className="product-title">
                            {productInfo.name}
                        </h1>
                        <p className="price">
                            {productInfo.discount > 0
                            ?
                                <>
                                    <span className="origin-price">
                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(productInfo.price)}
                                    </span>
                                    <span className="promotion-price text-danger">
                                        &nbsp; {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(productInfo.price*(1-productInfo.discount/100))} &nbsp;                
                                    </span>
                                    <span className="label-deal">Hot deal</span>
                                </>
                            : <span className="promotion-price text-danger">
                                &nbsp; {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(productInfo.price)} &nbsp;                
                              </span>
                        }
                        </p>
                        <Container className="card__body__info__cart" style={{padding:'0'}}>
                            <Row style={{margin:'0'}}>
                                <Col md={4} xs={4} className="quantity">
                                    <InputSpinner
                                        editable={true}
                                        type={"real"}
                                        precision={2}  
                                        // max={10}
                                        min={0}
                                        step={1}
                                        value={1}
                                        onChange={(num) => setQuantity(num)}
                                        variant={"secondary"}
                                        size=""
                                    />
                                </Col>
                                <Col md={8} xs={8} className="inventory">
                                    <div> Còn lại {productInfo.quantity || 0} sản phẩm</div>
                                </Col>
                            </Row>
                            <Row className="mt-3"> 
                                <Col md={7} xs={7}>
                                    <Button 
                                    className="add-to-cart"
                                        disabled = {handleCheckQuantity(quantity)}
                                        onClick={() => {handleAddToCart(productInfo)}}
                                    >
                                        Thêm Vào Giỏ Hàng
                                    </Button>
                                </Col>
                                <Col md={5} xs={5}>
                                    <Button 
                                        className="buy-now" 
                                        disabled = {handleCheckQuantity(quantity)}
                                        onClick={() => {handleByNow(productInfo)}}
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

export default React.memo(ProductInfo);
