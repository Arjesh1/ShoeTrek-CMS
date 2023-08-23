import React from 'react'
import UserLayout from '../../components/layout/UserLayout'
import OrdersTable from '../../components/orders/OrdersTable'

const Orders = () => {
  return (
    <div>

<UserLayout>
<div className='fs-3 my-3 py-1 pt-2 fw-bold'>Orders</div>



       <div>
        <OrdersTable/>
       </div>
      </UserLayout>
      
    </div>
  )
}

export default Orders
