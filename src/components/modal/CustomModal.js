import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../../system/systemSlice';


const CustomModal = ({heading, children}) => {

  const dispatch = useDispatch();
  const { showModal } = useSelector((state) => state.system);


  return (
    <div>
      
      <Modal
      show={showModal}
      onHide={() => dispatch(setShowModal(false))}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          {heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
    </div>
  )
}

export default CustomModal
