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


function UserSidebar() {
    const navigate = useNavigate();
    const match = '/user';
    
    return (
      <>
        <div id="userSidebar" className="userSidebar">
            <Container fluid className="userSidebar-wrapper">
                <Row className="userSidebar-wrapper__info"> 
                    <Col md={4} className="userSidebar-wrapper__info__avatar">
                        <img src={avatars["man_avt.png"]} alt="Thuận Đào"/>                       
                    </Col>
                    <Col md={8} className="userSidebar-wrapper__info__content">
                        <Row>
                            <Col md={12} className="userSidebar-wrapper__info__content__userName">
                                daothuan2710
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
                            itemId: `${match}/purchase`,
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