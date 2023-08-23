import React, { useEffect, useState } from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { Button, Col, Form, ProgressBar, Row } from 'react-bootstrap'
import PaymentTable from '../../components/PayementTable/PaymentTable'
import { useDispatch } from 'react-redux'
import { addPaymentOptionAction, getPaymentOptionAction } from './PaymentAction'
import slugify from 'slugify'
import { storage } from '../../config/firebase-config'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { toast } from 'react-toastify'



const Payment = () => {

  const dispatch = useDispatch()
  const [form, setForm] = useState([])
  const [image, setImage] = useState()
  const [progress, setProgress] = useState(0);

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
    const slug = slugify(form.name, {
      trim:true,
      lower:true
    })
   
   // upload image to storage and get the link and mount to the payment options

  if (image) {
    const storegeRef = ref(
          storage,
          `/payment_option/images/${Date.now()}-${image.name}`
        );

        //upload image to firebase
        const uploadImg = uploadBytesResumable(storegeRef, image);


        uploadImg.on(
              "state_changed",
              (snapshot) => {
                
                const percentage =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      
                setProgress(percentage);
              },
              (error) => {
                console.log(error);
              },
              () => {
                getDownloadURL(uploadImg.snapshot.ref).then((url) => {
                  
                  dispatch(addPaymentOptionAction({ ...form, slug, thumbnail: url }));

                  
                  setForm([])
                  
                 
                });
                
              }
            );
  }
  

   
  }

  const handleOnImageChange = (e) =>{
    const {files} = e.target
    setImage(files[0])
    
  }

  

  

  return (
    <div>
      <UserLayout>
        <div className='fs-3 my-3 py-1 pt-2 fw-bold'>Payment</div>
        <hr/>

        <div>
        <Form className=" p-5 pt-2 shadow m-auto rounded " onSubmit={handleOnSubmit}>
      

<Row>
  <Col lg={2} className=''>
  <Form.Group className=''>
  <Form.Label>Status</Form.Label>
          <Form.Select name='status' required={true} onChange={handleOnChange}>
          <option value="">--Select--</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          </Form.Select>
          
        </Form.Group>
        </Col >
  <Col lg={4} className=" "> 
  <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="PayPal" name='name' required={true} onChange={handleOnChange} />
      </Form.Group>

      
  
  </Col>

  <Col lg={4} className=" ">

  <Form.Group className="mb-3" >
        <Form.Label>Image</Form.Label>
        <Form.Control type="file"  name='image'  onChange={handleOnImageChange} />
      </Form.Group>
  </Col>
  <Col lg={2}><div className='d-grid '>
  <Form.Label className='text-light'>.</Form.Label>
            <Button type='submit'>Add</Button>
            <ProgressBar className='mt-1 bg-body' striped variant="success"  now={progress} />


          </div></Col>
</Row>
        
          
         

          
          
        </Form>
        </div>

        <div className='mt-4'>
          <PaymentTable/>
        </div>

      </UserLayout>
    </div>
  )
}

export default Payment
