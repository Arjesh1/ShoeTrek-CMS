import React from 'react'
import { useSelector } from 'react-redux'
import Ratings from './Rating'
import { Table } from 'react-bootstrap'

const ReviewsTable = () => {


    const {reviews} = useSelector(state => state.product)
  return (
    <>

<Table striped  hover responsive>
  <thead>
    <tr className='table-secondary'>
      <th className='py-3 text-center' scope="col">S/N</th>
      <th className='py-3 text-center' scope="col">Product Name</th>
      <th className='py-3 text-center' scope="col">Customer</th>
      <th className='py-3 text-center' scope="col">Order Number</th>
      <th className='py-3 text-center' scope="col">Ratings</th>
      <th className='py-3 text-center' scope="col">Description</th>
      
      
    </tr>
  </thead>
  <tbody>
    {reviews?.map((item,i) =>(
      <tr key={item.id}>
      <th scope="row" className='text-center align-middle'>{i + 1}</th>
      <td className='text-center align-middle'>
        {item.productId}
        
        
        </td>
      <td className='text-center align-middle'>{item.firstName + " " + item.lastName}</td>
      <td className='text-center align-middle'>{item.orderNumber}</td>
     
      
      <td className='text-center align-middle'><Ratings rate={item.rating}/></td>
      <td className='text-center align-middle'>{item.description}</td>
      
    </tr>
        
    ))}
    
    
    
  </tbody>
</Table>


      
    </>
  )
}

export default ReviewsTable
