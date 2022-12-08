import React, { useEffect, useState } from 'react'
import productApi from '../../../../api/productApi';
import { FaEdit,FaTrash,FaPlus  } from "react-icons/fa";
import Spinner from 'react-bootstrap/Spinner';
import AddNewProduct from '../AddNewProduct';
import { avatars } from '../../../../assets/images/datas/avatars';
import { Button, Form, Container, Row, Col, Pagination, Table } from 'react-bootstrap';
import cateApi from '../../../../api/cateApi';
import typeApi from '../../../../api/typeApi';
import brandApi from '../../../../api/brandApi';
import "./index.scss"

export default function TableProduct() {
    const [page,setPage] = useState({
      currentpage: 1,
      totalpage: 1
    });
    const IMAGE_CLOUD = { 
      CLOUD_NAME: 'dwwuvc6qo',
      GET_URL: 'https://res.cloudinary.com',
  }

    const [modalShow,setModalShow] = useState(false);
    const [productList,setProductList] = useState([]);
    const [cateList,setCateList] = useState([]);
    const [typeList,setTypeList] = useState([]);
    const [brandList,setBrandList] = useState([]);
    const [brandId,setBrandId] = useState([]);
    const [typeId,setTypeId] = useState('');
    const [search,setSearch] = useState('');
    const [table,setTable] = useState(<><Spinner animation="border" style={{margin: "20vh 30vw", fontSize: "20vw"}} variant='dark'/></>);
    
    const fetchProducts =  async (body) => {
        try{
          const response = await productApi.getProducts(body);
          setProductList(response.data.content);
          setPage({
            currentpage: response.data.number + 1 ,
            totalpage: response.data.totalPages
          })
        } catch(error) {
          console.log("Fail to fetch products", error);
        }
      }
    
      const fetchCates =  async () => {
        try{
          const response = await cateApi.getAll();
          setCateList(response.data);
        } catch(error) {
          console.log("Fail to fetch categorys", error);
        }
    }

    const fetchTypes =  async (cateId = 1) => {
        try{
          const response = await typeApi.getTypeByCategoryId(cateId);
          const data = response.data;
          if(response.status == 200){
            setTypeList(data);
          }
        } catch(error) {
          console.log("Fail to fetch types", error);
        }
    }

    const fetchBrands =  async () => {
        try{
          const response = await brandApi.getAll();
          if(response.status){
            setBrandList(response.data);
          }
        } catch(error) {
          console.log("Fail to fetch brands", error);
        }
    }

    function handleType(cateId){
      if(cateId == "all")
      {
        setTypeId('');
      }else{
        fetchTypes(cateId);
      }
        
    }

    function handleSetBrand(brandId){
        if(brandId == 'all'){
          setBrandId([]);
        }
        else{
          setBrandId([brandId])
        }
    }   

    useEffect(() =>{
        fetchCates();
        fetchBrands();
        fetchTypes();
      }, []);

      useEffect(() =>{
        const body ={
          brand: brandId,
          search: search,
          type: typeId
        }
        console.log('body',body);
        fetchProducts(body);
      }, [brandId, search, typeId]);

  useEffect(() => {
    if(productList.length != 0){
      let active = page.currentpage;
      let items = [];
      for (let number = 1; number <= page.totalpage; number++) {
        items.push(
          <Pagination.Item key={number} active={number === active}>
            {number}
          </Pagination.Item>,
        );
    }
    const tb = () => {
      let arr = [];
      let i = 1;
      productList.forEach(element => {
            arr.push(
              <tr key={element.id}>
                <td>{i}</td>
                <td className="img-product">
                  <img 
                  src={`${IMAGE_CLOUD.GET_URL}/${IMAGE_CLOUD.CLOUD_NAME}/image/upload/${element.image}`}
                  onError={() => (() => avatars["default-avatar.png"])}                 
                />
                </td>
                <td>{element.name}</td>
                <td>{element.brand}</td>
                <td>{element.type}</td>
                <td><FaEdit /></td>
                <td><FaTrash /></td>
              </tr>
            )
            i+=1;
      });
      return (
        <>
        <Container>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tên sản phẩm</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Nhập tên sản phẩm" 
                        onChange= {(e) => setSearch(e.target.value)}
                    />
                </Form.Group>
              </Col>
              <Col>
                  <Form.Group className="mb-3">
                      <Form.Label>Chọn danh mục</Form.Label>
                      <Form.Select onChange={(e) => handleType(e.target.value)}>
                        <option value="all" key="all">Tất cả</option>
                          {cateList.length > 0
                          ?
                          cateList.map((item) =>{
                              return(
                                  <option value={item.id} key={item.id}>{item.name}</option>
                              )
                          })
                          : ''

                          }                           
                      </Form.Select>
                  </Form.Group>
              </Col>
              <Col>
                  <Form.Group className="mb-3">
                      <Form.Label>Chọn loại sản phẩm</Form.Label>
                      <Form.Select onChange={(e) => setTypeId(e.target.value)}>
                          {typeList.length > 0
                          ?
                          typeList.map((item) =>{
                              return(
                                  <option value={item.id} key={item.id}>{item.name}</option>
                              )
                          })
                          : ''}   
                      </Form.Select>
                  </Form.Group>
              </Col>
              <Col>
                  <Form.Group className="mb-3">
                      <Form.Label>Chọn thương hiệu</Form.Label>
                      <Form.Select onChange={(e) => handleSetBrand(e.target.value)}>
                      <option value="all" key="all">Tất cả</option>
                          {brandList.length > 0
                          ?
                          brandList.map((item) =>{
                              return(
                                  <option value={item.id} key={item.id}>{item.name}</option>
                              )
                          })
                          :''}
                      </Form.Select>
                  </Form.Group>
              </Col>
              <Col>
                <Button 
                  style={{float: "right", margin: "2vh 3vw"}}
                  onClick={() => setModalShow(true)}
                >
                  <FaPlus />Thêm
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
        <Table striped bordered hover size="sm" className='product-admin-table'>
          <thead>
            <tr>
              <th>STT</th>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Thương hiệu</th>
              <th>Loại</th>
              <th>Sửa</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {arr}
          </tbody>
          </Table>
          <div style={{float: "right", marginRight: "2.5vw"}}>
      <Pagination>{items}</Pagination>
    </div>
          </>
      )
    }
    setTable(tb);
    }
  },[productList, cateList, typeList])
  //pagination
  
  return (
    <div>
      {/* <div style={{float: "right"}}>
        <input placeholder='Tên sản phẩm' className='filter-product-item'></input>
        <select className='filter-product-item'>
          <option value="" selected>Thương hiệu</option>
        </select>
        <select className='filter-product-item'>
          <option value="" selected>Loại</option>
        </select>
      </div> */}
      {table}
      {/* <div style={{float: "right", marginRight: "2.5vw"}}>
        <Pagination>{items}</Pagination>
      </div> */}
        <AddNewProduct
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
      
  )
}
