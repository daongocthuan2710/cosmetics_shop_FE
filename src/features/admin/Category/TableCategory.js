import React, { useEffect, useState } from 'react'
import { Button, Pagination, Table } from 'react-bootstrap';
import { FaEdit,FaTrash,FaPlus  } from "react-icons/fa";
import Spinner from 'react-bootstrap/Spinner';
import cateApi from '../../../api/cateApi';

export default function TableCategory() {
    const [page,setPage] = useState({
      currentpage: 1,
      totalpage: 1
    });
    const [cateList,setCateList] = useState([]);
    const [filter,setFilter] = useState({
      
    });
    const [table,setTable] = useState(<><Spinner animation="border" style={{margin: "20vh 30vw", fontSize: "20vw"}} variant='dark'/></>);
    const fetchCates =  async () => {
        try{
          const response = await cateApi.getAll();
          setCateList(response.data);
          setPage({
            currentpage: response.data.number + 1 ,
            totalpage: response.data.totalPages
          })
        } catch(error) {
          console.log("Fail to fetch products", error);
        }
    }
    
      useEffect(() =>{
        fetchCates();
      }, []);

  useEffect(() => {
    if(cateList.length > 0){
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
        cateList.forEach((item) => {
              arr.push(
                <tr key={item.id}>
                  <td>{i}</td>
                  <td>{item.name}</td>
                  <td><FaEdit /></td>
                  <td><FaTrash /></td>
                </tr>
              )
              i+=1;
        });
    
        return (
          <>
            <div style={{}}>
              <input placeholder='Tên danh mục' className='filter-product-item'></input>
              <Button style={{float: "right", margin: "2vh 3vw"}}><FaPlus />Thêm</Button>
            </div>
            <Table striped bordered hover size="sm" className='product-admin-table'>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên danh mục</th>
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
  },[cateList])
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
