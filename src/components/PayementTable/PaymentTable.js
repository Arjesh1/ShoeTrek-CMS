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
    const [selectedCat, setSelectedCat] = useState({})

    const handleOnEdit = (item) =>{
      setSelectedCat(item)
      dispatch(setShowModal(true))
     
      

      

    }

  
  return (
    <>
    {selectedCat && (
        <CustomModal heading="Update Payment">
          <EditPayment editCat={selectedCat} />
        </CustomModal>
      )}
<Table striped bordered hover responsive> 
      <thead>
        <tr>
          <th>#</th>
          <th>Thumbnail</th>
          <th>Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {payment.map((item, i )=>(
            <tr key={item}>
            <td>{i + 1}</td>
            <td>
              <div className='d-flex justify-content-center'>
            <img className='payment_image' src={item.thumbnail} alt='logo'/>
              </div></td>
            <td>{item.name}</td>
            <td>{item.status}</td>
            <td className=''><Button variant='warning' onClick={()=>{handleOnEdit(item)}} >Edit</Button></td>
          </tr>

        ))}
        
        
      </tbody>
    </Table>
      
    </>
  )
}

export default PaymentTable
