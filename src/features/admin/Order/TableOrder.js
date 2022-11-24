import React, { useEffect, useState } from 'react'
import { Pagination, Table } from 'react-bootstrap';
import { FaEdit,FaTrash,FaAdd  } from "react-icons/fa";
import orderApi from '../../../api/orderApi';
import Spinner from 'react-bootstrap/Spinner';
import { Button } from 'bootstrap';
import { Message } from '@mui/icons-material';

export default function TableOrder() {
  const [page,setPage] = useState({
    currentpage: 1,
    totalpage: 1
  });
  const [orderList,setorderList] = useState([]);
  const [isloading,setIsloading] = useState(false);
    const [filter,setFilter] = useState({
    });
    const [table,setTable] = useState(<><Spinner animation="border" style={{margin: "20vh 30vw", fontSize: "20vw"}} variant='dark'/></>);
    const fetchorders =  async () => {
        try{
          const response = await orderApi.getAll();
          setorderList(response.data.content);
          setPage({
            currentpage: response.data.number + 1 ,
            totalpage: response.data.totalPages
          })
        } catch(error) {
          console.log("Fail to fetch orders", error);
        }
      }
    
      useEffect(() =>{
        fetchorders();
      }, [isloading]);
      
  useEffect(() => {
    if(orderList.length != 0){
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
        orderList.forEach(element => {
              arr.push(
                <tr>
                  <td>{element.id}</td>
                  <td>{element.created_date}</td>
                  <td>{element.updated_date}</td>
                  <td>{element.paid_status ? "Đã thanh toán" : "Chưa thanh toán"}</td>
                  <td>{element.total}</td>
                  <td>{element.status}</td>
                  <td><button onClick={() => {updateOrder(element.id)}} style={{padding: "4px", color: "white",backgroundColor: "green",border: "none", borderRadius: "5px"}}>Duyệt</button></td>
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
              <th>ID</th>
              <th>Ngày đặt</th>
              <th>Ngày cập nhật</th>
              <th>Tình trạng</th>
              <th>Tổng</th>
              <th>Trạng thái</th>
              <th>Duyệt</th>
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
  const updateOrder = (id) => {
      const rs = orderApi.confirmOrder(id);
    if(rs.status == 200){
      Message("Cập nhật thành công");
      setIsloading(!isloading);
    }
  }
  return (
    <div>
      {table}
      </div>
  )
}
