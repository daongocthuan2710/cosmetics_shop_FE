import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    window.localStorage.clear();
    navigate("/admin");
    window.location.reload(false);
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Cosmetics_admin
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            
          <NavLink exact="true" to="/admin/" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="table">Đơn hàng</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/admin/product" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="table">Sản phẩm</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/admin/account" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="user">Tài khoản</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/admin/category" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="table">Danh mục</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/admin/type" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="table">Loại sản phẩm</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/admin/brand" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="table">Thương hiệu</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/admin/statistical" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Thống kê</CDBSidebarMenuItem>
            </NavLink>

            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
              cursor: 'pointer'
            }} 
            onClick={() => handleLogout()}
          >
            Đăng xuất
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;