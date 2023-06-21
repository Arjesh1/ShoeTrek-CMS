import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const EditCategory = ({editCat}) => {
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
      <Form className=" p-5 pt-2 shadow m-auto rounded " onSubmit={handleOnSubmit}>
      

     
        
        <Form.Group className=''>
        <Form.Label>Status</Form.Label>
                <Form.Select name='status' value={editCat.status} onChange={handleOnChange}>
                <option value="">--Select--</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                </Form.Select>
                
              </Form.Group>
              
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Electronics" name='name' value={editCat.name} required={true} onChange={handleOnChange} />
            </Form.Group>
        
        
        
        <div className='d-grid'>
                  <Button type='submit' variant='warning'>Update</Button>
                  </div>
      
      
                
      
              
                
               
      
                
                
              </Form>
    </div>
  )
}

export default EditCategory
