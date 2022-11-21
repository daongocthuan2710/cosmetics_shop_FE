import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authApi from "../../api/authApi";
import { loginAction } from "../../Store/authSlice";
import {avatars} from "../../assets/images/datas/avatars";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './index.scss';
import { Button } from "react-bootstrap";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messError, setMessError] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(true);

  const dispatch = useDispatch();
    const fetchLogin =  async (body) => {
      setLoading(true);
      try{
        const response = await authApi.login(body);
        if(response.status == 200){
          const auth = response.data;
          if(auth.roles != "member"){
            setMessError("Đây không phải tài khoản của người dùng");
          }
          else{
            localStorage.setItem("token", response.data.token);
            const action = loginAction(response.data);
            dispatch(action);
            props.closeLoginForm();
          }
        }

      } catch(error) {
        console.log("Fail to fetch login",error);
        setMessError(error.response.data.message || error.message); 
      }
      setLoading(false);
    }

    useEffect(() =>{ 
      if (username === "" || password === ""){
        setDisableSubmit(true);
      }
      else{
        setDisableSubmit(false);
      }
    }, [username,password]);

    const loginSubmit = () => {
      if (username === "" || password === ""){
        setMessError("Vui lòng nhập đầy đủ tên tài khoản và mật khẩu.");
      }
      else{
        const body = {
          "username": username,
          "password": password
          }
        fetchLogin(body);
      }    
    };

  return (
  <>
    <div id="login" className={`login ${props.login? "is-login" : ""}`}>
        <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="title"><h3>ĐĂNG NHẬP</h3></div>
            <form id="loginform">
              <div className="form-group">
                <label>Tên đăng nhập hoặc email <font color="red">*</font></label>
                <input
                  type="text"
                  className="form-control inputText"
                  id="TextInputLogin"
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
                  id="exampleInputPasswordLogin"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <p className="err-msg">{messError}</p>
              <Button 
                className="btn-submit" 
                onClick={() => {loginSubmit()}}
                disabled={disableSubmit}
              >
                {loading ? 
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> &ensp; 
                </>
                : ''}
                ĐĂNG NHẬP
              </Button>
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
              <a id="btn-register" onClick={() => {props.closeLoginForm(); props.handleRegisterForm()}}>Tạo Tài Khoản</a>
            </div>
        </div>
      </div>
    </div>
    <div
      className={`overlay ${props.register ? "visible" : (props.login ? "visible" : "")}`}
      onClick={props.closeLoginForm}
    ></div>
  </>
  );
}

export default React.memo(Login);