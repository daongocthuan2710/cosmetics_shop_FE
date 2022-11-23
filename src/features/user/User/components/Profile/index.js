import React, { useEffect, useState } from "react";
import { Col, Row, Container } from 'react-bootstrap';
import { useSelector } from "react-redux";
import Avatar from "./components/Avatar";
import ProfileEditForm from "./components/ProfileEditForm";
import { Loading } from "notiflix";
import userApi from "../../../../../api/userApi";
import "./index.scss";
import axios from "axios";
import Swal from "sweetalert2";

export default function UserProfile() {
  const IMAGE_CLOUD = { 
    CLOUD_NAME: 'djjcdcmxz',
    UPLOAD_PRESET: 'oisbbubp',
    API_URL:'https://api.cloudinary.com/v1_1',
    GET_URL: 'https://res.cloudinary.com'
  }

  const userLogin = useSelector(state => state.auths);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [dateOfBirthError, setDateOfBirthError] = useState({error: false, message: ""});
  const [disableSave, setDisableSave] = useState(true);
  const [gender, setGender] = useState(null);
  const [select, setSelect] = useState(false);
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
  const [picture, setPicture] = useState([]);
  const [pictureDataURL, setPictureDataURL] = useState('');
  const [fileName, setFileName] = useState(`${IMAGE_CLOUD.GET_URL}/${IMAGE_CLOUD.CLOUD_NAME}/image/upload/${image}` || '');

  const fetchUserInfo =  async () => {
    Loading.hourglass({
      clickToClose: true,
      svgSize: "50px",
      svgColor: "rgb(223, 139, 42)",
      backgroundColor: "rgb(255, 255, 255)"
      })
    try{
      const body = {
        token : userLogin.token, 
        id : userLogin.id
      };
      const response = await userApi.getUserById(body);
      const userInfo = response.data;
      setUsername(userInfo.firstName + userInfo.lastName);
      setEmail(userInfo.email);
      setGender(userInfo.gender);
      setPhoneNumber(userInfo.phoneNumber);
      setImage(userInfo.image);
      setAddress(userInfo.address);
      setDateOfBirth(userInfo.birthday);

    } catch(error) {
      console.log("Fail to fetch userInfo", error);
    }
    Loading.remove();
  }

  useEffect(() =>{
    fetchUserInfo();
  }, []);

  useEffect(() => {
    setDisableSave(true);
    if (dateOfBirth != null && dateOfBirthError.message == ""
    && username != '' && select == true && email != '')
        setDisableSave(false);
    }, [dateOfBirth, select, username, phoneNumber, email]);

  const handleDateOfBirthCheck = (DOB) => {
    setDateOfBirth(DOB);
    setSelect(true);
    if (new Date(DOB).getFullYear() > (new Date().getFullYear()-16)) {
      setDateOfBirthError({
          error: true,
          message: "Người dùng phải trên 16 tuổi."
      })
    }
    else {
        setDateOfBirthError({error:false,message:""});
      }
  }

  const handleUserName = (username) =>{
    setUsername(username);
    setSelect(true);
  }

  const handleEmail = (email) =>{
    setEmail(email);
    setSelect(true);
  }

  const handleGender = (gender) =>{
    if(gender == true){
      setGender("nam");
    }else{
      setGender("nữ");
    }
    
    setSelect(true);
  }

  const handleOnChangeAvatar = (pictureFiles, pictureDataURLs) => {
    setPicture(pictureFiles);
    setPictureDataURL(pictureDataURLs[0]);
    setSelect(true);
  }

  const handleDropImage = () => {
    setPictureDataURL('');
  }

  const handleFileName = (file) => {
    setFileName(file);
  }

  const handleUpdateUserInfo = async () =>{
    try{
    const body = {
      address: address,
      birthday: dateOfBirth,
      email: email,
      firstName: username,
      gender: gender,
      image: image,
      lastName: 'thuan',
      phoneNumber: phoneNumber,
      token: userLogin.token,
      id: userLogin.id
    }  

      const response = await userApi.UpdateUser(body);
      if(response.status == 200){
        handleUpdateAvatar();
        Swal.fire({
          position: 'center',
          icon: 'success',
          text: 'Cập nhập ảnh đại diện thành công',
          width: '300px',
          height:'300px',
          showConfirmButton: false,
          timer: 1500
        })
      }
      
    } catch(error) {
      console.log("Fail to update userInfo", error);
    }
  }

  const handleUpdateAvatar = () => {
    var formData = new FormData();
		formData.append('file', picture[0]);
		formData.append('upload_preset', IMAGE_CLOUD.UPLOAD_PRESET);

    axios.post(`${IMAGE_CLOUD.API_URL}/${IMAGE_CLOUD.CLOUD_NAME}/image/upload`,formData)
      .then((response) => {
        if(response.data.public_id){
          setPictureDataURL('');      
        }
        else{
        }
      })
      .catch(error => {
        console.log(error);
    });
  }

    return (
      <>
        <Container className="edit-profile">
          <Row>
            <Col md={12} className="edit-profile__top">
              <p className="edit-profile__top__title">Hồ Sơ Của Tôi</p>
              <p className="edit-profile__top__text">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </Col>
            <Col md={12} className="edit-profile__form">
              <Row>
                <Col md={8} className="edit-profile__form__content">
                  <ProfileEditForm 
                    dateOfBirth={dateOfBirth}
                    dateOfBirthError={dateOfBirthError}
                    email={email}
                    username={username}
                    phoneNumber={phoneNumber}
                    disableSave={disableSave}
                    gender={gender}  
                    handleDateOfBirthCheck={handleDateOfBirthCheck}  
                    handleUserName = {handleUserName}
                    handleGender={handleGender}
                    handleEmail={handleEmail}
                    handleUpdateUserInfo={handleUpdateUserInfo}
                  />
                </Col> 
                <Col md={4} className="edit-profile__form__avatar">
                  <Avatar 
                    image={image}
                    username={username}
                    picture={picture}
                    handleOnChangeAvatar={handleOnChangeAvatar}
                    handleDropImage={handleDropImage}
                    fileName={fileName}
                    pictureDataURL={pictureDataURL}
                    handleFileName={handleFileName}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }  