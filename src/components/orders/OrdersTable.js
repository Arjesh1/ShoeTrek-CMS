import React from 'react'

const OrdersTable = () => {
  return (
    <>
    <table class="table">
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
    <tr>
      <th scope="row" className='text-center align-middle'>1</th>
      <td className='text-center align-middle'>Processing</td>
      <td className='text-center align-middle'>1691493764046</td>
      <td className='text-center align-middle'>ETKI-1691493768792</td>
      <td className='text-center align-middle'>
        <p>Arjesh Khadka <br/>
        100 Sussex street<br/>
        Sydney, NSW,<br/>
        Australia, 2000
        
        </p>
        
      </td>
      <td className='text-center align-middle'>
        <p>Black Sneakers <br/>
        Black Sneakers<br/>
        </p>
        </td>
      <td className='text-center align-middle'>$299</td>
      
    </tr>
    
    
  </tbody>
</table>
      
    </>
  )
}

export default OrdersTable
