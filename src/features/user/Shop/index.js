import React, { useEffect, useState }  from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderWrapper from "./components/Header__Wrapper";
import ProductList from "./components/Product_List";
import Sidebar from "./components/Sidebar";
import Pagination from '@mui/material/Pagination';
import Breadcrumb from "../../../components/Breadcrumb";
import productApi from "../../../api/productApi";
import { Loading } from "notiflix";
import { useSelector } from "react-redux";
import "./index.scss";

export default function Shop() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [productList, setProductList] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [size, setSize] = useState(0);
  const [rating, setRating] = useState(0);
  const [priceSort, setPriceSort] = useState('');
  const [filterBrand, setFilterBrand] = useState([]);
  const categoryList = useSelector(state => state.cates);
  const [price, setPrice] = useState([0, 100]);
  const search = Object.values(useSelector(state => state.search))[0] || '';
  const handleNav = () => {
    setIsExpanded(!isExpanded);
  }

  const handlePrice = (price) => {
    setPrice(price);
}
  
  const handleFilterByRating = (value) => {
    setRating(value);
  }

  const handleFilterByBrand = (value, id) => {
    if(value == true){
      setFilterBrand([...filterBrand,id]);
    }else{
      const new_arr = filterBrand.filter(item => item !== id);
      setFilterBrand(new_arr);
    }
  }

  const handlePriceSort = (value) => {
    setPriceSort(value);
  }

  const fetchProducts =  async (body) => {
    try{
      const response = await productApi.getProducts(body);
      setProductList(response.data.content);
      setTotalProducts(response.data.numberOfElements);
      setTotalPages(response.data.totalPages);
      setSize(response.data.size);
      
    } catch(error) {
      console.log("Fail to fetch products", error);
    }
  }

  useEffect(() =>{
    const body ={
      rating : rating,
      priceFrom: price[0] * 10000,
      priceTo: price[1] * 10000,
      sortKey: 'Type',
      sortValue: priceSort,
      brand: filterBrand,
      search: removeAccents(search)
    }
    fetchProducts(body);
  }, [rating, price, priceSort, filterBrand, search]);

  function removeAccents(str) {
    var AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ", "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ"    
    ];
    for (var i=0; i<AccentsMap.length; i++) {
      var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
      var char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    return str;
  }

    return (
      <>
        <Container className="shop">
          <Row>
            <Col md={3} className="shop__sidebar">
              <Sidebar 
                price={price}
                handlePrice={handlePrice}
                categoryList={categoryList}
                handleFilterByBrand={handleFilterByBrand}
                handleFilterByRating={handleFilterByRating}
              />
            </Col>
            <Col md={9} className="shop__wrapper">
              <Row>
                <Breadcrumb/>
              </Row>
              <Row>
                <HeaderWrapper
                  totalProducts={totalProducts}
                  size={size}
                  handlePriceSort={handlePriceSort}
                />
              </Row>
              <Row>
                <ProductList productList={productList}/>
              </Row>
              <Row>
                <Col className="review__body__pagination">
                  <Pagination 
                    count={totalPages} 
                    shape="rounded" 
                    // page= {3}
                    defaultPage={3}
                    // // onChange={handleChange}
                    siblingCount={1} 
                    boundaryCount={1}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        {/* <Sidebar
          isExpanded = {isExpanded}
          openNav = {handleNav}
          closeNav = {handleNav}
        /> */}
      </>
    );
  }  