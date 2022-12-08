import React, { useEffect, useState } from 'react'
import { Button, Pagination, Table } from 'react-bootstrap';
import productApi from '../../../api/productApi';
import { FaEdit,FaTrash,FaPlus  } from "react-icons/fa";
import Spinner from 'react-bootstrap/Spinner';
import typeApi from '../../../api/typeApi';
import cateApi from '../../../api/cateApi';

export default function TableType() {
    const [page,setPage] = useState({
      currentpage: 1,
      totalpage: 1
    });
    const [typeList,setTypeList] = useState([]);
    const [cateList,setCateList] = useState([]);
    const [filter,setFilter] = useState({

    });
    const [table,setTable] = useState(<><Spinner animation="border" style={{margin: "20vh 30vw", fontSize: "20vw"}} variant='dark'/></>);
    
    const fetchCates =  async () => {
      try{
        const response = await cateApi.getAll();
        const data = response.data;
        if(response.status == 200){
          setCateList(data);
        }
        setPage({
          currentpage: data.number + 1 ,
          totalpage: data.totalPages
        })
      } catch(error) {
        console.log("Fail to fetch products", error);
      }
  }

    const fetchTypes =  async () => {
        try{
          const cateList = [1,2,3,4];
          let tempTypeList = [];

          const response1 = await typeApi.getTypeByCategoryId(cateList[0]);
          const data1 = response1.data;
          if(response1.status == 200){
            data1.forEach((item) =>{
              tempTypeList.push({...item, cateId:cateList[0]});
            })
          }

          const response2 = await typeApi.getTypeByCategoryId(cateList[1]);
          const data2 = response2.data;
          if(response2.status == 200){
            data2.forEach((item) =>{
              tempTypeList.push({...item, cateId:cateList[1]});
            })
          }
          const response3 = await typeApi.getTypeByCategoryId(cateList[2]);
          const data3 = response3.data;
          if(response3.status == 200){
            data3.forEach((item) =>{
              tempTypeList.push({...item, cateId:cateList[2]});
            })
          }
          const response4 = await typeApi.getTypeByCategoryId(cateList[3]);
          const data4 = response4.data;
          if(response4.status == 200){
            data4.forEach((item) =>{
              tempTypeList.push({...item, cateId:cateList[3]});
            })
            setTypeList(tempTypeList);
          }

          setPage({
            currentpage: response4.data.number + 1 ,
            totalpage: response4.data.totalPages
          })
        } catch(error) {
          console.log("Fail to fetch products", error);
        }
    }
    
      useEffect(() =>{
        fetchCates();
        fetchTypes();
      }, []);

  useEffect(() => {
    if(typeList.length != 0){
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
        typeList.forEach(element => {
              arr.push(
                <tr key={element.id}>
                  <td>{i}</td>
                  <td>{cateList[element.cateId - 1].name}</td>
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
        <input placeholder='Tên sản phẩm' className='filter-product-item'></input>
        <select className='filter-product-item' defaultValue="1">
          <option value="1">Thương hiệu</option>
        </select>
        <select className='filter-product-item' defaultValue="1">
          <option value="1">Loại</option>
        </select>
        <Button style={{float: "right", margin: "2vh 3vw"}}><FaPlus />Thêm</Button>
      </div>
          <Table striped bordered hover size="sm" className='product-admin-table'>
            <thead> 
              <tr>
                <th>STT</th>
                <th>Tên danh mục</th>
                <th>Tên loại sản phẩm</th>
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
  },[typeList])
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
