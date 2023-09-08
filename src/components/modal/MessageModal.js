import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { setShowMessageModal } from '../../system/systemSlice'
import { useDispatch, useSelector } from 'react-redux'

const MessageModal = ({selectedMessage}) => {
    const [form, setForm] = useState({})
    const dispatch = useDispatch()
    const {showMessageModal} = useSelector(state => state.system)
   

    const handleOnReplyClick = () =>{


    }
  return (
    <>
    <Modal
      show={showMessageModal}
      onHide={() => dispatch(setShowMessageModal(false))}
      
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
            Subject: {selectedMessage.subject}
        

        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
            <div className='fs-5'>

              <div>
                <p>Name: {selectedMessage.fName + " " + selectedMessage.lName}</p>
              </div>
              <div>
                <p>Phone: {selectedMessage.phone}</p>
              </div>
              <div>
                <p>Email: {selectedMessage.email }</p>
              </div>

              <div>
                <p>Message: 
                <br/>
                <span className=''>  {selectedMessage.message }</span>
               
                </p>
                
                
              </div>
              

            

                
            </div>
      
      <div className='d-grid'>
        <hr/>
      <a href={`mailto:${selectedMessage.email}`} className='d-grid'>
      <Button variant='primary'>Reply</Button>
      </a>

      
      </div>
      </div>
      </Modal.Body>
    </Modal>
      
    </>
  )
}

export default MessageModal
