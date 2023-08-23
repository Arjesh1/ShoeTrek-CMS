import React, { useEffect } from 'react'
import UserLayout from '../../components/layout/UserLayout'
import OrdersTable from '../../components/orders/OrdersTable'
import { useDispatch } from 'react-redux'
import { getOrdersAction } from './OrderAction'

const Orders = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getOrdersAction())
  })
  return (
    <div>

<UserLayout>
<div className='fs-3 my-3 py-1 pt-2 fw-bold'>Orders</div>

<hr/>


       <div>
        <OrdersTable/>
       </div>
      </UserLayout>
      
    </div>
  )
}

export default Orders
