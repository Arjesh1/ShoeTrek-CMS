import React, { useEffect, useState } from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { Button, Col, Form, Row } from 'react-bootstrap'
import PaymentTable from '../../components/PayementTable/PaymentTable'
import { useDispatch } from 'react-redux'
import { addPaymentOptionAction, getPaymentOptionAction } from './PaymentAction'

const Payment = () => {

  const dispatch = useDispatch()
  const [form, setForm] = useState([])

  useEffect(()=>{
    dispatch(getPaymentOptionAction())
    
  }, [dispatch])

  const handleOnChange = (e)=>{
    const {name, value} = e.target
    setForm({
      ...form,
      [ name ]:value,
      
    })
  }

  const handleOnSubmit = async (e) =>{
    e.preventDefault()
   dispatch(addPaymentOptionAction(form))
   console.log(form);
  }

  return (
    <div>
      <UserLayout>
        <div className='fs-3 text-center fw-bold'>Payment</div>
        <hr/>

        <div>
        <Form className=" p-5 pt-2 shadow m-auto rounded " onSubmit={handleOnSubmit}>
      

<Row>
  <Col lg={2} className=''>
  <Form.Group className=''>
  <Form.Label>Status</Form.Label>
          <Form.Select name='status' onChange={handleOnChange}>
          <option value="">--Select--</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          </Form.Select>
          
        </Form.Group>
        </Col >
  <Col lg={4} className=" "> 
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="PayPal" name='name' required={true} onChange={handleOnChange} />
      </Form.Group>

      
  
  </Col>

  <Col lg={4} className=" ">

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file"  name='image'  onChange={handleOnChange} />
      </Form.Group>
  </Col>
  <Col lg={2}><div className='d-grid '>
  <Form.Label className='text-light'>.</Form.Label>
            <Button type='submit'>Add</Button>


          </div></Col>
</Row>
        
          
         

          
          
        </Form>
        </div>

        <div className='pt-2'>
          <PaymentTable/>
        </div>

      </UserLayout>
    </div>
  )
}

export default Payment
