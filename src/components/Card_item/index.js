import {Card, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import {MdOutlineAddShoppingCart} from "react-icons/md";
import TextRating from "../RatingStar/index.js";
import {products} from "../../assets/images/datas/products";
import {errors} from "../../assets/images/datas/errors";
import "./index.scss";
import React from "react";
import { useState } from "react";

function CardItem(props) {
    const [imgSrc, setImgSrc] = useState(null);

    return (
            <Card className="text-center">
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
                <Card.Body className="card-body">
                    <Card.Title className="text-center multiLineLabel card-body__title">
                            <span className="textMaxLine">
                                {props.productInfo.name}
                            </span>
                    </Card.Title>
                    <div className="Rating">
                        <TextRating value={props.productInfo.rate}/>
                    </div>
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
                </Card.Body>
            </Card>
    );
}
export default CardItem;