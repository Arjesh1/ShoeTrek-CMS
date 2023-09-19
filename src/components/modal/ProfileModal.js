import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setShowProfileModal } from '../../system/systemSlice';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { setAdminAction } from '../../pages/registration/RegisterAction';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase-config';
import { toast } from 'react-toastify';
import { getUserAction, loginUserAction } from '../../pages/user_Redux/userAction';

const ProfileModal = () => {
    const dispatch = useDispatch();
  const { showProfileModal } = useSelector((state) => state.system);
  const {user} = useSelector(state=> state.admin)


  const [form, setForm] = useState({})

  useEffect(()=>{
    setForm(user)
  }, [user])

  

  const handleOnChange = (e) =>{
    const { name, value } = e.target;
    setForm({ ...form, [name]: value, uid:user.uid });

  }

  const handleOnSubmit = async(e) =>{
   
    e.preventDefault()
    try {
        await setDoc(doc(db, "admin", user.uid), form)
        toast.success("Profile has been updated")
        dispatch(setShowProfileModal(false))
        dispatch(getUserAction())
        
        
    } catch (error) {
        toast.error("Unable to update profile. Please try again later.") 
        console.log(error);
        
    }
      
    
  }


  return (
    <>
      <Modal
      show={showProfileModal}
      onHide={() => dispatch(setShowProfileModal(false))}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
            User Profile
        

        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={handleOnSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name='fName' value={form.fName}  onChange={handleOnChange} required={true} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name='lName' value={form.lName}  onChange={handleOnChange} required={true}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email' disabled={true} value={form.email}  onChange={handleOnChange} required={true}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Phone No</Form.Label>
        <Form.Control type="tel" name='phone'  value={form.phone} onChange={handleOnChange} required={true}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control  name='address' onChange={handleOnChange} value={form.address} required={true} />
      </Form.Group>

      <div className='d-grid'>

      <Button variant='primary' type='submit'>Update</Button>
      </div>

      

      </Form>
      </Modal.Body>
    </Modal>
    </>
  )
}

export default ProfileModal
