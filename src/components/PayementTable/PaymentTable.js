import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import EditPayment from './EditPayment'
import CustomModal from '../modal/CustomModal'
import { setShowModal } from '../../system/systemSlice'
import "./payment_table.css"


const PaymentTable = () => {

  const dispatch = useDispatch()
    const {payment} = useSelector(state => state.payOption)
    const [selectedPayOpt, SetSelectedPayOpt] = useState({})

    const handleOnEdit = (item) =>{
      SetSelectedPayOpt(item)
      dispatch(setShowModal(true))
     
      

      

    }

  
  return (
    <>
    {SetSelectedPayOpt && (
        <CustomModal heading="Update Payment">
          <EditPayment editPayOpt={selectedPayOpt} />
        </CustomModal>
      )}
<Table striped  hover responsive> 
      <thead>
        <tr className='table-secondary'>
          <th className='py-3 text-center' scope="col" >#</th>
          <th className='py-3 text-center' scope="col">Thumbnail</th>
          <th className='py-3 text-center' scope="col">Name</th>
          <th className='py-3 text-center' scope="col">Status</th>
          <th className='py-3 text-center' scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {payment.map((item, i )=>(
            <tr key={item}>
            <td className='text-center align-middle'>{i + 1}</td>
            <td className='text-center align-middle'>
              <div className='d-flex justify-content-center pt-1 pb-1'>
            <img className='payment_image' src={item.thumbnail} alt='logo'/>
              </div></td>
            <td className='text-center align-middle'>{item.name}</td>
            {item.status === "Active"? (
              <td className='text-center align-middle' ><span className='bg-success-subtle  p-1 pe-2 ps-2 rounded fw-semibold'>{item.status}</span></td>
            ):(
              <td className='text-center align-middle' ><span className='bg-danger-subtle  p-1 pe-2 ps-2 rounded fw-semibold'>{item.status}</span></td>
            )}
            <td className='text-center align-middle'><Button variant='warning' 
            
            onClick={()=>{handleOnEdit(item)}} 
            >Edit</Button></td>
          </tr>

        ))}
        
        
      </tbody>
    </Table>
      
    </>
  )
}

export default PaymentTable
