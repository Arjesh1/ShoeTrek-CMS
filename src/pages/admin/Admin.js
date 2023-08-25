import React from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminTable from '../../components/admin/AdminTable'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAdminsAction } from './AdminAction'

const Admin = () => {
    const dispatch =useDispatch()
    useEffect(()=>{
        dispatch(getAdminsAction())
    })
  return (
    <div>

<UserLayout>
<Row className=' '>
          <Col className=''> 
          <div className=' fs-3 my-3 py-1 pt-2 fw-bold '>Admins</div>
          </Col>
          <Col className=''>
            <div className='my-3 py-1 pt-2 d-flex  justify-content-end align-items-center '>
         <Link to="/register"> <Button className='text-end'>+ Add Admin</Button></Link>
        </div>
        </Col>
       
        
        </Row>
        <hr/>

        <div>

            <AdminTable/>
        </div>
      
    

    </UserLayout>
    </div>
  )
}

export default Admin
