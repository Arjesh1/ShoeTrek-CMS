import React, { useEffect, useState } from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { Button, Col, Form, Row } from 'react-bootstrap'
import slugify from 'slugify'
import { addCategoryAction, getCategoriesAction } from './CategoryAction'
import { useDispatch } from 'react-redux'
import CategoryTable from '../../components/categoryTable/CategoryTable'

const Category = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState([])

  useEffect(()=>{
    dispatch(getCategoriesAction())
    
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
    const slug = slugify(form.name, {
      trim:true,
      lower:true
    })

    dispatch(addCategoryAction({...form, slug}))
  }


  return (
    <div>
      <UserLayout>
        <div className='fs-3 my-3 py-1 pt-2 fw-bold'>Category</div>
        <hr/>

        <div>
        <Form className=" p-5 pt-2 shadow m-auto rounded " onSubmit={handleOnSubmit}>
      

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

        <div className='mt-4'>
          <CategoryTable/>
        </div>

      </UserLayout>
    </div>
  )
}

export default Category
