import React, { useState, useEffect, useMemo} from "react";
import { Container, Row, Col, NavLink, Button } from "react-bootstrap";
import InputSpinner from "react-bootstrap-input-spinner";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../../components/Breadcrumb";
import { breadcrumbList } from "../../../Store/user/breadcrumbSlice";
import {products} from "../../../assets/images/datas/products";
import {errors} from "../../../assets/images/datas/errors";
import {effects} from "../../../assets/images/datas/effects";
import { TiDeleteOutline } from 'react-icons/ti';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { cartTotalAction } from "../../../Store/user/cartSlice";
import { cartListAction } from "../../../Store/user/cartListSlice";
import Swal from 'sweetalert2';
import "./index.scss";


export default function Cart() {
  const cartList = useSelector(state => state.cartList)[0] || [];
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCheckbox, setTotalCheckbox] = useState(false);
  const [totalItem, setTotalItem] = useState(0);
  const handleBreadcrumb = (breadcrumb) => {
    const action = breadcrumbList(breadcrumb);
    dispatch(action);
  }

  useEffect(() =>{
    const breadcrumbList = ['Giỏ Hàng'];
    handleBreadcrumb(breadcrumbList);
    let sum = 0;
    let checkAll = true;
    let quantity = 0;
    let tmp = JSON.parse(localStorage.getItem('cart')) || [];
    if(tmp.length > 0){
      tmp.forEach((item) => {
        if(item.checked)
        {
          sum += item.quantity * (item.discount > 0 ? item.price * (1 - item.discount/100) : item.price);
          setTotalCheckbox(true);
          quantity += 1;
        }
        else{
          checkAll = false;
        }    
      });
      setTotalCheckbox(checkAll);
      setTotalItem(quantity);
    }

    setTotalPrice(sum);
  }, [cartList]);

  const handleCheckQuatity = (quantity,item) => {
    const isSelect = (element) => element.id == item.id;
    let tmp = JSON.parse(localStorage.getItem('cart')) || [];
    const getId = tmp.findIndex(isSelect);
    tmp[getId].quantity = quantity;
    const cartList = cartListAction([tmp]);
    dispatch(cartList);  
    localStorage.setItem('cart', JSON.stringify(tmp));

    if(quantity == 0){
        handleRemove(item);
    }
}

const handleRemove = (item) => {
    let tmp = JSON.parse(localStorage.getItem('cart')) || [];
    const isRemoved = (element) => element.id == item.id;
    const getId = tmp.findIndex(isRemoved);
    tmp.splice( getId, 1);
    const cartTotal= cartTotalAction([tmp.length]);
    dispatch(cartTotal);      

    const cartList = cartListAction([tmp]);
    dispatch(cartList);  
    localStorage.setItem('cart', JSON.stringify(tmp));
}
const handleRemoveAll = () => {
    let tmp = JSON.parse(localStorage.getItem('cart')) || [];

    if(tmp.length > 0)
    {
      Swal.fire({
        title: 'Bạn chắn chứ?',
        text: "Bạn sẽ không thể khôi phục sản phẩm đã xóa!",
        icon: 'warning',
        width: "350px",
        height: "300px",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Chắc chắn!',
        cancelButtonText: 'Hủy'
      }).then((result) => {
        if (result.isConfirmed) {
          tmp.forEach((item) => {
            if(item.checked)
            {
              handleRemove(item);
            } 
          });
          Swal.fire(
            'Xóa thành công!',
            'Giỏ hàng đang trống.',
            'success'
          )
        }
      })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Giỏ hàng đang trống',
      })
    }
}

const handleCheckboxChild  = (e) => {
  const id = e.target.value;
  let tmp = JSON.parse(localStorage.getItem('cart')) || [];
  tmp.forEach(item => {
    if(item.id == id){
      item.checked = e.target.checked;
    } 
  })
  const action = cartListAction([tmp]);
  dispatch(action);  
  localStorage.setItem('cart', JSON.stringify(tmp));
}

const handleCheckbox = (e) => {
  setTotalCheckbox(e.target.checked);
  if(e.target.value == 'all'){
    if(e.target.checked){
      let tmp = JSON.parse(localStorage.getItem('cart'));
      tmp.forEach((item) => {
        item.checked = true;
      });
      const action = cartListAction([tmp]);
      dispatch(action);  
      localStorage.setItem('cart', JSON.stringify(tmp));
    }
    else{
      let tmp = JSON.parse(localStorage.getItem('cart'));
      tmp.forEach((item) => {
        item.checked = false;
      });
      const action = cartListAction([tmp]);
      dispatch(action);  
      localStorage.setItem('cart', JSON.stringify(tmp));
    } 
  }
}


// const totalPrice = useMemo(() => {
//   const result = cartList.reduce((result, prod) =>{
//     return result + prod.price
//   }, 0)

//   return result
// }, [cartList])

  return (
    <>
    <Container className="cart">
      <Row className="cart-breadcrumb">
        <Breadcrumb/>
      </Row>
    {cartList.length > 0
    ?
      <>
        <Row className="cart-nav">
          <Col md={5} style={{color:"black"}}> 
            <Row>
              <Col md={1} className="cart-checkbox">
                <input 
                  value="all"
                  type="checkbox" 
                  className="form-check-input"
                  checked={totalCheckbox}
                  onClick={(e) => handleCheckbox(e)}
                  readOnly
                />
              </Col>
              <Col md={11} className="cart-nav-info">Sản phẩm</Col>
            </Row>
          </Col>
          <Col md={7}>
            <Row className="cart-nav-detail">
              <Col>Đơn Giá</Col>
              <Col>Số Lượng</Col>
              <Col>Số Tiền</Col>
              <Col>Thao tác</Col>
            </Row>
          </Col>
        </Row>
        <Row className="cart-content">
          {cartList.map((item) => (     
              <Row className="cart-item" key={item.id}>
                <Col md={5} style={{color:"black"}}> 
                  <Row>
                    <Col md={1} className="cart-checkbox">
                      <input 
                        id={item.id.toString()}
                        value={item.id}
                        type="checkbox" 
                        className="form-check-input" 
                        onClick={(e) => handleCheckboxChild(e)}
                        checked = {item.checked}     
                        readOnly                                 
                      />
                    </Col>
                    <Col md={11}>
                      <Row className="sidenav__matches__autocomplete-suggestion">
                        <Col
                          xs={3}
                          sm={3}
                          className="sidenav__matches__autocomplete-suggestion__suggestion-thumb"
                        >
                          <NavLink to={`/product/${item.id}`}>
                            <img
                              src={products['mask1.png']}
                              onError={() =>(errors['no_image.jpg'])}
                              className="img-fluid rounded-top"
                              alt={item.name}
                            />
                          </NavLink>
                        </Col>
                        <Col xs={9} sm={9} className=" d-flex align-items-center">
                          <Col
                            xs={12}
                            sm={12}
                            className="sidenav__matches__autocomplete-suggestion__suggestion-title"
                          >
                            <NavLink to={`/product/${item.id}`}>
                              {item.name}
                            </NavLink>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col md={7}> 
                  <Row className="cart-item-detail">
                    <Col className="cart-item-price">
                      {item.discount > 0
                      ?
                      <>
                        <span className="text-decoration-line-through text-secondary">
                          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                        </span>
                        &nbsp; &nbsp;
                        <span className="text-dark fw-bold">
                          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price*(1 - item.discount/100))}
                        </span>
                      </>
                      :
                      <span className="text-dark fw-bold">
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                      </span>
                    }

                    </Col>
                    <Col className="cart-item-quantity">
                      <InputSpinner
                        editable={true}
                        type={"real"}
                        precision={2}
                        // max={10}
                        min={0}
                        step={1}
                        value={item.quantity}
                        onChange={(quantity) => handleCheckQuatity(quantity,item)}
                        variant={"secondary"}
                        size=""
                      />
                    </Col>
                    <Col className="cart-item-total-price">
                      <span className="text-danger fw-bold">
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                          item.quantity * (item.discount > 0 ? item.price * (1 - item.discount/100) : item.price
                          ))}
                      </span>
                    </Col>
                    <Col className="cart-item-handle">
                      <div onClick={() => {handleRemove(item)}}>
                        <TiDeleteOutline/>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row> 
            ))}
        </Row>  
        <Row className="cart-footer">
        <Col md={5} className="cart-handle"> 
            <Row>
              <Col md={1} className="cart-checkbox">
                <input 
                  value="all"
                  type="checkbox" 
                  className="form-check-input"
                  checked={totalCheckbox}
                  onClick={(e) => handleCheckbox(e)}
                  readOnly
                />
              </Col>
              <Col md={6} className="cart-nav-info">Chọn tất cả ({cartList.length})</Col>
              <Col 
                md={3} 
                className="cart-handle-removeAll"
                onClick={() => {handleRemoveAll()}}
              >
                Xóa tất cả
              </Col>
            </Row>
          </Col>
          <Col md={7}>
            <Row className="cart-pay">
              <Col md={8} className="cart-pay-total">
                <span className="cart-pay-total-text">Tổng thanh toán ({totalItem} Sản phẩm): &ensp;</span>
                <span className="cart-pay-total-price">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}
                </span>
              </Col>
              <Col md={4} className="cart-pay-btn">
                <Button>
                  Mua hàng
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </> 
    : <div className="cart-buy-now">
        <img
          src={effects['buy-now.gif']}
          onError={() =>(errors['no_image.jpg'])}
          className="img-fluid rounded-top"
          alt="buy-now.gif"  
        />
    </div>
    }
    </Container>
    </>
  );
}

