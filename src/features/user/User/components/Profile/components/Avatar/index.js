import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import {avatars} from "../../../../../../../assets/images/datas/avatars";
import ImageUploader from "react-images-upload";
import axios from "axios";
import Swal from 'sweetalert2';
import "./index.scss";

function Avatar() {

  const IMAGE_CLOUD = { 
    CLOUD_NAME: 'djjcdcmxz',
    UPLOAD_PRESET: 'oisbbubp',
    API_URL:'https://api.cloudinary.com/v1_1',
    GET_URL: 'https://res.cloudinary.com'
  }

  const [userInfo, setUserInfo] = useState({
    id: 3,
    username: 'Thuận Đào',
    img:'cdlimbv0ljjsiwh3is5w.jpg',
  });
  const [picture, setPicture] = useState([]);
  const [pictureDataURL, setPictureDataURL] = useState('');
  const [disableSave, setDisableSave] = useState(true);
  const [fileName, setFileName] = useState(`${IMAGE_CLOUD.GET_URL}/${IMAGE_CLOUD.CLOUD_NAME}/image/upload/${userInfo.img}`);

  const handleOnChange = (pictureFiles, pictureDataURLs) => {
    setPicture(pictureFiles);
    setPictureDataURL(pictureDataURLs[0]);
    setDisableSave(false);
  }

  const handleDropImage = () => {
    setPictureDataURL('');
    setDisableSave(true);
  }

  const handleUpdateAvatar = () => {
    var formData = new FormData();
		formData.append('file', picture[0]);
		formData.append('upload_preset', IMAGE_CLOUD.UPLOAD_PRESET);

    axios.post(`${IMAGE_CLOUD.API_URL}/${IMAGE_CLOUD.CLOUD_NAME}/image/upload`,formData)
      .then((response) => {
        if(response.data.public_id){
          Swal.fire({
            position: 'center',
            icon: 'success',
            text: 'Cập nhập ảnh đại diện thành công',
            width: '300px',
            height:'300px',
            showConfirmButton: false,
            timer: 1500
          })

          setUserInfo({
            id: 3,
            username: 'Thuận Đào',
            img:`${response.data.public_id}.jpg`,
          })  

          setPictureDataURL('');      
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Lỗi cập nhật ảnh đại diện',
            width: '300px',
            height:'300px',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      .catch(error => {
        console.log(error);
    });
  }

    return (
      <>
        <Row className="upload-avt-form">
            <Col md={12} className="avatar">
              <div className="avatar_container">
                <img 
                  src={pictureDataURL == '' ? fileName : pictureDataURL}
                  onError={() => (setFileName(avatars["default-avatar.png"]))}
                  
                  alt={userInfo.username}
                />
                {
                  pictureDataURL != ''
                  ? <div 
                      className="dropImage"
                      onClick={handleDropImage}
                    >X</div> :''
                }

              </div>
            </Col>
            <Col>
            <ImageUploader
              withIcon={false}
              label=""
              buttonText="Chọn hình ảnh"
              singleImage = {true}
              onChange={handleOnChange}
              imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
              maxFileSize={1048576}
              dataURLKey="data_url"
              fileSizeError=" file size is too big"
            />
            </Col>
            <Col md={12} className="text-file">
                Dung lượng file tối đa 1 MB
                Định dạng: .JPEG, .PNG, .GIF, .SVG
            </Col>
            <Col className="updateImage_btn">
              <button 
                onClick={handleUpdateAvatar}
                disabled={disableSave}
                className="btn btn-primary"
              >Lưu</button>
            </Col>
        </Row>
      </>
    );
  }  

  export default React.memo(Avatar);
