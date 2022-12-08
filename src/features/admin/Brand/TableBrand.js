import React, { useEffect, useState } from 'react'
import { Button, Pagination, Table } from 'react-bootstrap';
import productApi from '../../../api/productApi';
import { FaEdit,FaTrash,FaPlus  } from "react-icons/fa";
import Spinner from 'react-bootstrap/Spinner';
import brandApi from '../../../api/brandApi';

export default function TableBrand() {
    const [page,setPage] = useState({
      currentpage: 1,
      totalpage: 1
    });
    const [brandList,setBrandList] = useState([]);
    const [filter,setFilter] = useState({

    });
    const [table,setTable] = useState(<><Spinner animation="border" style={{margin: "20vh 30vw", fontSize: "20vw"}} variant='dark'/></>);
    const fetchBrands =  async () => {
        try{
          const response = await brandApi.getAll();
          if(response.status){
            setBrandList(response.data);
          }
          
          setPage({
            currentpage: response.data.number + 1 ,
            totalpage: response.data.totalPages
          })
        } catch(error) {
          console.log("Fail to fetch brands", error);
        }
    }
    
      useEffect(() =>{
        fetchBrands();
      }, []);

  useEffect(() => {
    if(brandList.length != 0){
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
        brandList.forEach(element => {
              arr.push(
                <tr key={element.id}>
                  <td>{i}</td>
                  <td>{element.name}</td>
                  <td><FaEdit /></td>
                  <td><FaTrash /></td>
                </tr>
              )
              i+=1;
        });
        return (
          <>
          <div style={{}}>
        {/* <input placeholder='Tên sản phẩm' className='filter-product-item'></input> */}
        <Button style={{float: "right", margin: "2vh 3vw"}}><FaPlus />Thêm</Button>
      </div>
          <Table striped bordered hover size="sm" className='product-admin-table'>
            <thead> 
              <tr>
                <th>STT</th>
                <th>Tên loại thương hiệu</th>
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
  },[brandList])
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
