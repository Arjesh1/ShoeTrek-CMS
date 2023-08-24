import React from 'react'
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux'

const OrdersTable = () => {

    const {orders} = useSelector(state => state.product)

    console.log(orders);
    
  return (
    <>
    <Table striped  hover responsive>
  <thead>
    <tr className='table-secondary'>
      <th className='py-3 text-center' scope="col">S/N</th>
      <th className='py-3 text-center' scope="col">Status</th>
      <th className='py-3 text-center' scope="col">Order Date</th>
      <th className='py-3 text-center' scope="col">Order Number</th>
      <th className='py-3 text-center' scope="col">Customer Details</th>
      <th className='py-3 text-center' scope="col">Products</th>
      <th className='py-3 text-center' scope="col">Amount</th>
      
    </tr>
  </thead>
  <tbody>
    {orders?.map((item,i) =>(
      <tr key={item.id}>
      <th scope="row" className='text-center align-middle'>{i + 1}</th>
      <td className='text-center align-middle'>
        <p className='bg-success-subtle py-2 rounded fw-semibold'>{item.status}</p>
        
        
        </td>
      <td className='text-center align-middle'>{new Date(item.orderDate).toLocaleString().slice(0,10).replace(',', '')}</td>
      <td className='text-center align-middle'>{item.orderNumber}</td>
      <td className='text-center align-middle'>
        <p>{item.firstName + " "+ item.lastName} <br/>
        {item.streetAddress}<br/>
        {item.city + ", " + item.region},<br/>
        {item.country + ", " + item.postalCode}
        
        </p>
        
      </td>
      <td className='text-center align-middle'>
        
          
          <p className=''>
          {item?.product.map((productItem) =>(
            
            
             <span>{productItem.name+"(" +productItem.size +")"+ "-" + productItem.quantity}<br/></span> 
             
             ))} 
 
 </p>
          
 
        
       
        
        </td>
      <td className='text-center align-middle'>${item.totalPrice}</td>
      
    </tr>
        
    ))}
    
    
    
  </tbody>
</Table>
      
    </>
  )
}

export default OrdersTable
