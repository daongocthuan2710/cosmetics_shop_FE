import React from 'react'
import TableOrder from './TableOrder'

export default function Order() {
  return (
    <div style={{margin: "20px",background: "white",width :"100%",height: "94vh",overflow: "scroll"}}>
        <h2 style={{width: "100%", padding: "0 0 0 30vw"}}>Danh sách đơn hàng</h2>
        <TableOrder />
    </div>
  )
}
