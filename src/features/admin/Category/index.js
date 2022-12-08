import React from 'react'
import TableCategory from './TableCategory'

export default function Category() {
  return (
    <div style={{margin: "20px",background: "white",width :"100%",height: "94vh",overflow: "scroll"}}>
        <h2 style={{width: "100%", padding: "0 0 0 30vw"}}>Danh sách danh mục</h2>
        <TableCategory />
    </div>
  )
}
