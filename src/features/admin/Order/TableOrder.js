import React, { useEffect, useState } from 'react'
import { Pagination, Table } from 'react-bootstrap';
import { FaEdit,FaTrash  } from "react-icons/fa";
import orderApi from '../../../api/orderApi';
import Spinner from 'react-bootstrap/Spinner';

export default function TableOrder() {
  const [orderList,setorderList] = useState([]);
    const [filter,setFilter] = useState({

    });
    const [table,setTable] = useState(<><Spinner animation="border" style={{margin: "20vh 30vw", fontSize: "20vw"}} variant='dark'/></>);
    const fetchorders =  async () => {
        try{
          const response = await orderApi.getAll();
          setorderList(response.data.content);
        } catch(error) {
          console.log("Fail to fetch orders", error);
        }
      }
    
      useEffect(() =>{
        fetchorders();
      }, []);
  useEffect(() => {
    if(orderList.length != 0){
      const tb = () => {
        let arr = [];
        let i = 1;
        orderList.forEach(element => {
              arr.push(
                <tr>
                  <td>{element.id}</td>
                  <td>{element.created_date}</td>
                  <td>{element.updated_date}</td>
                  <td>{element.paid_status ? "Đã thanh toán" : "Chưa thanh toán"}</td>
                  <td>{element.total}</td>
                  <td>{element.status}</td>
                  <td><FaEdit /></td>
                  <td><FaTrash /></td>
                </tr>
              )
              i+=1;
        });
        return (
          <>
          <div style={{float: "right"}}>
        <input placeholder='Tên sản phẩm' className='filter-product-item'></input>
        <select className='filter-product-item'>
          <option value="" selected>Thương hiệu</option>
        </select>
        <select className='filter-product-item'>
          <option value="" selected>Loại</option>
        </select>
      </div>
          <Table striped bordered hover size="sm" className='product-admin-table'>
            <thead>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Thương hiệu</th>
              <th>Loại</th>
              <th>Tổng</th>
              <th>Trạng thái</th>
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
  },[orderList])
  //pagination
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
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
