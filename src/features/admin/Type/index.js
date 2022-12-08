import React from 'react'
import TableType from './TableType'

export default function Type() {
  return (
    <div style={{margin: "20px",background: "white",width :"100%",height: "94vh",overflow: "scroll"}}>
        <h2 style={{width: "100%", padding: "0 0 0 30vw"}}>Danh sách loại sản phẩm</h2>
        <TableType />
    </div>
  )
}
