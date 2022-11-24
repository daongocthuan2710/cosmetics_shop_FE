import React from 'react'
import TableAccount from './TableAccount'

export default function Account() {
  return (
    <div style={{margin: "20px",background: "white",width :"100%",height: "94vh",overflow: "scroll"}}>
        <h2 style={{width: "100%", padding: "0 0 0 30vw"}}>Danh sách tài khoản</h2>
        <TableAccount />
    </div>
  )
}
