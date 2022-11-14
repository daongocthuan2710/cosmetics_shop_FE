import React from "react";
import {Card, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import {MdOutlineAddShoppingCart} from "react-icons/md";
import TextRating from "../RatingStar/index.js";
import {products} from "../../assets/images/datas/products";
import {errors} from "../../assets/images/datas/errors";
import { useState } from "react";
import Skeleton from '@mui/material/Skeleton';
import "./index.scss";

function CardItem(props) {
    const [imgSrc, setImgSrc] = useState(null);
    
    return (
            <Card className="text-center">
                    {props.productInfo != undefined
                    ? 
                    <Link
                    to={`/product/1`}
                    className="nav-link"
                    >
                        <Card.Img
                            variant="top"
                            src={imgSrc ? imgSrc : (products[props.productInfo.image] != undefined ? products[props.productInfo.image] : errors['no_image.jpg'])} 
                            onError={() => (setImgSrc(errors['no_image.jpg']))}
                            alt={props.productInfo.name}
                        />
                    </Link>
                : <Skeleton 
                    variant="rectangular" 
                    width="100%"
                    height={200}
                    animation={'pulse'}
                />} 

                
                <Card.Body className="card-body">
                    <Card.Title className="text-center multiLineLabel card-body__title">
                        {props.productInfo != undefined ? 
                        <span className="textMaxLine">
                            {props.productInfo.name}
                        </span>
                        :
                        <Skeleton 
                            variant="text" 
                            width="80%" 
                            height={20}
                        />}
                    </Card.Title>
                    <div className="Rating">
                        {props.productInfo != undefined 
                        ? <TextRating value={props.productInfo.rate}/> 
                        : <Skeleton 
                            variant="text" 
                            width="80%" 
                            height={20}
                          />
                        }
                    </div>
                    
                        {props.productInfo != undefined
                        ?
                        <>
                        <div className="card-footer bg-transparent">
                            <Card.Text className="card-body__price">
                                <span className="text-decoration-line-through text-secondary ">
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(129000)}
                                </span>
                                &nbsp; &nbsp;
                                <span className="text-danger fw-bold">
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.productInfo.price)}
                                </span>
                            </Card.Text>
                            <NavLink to="/shop" className="card-body__cart">
                                <Card.Text className="bg-transparent fw-bold">
                                    <span>
                                        <MdOutlineAddShoppingCart/>
                                    </span>
                                    &nbsp; &nbsp;
                                    <span>Mua hàng</span>
                                </Card.Text>
                            </NavLink>
                        </div>
                        </>
                        : <Skeleton 
                            variant="text" 
                            width="100%" 
                            height={20}
                            animation={'pulse'}
                            style={{ marginTop: 6 }}
                        />
                        }
                </Card.Body>
            </Card>
    );
}
export default CardItem;