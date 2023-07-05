import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAction } from '../../pages/product/ProductAction'

const ProductTable = () => {
 const dispatch = useDispatch()
const {product} = useSelector(state => state.product)


 useEffect(()=>{
  dispatch(getProductsAction())
 })


  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Thumbnails</th>
          <th>Product Name</th>
          <th>Status</th>
          <th>Quantity</th>
          <th>Category</th>
          <th>Price</th>
          <th>Sales Price</th>
          <th>Sales Starts</th>
          <th>Sales End</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {product.map((item, i)=>(
        <tr key={item}>
          <td>{i + 1}</td>
          <td>Mark</td>
          <td>{item.name}</td>
          <td>{item.status}</td>
          <td>{item.quantity}</td>
          <td>{item.parentCat}</td>
          <td>{item.price}</td>
          <td>{item.salesPrice}</td>
          <td>{item.saleStarts}</td>
          <td>{item.saleEnds}</td>
          <td>{item.description}</td>
          <td><Button variant='warning'>Edit</Button></td>
        </tr>
         ))}
        
      </tbody>
    </Table>
    </div>
  )
}

export default ProductTable
