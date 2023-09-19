import React, { useEffect, useState } from 'react'
import { Button, Form, ProgressBar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addPaymentOptionAction, deletePaymentOptionAction, getPaymentOptionAction } from '../../pages/payment-option/PaymentAction'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../config/firebase-config'
import "./payment_table.css"

const EditPayment = ({editPayOpt}) => {
    const [form, setForm] = useState([])
    const [image, setImage] = useState()
    const dispatch= useDispatch()
    const [progress, setProgress] = useState(0);

    

    useEffect(() => {
          dispatch(getPaymentOptionAction());
        setForm(editPayOpt);
      }, [dispatch, editPayOpt]);
    
    
    const handleOnChange = (e)=>{
        const {name, value} = e.target
        setForm({
          ...form,
          [ name ]:value,
          
        })
      }
      
    
      const handleOnSubmit = async (e) =>{
        e.preventDefault()
        if (window.confirm("Are you sure you want to update this payment option?")) {

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
                          
                          dispatch(addPaymentOptionAction({ ...form, thumbnail: url }));
                          
                         
                        });
                        
                      }
                    );
          }
          else {
            dispatch(addPaymentOptionAction({ ...form }))
          }

          
          
          
        }
       
      }

      const handleOnDelete = () =>{
        if (window.confirm("Are you sure you want to deleted this payment option?")) {
          dispatch(deletePaymentOptionAction(form));
        }

        
      }

      const handleOnImageChange = (e) =>{
        const {files} = e.target
        setImage(files[0])
        
      }


  return (
    <div>
      <Form className=" p-5 pt-2 shadow m-auto rounded " 
      //commented for preventing editing of data. 
      // onSubmit={handleOnSubmit}
      >
      

     
        
        <Form.Group className=''>
        <Form.Label>Status</Form.Label>
                <Form.Select name='status'
                 value={form.status} 
                 onChange={handleOnChange}>
                <option value="">--Select--</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                </Form.Select>
                
              </Form.Group>
              
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"  name='name' 
              value={form.name}
              onChange={handleOnChange} />
            </Form.Group>

            <Form.Group className="mb-3" >
        <Form.Label>Image</Form.Label>
        <div className='mt-2 mb-2'>
        <img className='payment_image' src={form.thumbnail} alt='logo'/>
        </div> 
        <Form.Control type="file"  name='image'  onChange={handleOnImageChange} />
      </Form.Group>
        
        
        
        <div className='d-grid'>
                  <Button type='submit'  variant='primary'>Update</Button>
                  </div>

                  <div className='d-grid'>

                  <ProgressBar className='mt-1 bg-body' striped variant="success" now={progress} />

                  </div>

                  <div className='d-grid mt-3'>
                  <Button  variant='danger' 
                  //commented for preventing editing of data.  
                  // onClick={handleOnDelete}
                  >Delete</Button>
                  </div>  
                     
              </Form>
    </div>
  )
}

export default EditPayment
