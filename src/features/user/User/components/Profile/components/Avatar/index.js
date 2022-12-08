import React from "react";
import { Row, Col } from "react-bootstrap";
import {avatars} from "../../../../../../../assets/images/datas/avatars";
import ImageUploader from "react-images-upload";
import "./index.scss";

function Avatar(props) {
  const IMAGE_CLOUD = { 
    CLOUD_NAME: 'djjcdcmxz',
    UPLOAD_PRESET: 'oisbbubp',
    API_URL:'https://api.cloudinary.com/v1_1',
    GET_URL: 'https://res.cloudinary.com'
  }
  const fileName = `${IMAGE_CLOUD.GET_URL}/${IMAGE_CLOUD.CLOUD_NAME}/image/upload/${props.image}`;
    return (
      <>
        <Row className="upload-avt-form">
            <Col md={12} className="avatar">
              <div className="avatar_container">
                <img 
                  src={props.pictureDataURL == '' ? fileName : props.pictureDataURL}
                  onError={() => (props.handleFileName(avatars["default-avatar.png"]))}                 
                />
                {
                  props.pictureDataURL != ''
                  ? <div 
                      className="dropImage"
                      onClick={props.handleDropImage}
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
                onChange={props.handleOnChangeAvatar}
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
        </Row>
      </>
    );
  }  

  export default React.memo(Avatar);
