import React from "react";
import { Row, Col } from "react-bootstrap";
import {avatars} from "../../../../../../../assets/images/datas/avatars";
import ImageUploader from "react-images-upload";
import "./index.scss";

function Avatar(props) {
  
    return (
      <>
        <Row className="upload-avt-form">
            <Col md={12} className="avatar">
              <div className="avatar_container">
                <img 
                  src={props.pictureDataURL == '' ? props.fileName : props.pictureDataURL}
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
