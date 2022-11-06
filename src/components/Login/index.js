import React, { useState } from "react";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";
import { loginAction } from "../../reduxToolKit/user/authSlice";
import './index.scss';
import defaultAvatar from "../../assets/images/avatars/default-avatar.png";

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [emailError, setemailError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
      const fetchLogin =  async (body) => {
        try{
          const response = await authApi.login(body);
          localStorage.setItem("token", response.data.token);
          const action = loginAction(response.data);
          dispatch(action);
        } catch(error) {
          console.log("Fail to fetch login", error);
        }
      }
      const loginSubmit = (e) => {
        const body = {
            "username": username,
            "password": password
           }
        e.preventDefault();
        fetchLogin(body);
        props.closeLoginForm();
      };
  return (
  <>
    <div id="login" className={`login ${props.login? "is-login" : ""}`}>
        <div className="container">
        <div className="row d-flex justify-content-center">
            <div id="title"><h3>ĐĂNG NHẬP</h3></div>
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <label>Tên đăng nhập hoặc email <font color="red">*</font></label>
                <input
                  type="text"
                  className="form-control inputText"
                  id="TextInput"
                  name="TextInput"
                  aria-describedby="usernameHelp"
                  onChange={(event) => setUsername(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </div>
              <div className="form-group">
                <label>Mật khẩu <font color="red">*</font></label>
                <input
                  type="password"
                  className="form-control inputText"
                  id="exampleInputPassword1"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <button type="submit" className="btn-submit">
                ĐĂNG NHẬP
              </button>
            </form>
            <div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label"> Nhớ mật khẩu</label>
                </div>
                <div id="forget-password"><a href="#">&#9737; Quên mật khẩu</a></div>
            </div>
            <div id="register-question">
              <img id="img-avatar" src={defaultAvatar} alt="default-avatar"></img>
              <span id="create-account-text">Bạn chưa có tài khoản ? </span>
              <a id="btn-register" href="#">Tạo Tài Khoản</a>
            </div>
        </div>
      </div>
    </div>
    <div 
      className={`overlay ${props.login ? "visible" : ""}`}
      onClick={props.closeLoginForm}
    ></div>
  </>
  );
}

