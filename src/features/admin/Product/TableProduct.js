import React, { useEffect, useState } from 'react'
import { Button, Pagination, Table } from 'react-bootstrap';
import productApi from '../../../api/productApi';
import { FaEdit,FaTrash,FaPlus  } from "react-icons/fa";
import Spinner from 'react-bootstrap/Spinner';

export default function TableProduct() {
    const [page,setPage] = useState({
      currentpage: 1,
      totalpage: 1
    });
    const [productList,setProductList] = useState([]);
    const [filter,setFilter] = useState({

    });
    const [table,setTable] = useState(<><Spinner animation="border" style={{margin: "20vh 30vw", fontSize: "20vw"}} variant='dark'/></>);
    const fetchProducts =  async () => {
        try{
          const response = await productApi.getAll();
          setProductList(response.data.content);
          setPage({
            currentpage: response.data.number + 1 ,
            totalpage: response.data.totalPages
          })
        } catch(error) {
          console.log("Fail to fetch products", error);
        }
      }
    
      useEffect(() =>{
        fetchProducts();
      }, []);
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
  console.log(page);
      const tb = () => {
        let arr = [];
        let i = 1;
        productList.forEach(element => {
              arr.push(
                <tr>
                  <td>{i}</td>
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
          <div style={{}}>
        <input placeholder='Tên sản phẩm' className='filter-product-item'></input>
        <select className='filter-product-item'>
          <option value="" selected>Thương hiệu</option>
        </select>
        <select className='filter-product-item'>
          <option value="" selected>Loại</option>
        </select>
        <Button style={{float: "right", margin: "2vh 3vw"}}><FaPlus />Thêm</Button>
      </div>
          <Table striped bordered hover size="sm" className='product-admin-table'>
            <thead>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Thương hiệu</th>
              <th>Loại</th>
              <th>Sửa</th>
              <th>Xóa</th>
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
  },[productList])
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
      </div>
  )
}
