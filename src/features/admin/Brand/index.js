import React from 'react'
import TableBrand from './TableBrand'
import TableType from './TableBrand'

export default function Brand() {
  return (
    <div style={{margin: "20px",background: "white",width :"100%",height: "94vh",overflow: "scroll"}}>
        <h2 style={{width: "100%", padding: "0 0 0 30vw"}}>Danh sách thương hiệu</h2>
        <TableBrand />
    </div>
  )
}
