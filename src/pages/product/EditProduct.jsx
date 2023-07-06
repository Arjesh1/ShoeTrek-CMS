import React, { useEffect, useState } from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { Link, useParams } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesAction } from '../category/CategoryAction'
import { CustomInput } from '../../components/custominput/CustomInput'
import slugify from 'slugify'
import { addProductAction, getSelectedProductsAction } from './ProductAction'

const initialState = { status: "inactive", price: 0, name: "" };
const EditProduct = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const [form, setForm] = useState(initialState)
  const [images, setImages] = useState()
  const {category} = useSelector(state => state.cat)
  const {selectedProduct} = useSelector(state => state.product)


  useEffect(() => {
    !category.length && dispatch(getCategoriesAction());
    form.id !== id && dispatch(getSelectedProductsAction(id));
    selectedProduct.id !== form.id && setForm(selectedProduct);
  }, [dispatch, id, selectedProduct, form.id]);

  console.log(selectedProduct);


  const productInput= [
    {
      label: "Name",
      name: "name",
      type: "test",
      placeholder: "Nike Air Force",
      required: true,
      value: form.name
    },
    {
      label: "Quantity",
      name: "quantity",
      type: "number",
      placeholder: "250",
      required: true,
      value: form.quantity
    },

    {
      label: " Price",
      name: "price",
      type: "number",
      placeholder: "$200",
      required: true,
      value: form.price
    },
    {
      label: "Sales Price",
      name: "salesPrice",
      type: "number",
      placeholder: "$150",
      required: true,
      value: form.salesPrice
    },
    {
      label: "Sale Starts",
      name: "saleStarts",
      type: "date",
      placeholder: "1/12/2023",
      value: form.saleStarts
      
    },
    {
      label: "Sale Ends",
      name: "saleEnds",
      type: "date",
      placeholder: "1/12/2024",
      value: form.saleEnds
      
    },
    {
      label: "Description",
      name: "description",
      type: "text",
      placeholder: "Details about the product.",
      rows: "3",
      as: "textarea",
      required: true,
      value: form.description
    },


  ]



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

    setImages(files)

    
  }

  const handleOnSubmit = async (e) =>{
    e.preventDefault()

    const slug = selectedProduct.slug

    console.log(form, slug);

    // dispatch(addProductAction({...form, slug}))
    
  }







  return (
    <div>

<UserLayout>

         <div className='mt-2'>
         <Link to="/product"> <Button variant='secondary' className='text-end '><i class="fa-solid fa-circle-arrow-left"></i><span className='ms-1'>Back</span></Button></Link>
         </div>

         <div className='fs-3 text-center fw-bold'>Edit Products</div>
        <hr/>

        <Form className="shadow-lg p-5 " onSubmit={handleOnSubmit}>

        <Form.Group className="mt-5">
            <Form.Check 
              type="switch"
              id="custom-switch"
              label="Status"
              name="status"
              onChange={handleOnChange}
              checked={form.status === "active"}
            />
          </Form.Group>

        <Form.Group className="" >
              <Form.Label>Category</Form.Label>
              <Form.Select name="parentCat" onChange={handleOnChange} required={true} value={selectedProduct.parentCat}>
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

export default EditProduct
