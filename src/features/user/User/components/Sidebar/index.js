import React from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../../../../../assets/images/avatars/man_avt.png";
import {Link} from "react-router-dom";
import {MdOutlineModeEditOutline} from "react-icons/md";
import {BiUser} from "react-icons/bi";
import {TbNotes} from "react-icons/tb";
import {RiGift2Line} from "react-icons/ri";
import {Navigation} from 'react-minimal-side-navigation';
import "./index.scss";


export default function UserSidebar() {
    const navigate = useNavigate();
    const match = '/user';
    
    return (
      <>
        <div id="userSidebar" className="userSidebar">
            <Container fluid className="userSidebar-wrapper">
                <Row className="userSidebar-wrapper__info"> 
                    <Col md={4} className="userSidebar-wrapper__info__avatar">
                        <img src={avatar} alt="Thuận Đào"/>                       
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
                            title: 'My Account',
                            itemId:`${match}/account/profile`,
                            elemBefore: () => <BiUser />,
                            subNav: [
                            {
                                title: 'Profile',
                                itemId: `${match}/account/profile`,
                            },
                            {
                                title: 'Address',
                                itemId: `${match}/account/address`,
                            },
                            {
                                title: 'Change Password',
                                itemId: `${match}/account/password`,
                            }
                            ],
                        },
                        {
                            title: 'Purchase',
                            itemId: '/purchase',
                            elemBefore: () => <TbNotes />,
                        },
                        {
                            title: 'Voucher',
                            itemId: '/voucher-wallet',
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