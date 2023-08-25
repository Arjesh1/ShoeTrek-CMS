
import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const RecentOrders = () => {

  const {orders} = useSelector(state => state.product)
  const orderArray = [...orders]

  const sortedObject = orderArray.sort((a,b) => a.orderDate - b.orderDate).slice(0,4)
 
  

  return (
    <>

    <div className='shadow-lg p-3 rounded'>

      <div className='d-flex justify-content-between align-items-center py-0'>
        <div>
        <h5 className=''> Recent Orders</h5>
        </div>
        <div>
          <Link to="/orders" className='nav-link'>
          See More <BsFillArrowRightCircleFill/>

          </Link>

        </div>
      </div>


<hr/>
      <div>
      <Table striped  hover responsive>
  <thead>
    <tr className='table-secondary '>
      <th className='py-1 text-center fs-6' scope="col">S/N</th>
      <th className='py-1 text-center fs-6' scope="col">Status</th>
      <th className='py-1 text-center fs-6' scope="col">Order Date</th>
      <th className='py-1 text-center fs-6' scope="col">Order Number</th>
      <th className='py-1 text-center fs-6' scope="col">Amount</th>
      
    </tr>
  </thead>
  <tbody>
    {sortedObject?.map((item,i) =>(
      <tr key={item.id} className=''> 
      <th scope="row" className='text-center align-middle fs-6 p-0' >{i + 1}</th>
  
        <td className='text-center align-middle fs-6 p-0 py-1'>
          <div className='bg-success-subtle text-center  align-middle py-1 px-1 rounded fs-6  fw-semibold'>
          {item.status}
          </div>
          
          </td>
      <td className='text-center align-middle fs-6 p-0'>{new Date(item.orderDate).toLocaleString().slice(0,10).replace(',', '')}</td>
      <td className='text-center align-middle fs-6 p-0'>{item.orderNumber}</td>
      <td className='text-center align-middle fs-6 p-0'>${item.totalPrice}</td>
      
    </tr>
        
    ))}
    
    
    
  </tbody>
</Table>
      </div>


        
    </div>


      
    </>
  )
}

export default RecentOrders
