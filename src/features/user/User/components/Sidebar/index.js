import React from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom";
import {MdOutlineModeEditOutline} from "react-icons/md";
import {BiUser} from "react-icons/bi";
import {TbNotes} from "react-icons/tb";
import {RiGift2Line} from "react-icons/ri";
import {Navigation} from 'react-minimal-side-navigation';
import {avatars} from "../../../../../assets/images/datas/avatars";
import "./index.scss";
import { useState } from "react";
import userApi from "../../../../../api/userApi";
import { useEffect } from "react";
import { useSelector } from "react-redux";


function UserSidebar() {
    const IMAGE_CLOUD = { 
        CLOUD_NAME: 'djjcdcmxz',
        UPLOAD_PRESET: 'oisbbubp',
        API_URL:'https://api.cloudinary.com/v1_1',
        GET_URL: 'https://res.cloudinary.com'
    }
    const navigate = useNavigate();
    const match = '/user';
    const auth = useSelector(state => state.auths);
    const [userInfo, setUserInfo] = useState(auth || []);
    const fileName = userInfo.image != undefined ? `${IMAGE_CLOUD.GET_URL}/${IMAGE_CLOUD.CLOUD_NAME}/image/upload/${userInfo.image}` : '';
    
    const fetchUserInfo =  async () => {
        try{
          const body = {
            token : auth.token, 
            id : auth.id
          };
          const response = await userApi.getUserById(body);
          const user = response.data;
          setUserInfo({...user, ...auth});
        } catch(error) {
          console.log("Fail to fetch userInfo", error);
        }
      }

      useEffect(() =>{
        fetchUserInfo();
      }, [auth]);

    return (
      <>
        <div id="userSidebar" className="userSidebar">
            <Container fluid className="userSidebar-wrapper">
                <Row className="userSidebar-wrapper__info"> 
                    <Col md={4} className="userSidebar-wrapper__info__avatar">
                        <img 
                            src={fileName != '' ? fileName : avatars["default-avatar.png"]}
                            alt={userInfo.firstName ? userInfo.firstName : ''}            
                        />  
                    </Col>
                    <Col md={8} className="userSidebar-wrapper__info__content">
                        <Row>
                            <Col md={12} className="userSidebar-wrapper__info__content__userName">
                                {userInfo.firstName ? userInfo.firstName : ''}   
                            </Col>
                            <Col md={12} className="userSidebar-wrapper__info__content__editProfile">
                                <Link to="/user/account/profile">
                                    <MdOutlineModeEditOutline/>
                                    <span>Sửa hồ sơ</span>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="userSidebar-wrapper__navigation">
                    <Navigation
                        activeItemId="/account/profile"
                        onSelect={({itemId}) => {
                            navigate(itemId);
                        }}
                        items={[
                        {
                            title: 'Tài khoản của tôi',
                            itemId:`${match}/account/profile`,
                            elemBefore: () => <BiUser />,
                            subNav: [
                            {
                                title: 'Hồ sơ',
                                itemId: `${match}/account/profile`,
                            },
                            {
                                title: 'Địa chỉ',
                                itemId: `${match}/account/address`,
                            },
                            {
                                title: 'Đổi mật khẩu',
                                itemId: `${match}/account/password`,
                            }
                            ],
                        },
                        {
                            title: 'Đơn mua',
                            itemId: `${match}/purchase/type=1`,
                            elemBefore: () => <TbNotes />,
                        },
                        {
                            title: 'Voucher',
                            itemId: `${match}/voucher-wallet`,
                            elemBefore: () => <RiGift2Line/>,
                        }
                        ]}
                    />
        
                </Row>
            </Container>
        </div>
      </>
    );
}  

export default React.memo(UserSidebar);