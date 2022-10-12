import {Card, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { lipstick } from "../../assets/images/datas/lipstick.js";
import {MdOutlineAddShoppingCart} from "react-icons/md";
import "./index.scss";

function CardItem() {
    return (
            <Card className="text-center">
                <Link
                    to={`/product/1`}
                    className="nav-link"
                >
                    <Card.Img
                        variant="top"
                        src={lipstick['lipstick1']}
                    />
                </Link>
                <Card.Body className="card-body">
                    <Card.Title className="text-center text-truncate card-body__title">
                            Son SonSonSon SonS onSonSonSonSo nSonSo nSonSonSonSonS onSonSonS nSonS onSonSon
                    </Card.Title>
                    <Card.Text>
                        son môi
                    </Card.Text>
                    <div className="card-footer bg-transparent">
                        <Card.Text className="card-body__price">
                            <span className="text-decoration-line-through text-secondary ">129,000đ</span>
                            &nbsp; &nbsp;
                            <span className="text-danger fw-bold">87,000đ</span>
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