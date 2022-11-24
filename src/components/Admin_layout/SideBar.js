import React from 'react';
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
            
          <NavLink exact to="/admin/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Đơn hàng</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/product" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Sản phẩm</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/account" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Tài khoản</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Danh mục</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Thống kê</CDBSidebarMenuItem>
            </NavLink>

            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Đăng xuất
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;