import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authApi from "../../api/authApi";
import { loginAction } from "../../Store/authSlice";
import {avatars} from "../../assets/images/datas/avatars";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './index.scss';

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messError, setMessError] = useState("");

  const dispatch = useDispatch();
    const fetchLogin =  async (body) => {
      try{
        const response = await authApi.login(body);
        localStorage.setItem("token", response.data.token);
        const action = loginAction(response.data);
        dispatch(action);
        props.closeLoginForm();
      } catch(error) {
        console.log("Fail to fetch login",error);
        if (username === "" || password === ""){
          setMessError("Vui lòng nhập đầy đủ tên tài khoản và mật khẩu.");
        }
        else{
          setMessError(error.message || error.response.data.message);
        }       
      }
    }
    const loginSubmit = (e) => {
      const body = {
          "username": username,
          "password": password
          }
      e.preventDefault();
      fetchLogin(body);
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
              </div>
              <div className="form-group">
                <label>Mật khẩu <font color="red">*</font></label>
                <input
                  type="password"
                  className="form-control inputText"
                  id="exampleInputPassword1"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <p className="err-msg">{messError}</p>
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
              <img id="img-avatar" src={avatars['default-avatar.png']} alt="default-avatar"></img>
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

