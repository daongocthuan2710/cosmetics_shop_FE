import React, { useEffect, useState } from 'react'
import { Pagination, Table } from 'react-bootstrap';
import { FaEdit,FaTrash,FaAdd  } from "react-icons/fa";
import accountApi from '../../../api/accountApi';
import Spinner from 'react-bootstrap/Spinner';

export default function TableAccount() {
    const [page,setPage] = useState({
        currentpage: 1,
        totalpage: 1
      });
      const [accountList,setaccountList] = useState([]);
        const [filter,setFilter] = useState({
    
        });
        const [table,setTable] = useState(<><Spinner animation="border" style={{margin: "20vh 30vw", fontSize: "20vw"}} variant='dark'/></>);
        const fetchaccounts =  async () => {
            try{
              const response = await accountApi.getAllAccounts();
              console.log(response);
              setaccountList(response.data.content);
              setPage({
                currentpage: response.data.number + 1 ,
                totalpage: response.data.totalPages
              })
            } catch(error) {
              console.log("Fail to fetch accounts", error);
            }
            console.log("");
          }
        
    useEffect(() =>{
            fetchaccounts();
          }, []);
      useEffect(() => {
        if(accountList.length != 0){
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
            accountList.forEach(element => {
                  arr.push(
                    <tr>
                      <td>{element.id}</td>
                      <td>{element.username}</td>
                      <td>{element.role == 1 ? "admin" : (element.role == 2 ? "member" : "shipper")}</td>
                      <td>{element.status ? "Đang hoạt động" : "Đã khóa"}</td>
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
                  <th>ID</th>
                  <th>Tên tài khoản</th>
                  <th>Loại tài khoản</th>
                  <th>Tình trạng</th>
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
        console.log(accountList)
      },[accountList])
    //   pagination
      
      return (
        <div>
          {table}
          </div>
      )
}
