import React, { useEffect, useState } from "react";
import { Button, Card, NavLink } from "react-bootstrap";
import { useDispatch } from "react-redux";
import authApi from "../../../api/authApi";
import { loginAction } from "../../../Store/authSlice";
import avatar from "../../../assets/images/datas/avatars";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { loginAdminAction } from "../../../Store/admin/adminAuthSlice";

function Admin_Login() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messError, setMessError] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(true);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const fetchLogin =  async (body) => {
    setLoading(true);
    try{
      const response = await authApi.login(body);
      if(response.status == 200){
        const auth = response.data;
        if(auth.roles != "admin"){
          setMessError("Đây không phải tài khoản của quản trị viên");
        }
        else{
          localStorage.setItem("admintoken", response.data.token);
          localStorage.setItem("adminid", response.data.id);
          const action = loginAdminAction(response.data);
          dispatch(action);
          navigate("/admin");
        }
      }

    } catch(error) {
      console.log("Fail to fetch login",error);
      setMessError(error.response.data.message || error.message); 
    }
    setLoading(false);
  }

  useEffect (() =>{ 
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
      <div className="admin-login-wrapper">
            <Card className="text-center">
                {/* <Card.Header>
                    <img src={NikeIcon} alt="Nike" className="card-header__logo"/>
                </Card.Header> */}

                <Card.Title className="text-center">
                    Đăng Nhập
                </Card.Title>

                <Card.Body>
                <form className="adminLoginForm">
                  <div className="form-group">
                    <label>Tên đăng nhập hoặc email <font color="red">*</font></label>
                    <input
                      type="text"
                      className="form-control inputText"
                      id="AdminTextInputLogin"
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
                      id="AdminInputPasswordLogin"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                  <p className="err-msg err-admin-login">{messError}</p>
                  <Button 
                    className="btn-submit btn-admin" 
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

                  <div>
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                      />
                      <label className="form-check-label"> Nhớ mật khẩu</label>
                    </div>
                    <div id="forget-password-admin" className="forget-password-admin"><NavLink to=''>&#9737; Quên mật khẩu</NavLink></div>
                </div>
                </form>
                </Card.Body>
            </Card>
      </div>
    );
  }
  
  export default React.memo(Admin_Login);
  