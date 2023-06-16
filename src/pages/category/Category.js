import React, { useState } from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { newCategoryInput } from '../../components/assets/inputFieldList'
import { CustomInput } from '../../components/custominput/CustomInput'
import { Button, Form } from 'react-bootstrap'

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

        <Form.Group>
          <label htmlFor=''>Status</label>
          <Form.Select name='status' onChange={handleOnChange}>
          <option value="">--Select--</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          </Form.Select>
          
        </Form.Group>
          
          {newCategoryInput.map((item, i) => (
            <CustomInput key ={i} {...item} onChange={handleOnChange} />
          ))}

          <div className='d-grid'>
            <Button type='submit'>Submit</Button>


          </div>
          
        </Form>
        </div>

      </UserLayout>
    </div>
  )
}

export default Category
