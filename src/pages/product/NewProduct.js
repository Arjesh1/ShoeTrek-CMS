import React, { useEffect, useState } from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Form, ProgressBar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesAction } from '../category/CategoryAction'
import { productInput } from '../../components/assets/inputFieldList'
import { CustomInput } from '../../components/custominput/CustomInput'
import slugify from 'slugify'
import { addProductAction } from './ProductAction'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../config/firebase-config'

const initialState = { status: "inactive", price: 0, name: "" };
const NewProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form, setForm] = useState(initialState)
  const [images, setImages] = useState()
  const [progress, setProgress] = useState(0);
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

  const handleOnImageChange = async(e) =>{
    const {name, files} = e.target
    setImages([...files])
    

    
  }

  const handleOnSubmit = async (e) =>{
    e.preventDefault()

    const slug = slugify(form.name, {
      trim:true,
      lower:true
    })

    if(images.length){
      const img = images.map((image) => {
        return new Promise((resolve, reject) =>{
          const  storageRef = ref(
            storage,
            `/product/images/${Date.now()}-${image.name}`

          )

          const uploadImg = uploadBytesResumable(storageRef, image)

          uploadImg.on(
            "state_changed",
            (snapShot) =>{
              const percentage = (snapShot.bytesTransferred/ snapShot.totalBytes) * 100
              setProgress(percentage)
            },
            (error) =>{
              console.log(error);
            },
            async() =>{
              await getDownloadURL(uploadImg.snapshot.ref).then((url)=>{
                console.log(url);
                resolve(url)

              })


            }
          )
        })
      })
    
      const imgUrlList = await Promise.all(img)
      dispatch(addProductAction({...form, slug, imgUrlList, thumbnail:imgUrlList[0]}))
      
    }

    navigate("/product")

    
    
  }









  return (
    <div>

<UserLayout>

         <div className='mt-2'>
         <Link to="/product"> <Button variant='body' className='text-end fs-6 '><i class="fa-solid fa-angle-left bg-secondary p-2 text-light rounded-circle"></i><span className='ms-1'>Back</span></Button></Link>
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

          <ProgressBar className='mt-1 bg-body' striped variant="success"  now={progress} />

            </Form>

</UserLayout>
      
    </div>
  )
}

export default NewProduct
