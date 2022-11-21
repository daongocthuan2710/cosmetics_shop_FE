import React, { useState } from "react";
import { useDispatch } from "react-redux";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './index.scss';

export default function Register(props) {

  return (
  <>
    <div id="register" className={`register ${props.register? "is-register" : ""}`}>
        <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="title"><h3>ĐĂNG KÝ</h3></div>
            <form id="registerform">
              <div className="form-group">
                <label>Địa chỉ email <font color="red">*</font></label>
                <input
                  type="text"
                  className="form-control inputText"
                  id="TextInputRegister"
                  name="TextInput"
                  aria-describedby="usernameHelp"
                  
                />
              </div>
              <div className="form-group">
                <label>Mật khẩu <font color="red">*</font></label>
                <input
                  type="password"
                  className="form-control inputText"
                  id="exampleInputPasswordRegister"
                  
                />
              </div>
              <p className="err-msg"></p>
              <button type="submit" className="btn-submit">
                ĐĂNG KÝ
              </button>
            </form>
            <div id="btn-login-wrapper">
              <h3>Login</h3>
              <div>Đăng ký cho trang web này cho phép bạn truy cập trạng thái và lịch sử đơn đặt hàng của mình. 
                Chỉ cần điền vào các trường bên dưới và chúng tôi sẽ sớm thiết lập tài khoản mới cho bạn. 
                Chúng tôi sẽ chỉ yêu cầu bạn cung cấp thông tin cần thiết để thực hiện quy trình mua hàng nhanh hơn và dễ dàng hơn.</div>
              <button type="button" id="btn-login" onClick={() => {props.closeRegisterForm(); props.handleLoginForm()}}>Đăng nhập</button>
            </div>
        </div>
      </div>
    </div>
    <div 
      className={`overlay1 ${props.register ? "visible" : ""}`}
      onClick={props.closeRegisterForm}
    ></div>
  </>
  );
}

