import React, { useEffect, useState } from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesAction } from '../category/CategoryAction'
import { productInput } from '../../components/assets/inputFieldList'
import { CustomInput } from '../../components/custominput/CustomInput'

const initialState = { status: "inactive", price: 0, name: "" };
const NewProduct = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState(initialState)
  const {category} = useSelector(state => state.cat)


  useEffect(()=>{
    dispatch(getCategoriesAction())
    
  }, [dispatch])



  const handleOnChange = (e)=>{
    let {name, value, checked  } = e.target
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }


    setForm({
      ...form,
      [ name ]:value,

      
      
    })
  }

  const handleOnImageChange = (e) =>{
    const {name, files} = e.target

    console.log(name, files);
  }

  const handleOnSubmit = async (e) =>{
    e.preventDefault()

    console.log(form);
  }







  return (
    <div>

<UserLayout>

         <div className='mt-2'>
         <Link to="/product"> <Button variant='secondary' className='text-end '><i class="fa-solid fa-circle-arrow-left"></i><span className='ms-1'>Back</span></Button></Link>
         </div>

         <div className='fs-3 text-center fw-bold'>Add New Products</div>
        <hr/>

        <Form className="shadow-lg p-5 " onSubmit={handleOnSubmit}>

        <Form.Group className="mt-5">
            <Form.Check 
              type="switch"
              id="custom-switch"
              label="Status"
              name="status"
              onChange={handleOnChange}
            />
          </Form.Group>

        <Form.Group className="" >
              <Form.Label>Category</Form.Label>
              <Form.Select name="parentCat" onChange={handleOnChange} required={true}>
                <option value="">-- Select Category --</option>

            {category.map((item) => (
              <option key={item.slug} value={`${item.slug}`}>{item.name}</option>
              
            ))}
                
              </Form.Select>
            </Form.Group>

            {productInput.map((item, i) => (
            <CustomInput key ={i} {...item} onChange={handleOnChange} />
          ))}

<Form.Group className="mb-4">
            <Form.Control
              type="file"
              name="image"
              multiple
              onChange={handleOnImageChange}
              
            />
          </Form.Group>

          <div className="d-grid">  
          <Button variant='primary' type='subit'>Add Product</Button>
          </div>

            </Form>

</UserLayout>
      
    </div>
  )
}

export default NewProduct
