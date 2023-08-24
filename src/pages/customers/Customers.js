import React from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getClientsAction } from './CustomerAction'
import CustomerTable from '../../components/customers/CustomerTable'

const Customers = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getClientsAction())
  })

  return (
    <div>
      <UserLayout>
      <div className='fs-3 my-3 py-1 pt-2 fw-bold'>Customers</div>

<hr/>

<div className='mt-4 '>
 <CustomerTable/>
</div>
      </UserLayout>
      
    </div>
  )
}

export default Customers
