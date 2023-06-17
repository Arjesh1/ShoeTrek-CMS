import React, { useState } from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { Button, Col, Form, Row } from 'react-bootstrap'

const Category = () => {
  const [form, setForm] = useState([])

  const handleOnChange = (e)=>{
    const {name, value} = e.target
    setForm({
      ...form,
      [ name ]:value,
      
    })
  }

  const handleOnSubmit = async (e) =>{
    e.preventDefault()
    
    console.log(form);

      
  }


  return (
    <div>
      <UserLayout>
        <div className='fs-3 text-center fw-bold'>Category</div>
        <hr/>

        <div>
        <Form className=" p-5 pt-1 shadow m-auto " onSubmit={handleOnSubmit}>
        
        <h2 className='text-center'>Add Category</h2>
        <hr/>

<Row>
  <Col lg={4} className=''>
  <Form.Group className=''>
  <Form.Label>Status</Form.Label>
          <Form.Select name='status' onChange={handleOnChange}>
          <option value="">--Select--</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          </Form.Select>
          
        </Form.Group>
        </Col >
  <Col lg={6} className=" "> 
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Electronics" name='name' required={true} onChange={handleOnChange} />
      </Form.Group>
  
  </Col>
  <Col lg={2}><div className='d-grid '>
  <Form.Label className='text-light'>.</Form.Label>
            <Button type='submit'>Add</Button>


          </div></Col>
</Row>
        
          
         

          
          
        </Form>
        </div>

      </UserLayout>
    </div>
  )
}

export default Category
