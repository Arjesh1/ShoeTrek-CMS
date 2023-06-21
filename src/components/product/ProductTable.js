import React from 'react'
import { Button, Table } from 'react-bootstrap'

const ProductTable = () => {
  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Thumbnails</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Category</th>
          <th>Status</th>
          <th>Action</th>
          <th>Sales Price</th>
          <th>Sales Starts</th>
          <th>Sales End</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><Button variant='warning'>Edit</Button></td>
        </tr>
        
      </tbody>
    </Table>
    </div>
  )
}

export default ProductTable
