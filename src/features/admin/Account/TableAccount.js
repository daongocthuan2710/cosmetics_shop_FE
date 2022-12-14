import React, { useEffect, useState } from 'react'
import { Pagination, Table } from 'react-bootstrap';
import { FaEdit,FaTrash,FaAdd  } from "react-icons/fa";
import accountApi from '../../../api/accountApi';
import Spinner from 'react-bootstrap/Spinner';

export default function TableAccount() {

  const handleBlockAccount = (accountId) =>{
    console.log('accountId', accountId);
  }

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
              setaccountList(response.data.content);
              setPage({
                currentpage: response.data.number + 1 ,
                totalpage: response.data.totalPages
              })
            } catch(error) {
              console.log("Fail to fetch accounts", error);
            }
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
                    <tr key={element.id}>
                      <td>{element.id}</td>
                      <td>{element.username}</td>
                      <td>{element.role == 1 ? "admin" : (element.role == 2 ? "member" : "shipper")}</td>
                      <td>{element.status ? "Đang hoạt động" : "Đã khóa"}</td>
                      <td><FaEdit /></td>
                      <td
                        style={{cursor: 'pointer'}}
                        onClick={() => {handleBlockAccount(element.id)}}
                      ><FaTrash /></td>
                    </tr>
                  )
                  i+=1;
            });
            return (
              <>
              <div style={{float: "right"}}>
            <input placeholder='Tên sản phẩm' className='filter-product-item'></input>
            <select className='filter-product-item' defaultValue='1'>
              <option value="1">Thương hiệu</option>
            </select>
            <select className='filter-product-item' defaultValue='1'>
              <option value="1">Loại</option>
            </select>
          </div>
              <Table striped bordered hover size="sm" className='product-admin-table'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tên tài khoản</th>
                    <th>Loại tài khoản</th>
                    <th>Tình trạng</th>
                    <th>Sửa</th>
                    <th>Khóa</th>
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
      },[accountList])
    //   pagination
      
      return (
        <div>
          {table}
          </div>
      )
}
