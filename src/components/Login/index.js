import React, { useState } from "react";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";
import { loginAction } from "../../reduxToolKit/user/authSlice";
import './index.scss';

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
          navigate("/");
          console.log('action',action);
        } catch(error) {
          console.log("Fail to fetch login", error);
        }
      }
      const loginSubmit = (e) => {
        // const body = {
        //     "username": "lenhan",
        //     "password": "Test123@"
        //    }
        const body = {
            "username": username,
            "password": password
           }
        e.preventDefault();
        // handleValidation();
        fetchLogin(body);
        props.closeLoginForm();
      };
  return (
  <> 
    <div id="login" className={`login ${props.login? "is-login" : ""}`}>
        <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="TextInput"
                  name="TextInput"
                  aria-describedby="usernameHelp"
                  placeholder="Enter username"
                  onChange={(event) => setUsername(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
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

