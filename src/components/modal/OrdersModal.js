import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setShowOrderModal } from "../../system/systemSlice";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";
import { getOrdersAction } from "../../pages/orders/OrderAction";

const OrdersModal = ({ item }) => {
  const [orderStatus, setOrderStatus] = useState({});
  const dispatch = useDispatch();
  const { showOrderModal } = useSelector((state) => state.system);

  useEffect(() => {
    setOrderStatus(item);
  }, [item]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setOrderStatus({ ...orderStatus, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    try {
      const promise = setDoc(
        doc(db, "orders", orderStatus.orderNumber),
        orderStatus,
        { merge: true }
      );

      toast.promise(promise, {
        pending: "Please wait..",
        success: "Order status has been updated.",
      });
      dispatch(getOrdersAction());
      dispatch(setShowOrderModal(false));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        show={showOrderModal}
        onHide={() => dispatch(setShowOrderModal(false))}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className=" my-3">
              <Form.Label>Order Number</Form.Label>
              <Form.Control value={item?.orderNumber} disabled={true} />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className=" my-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                onChange={handleOnChange}
                required={true}
                value={orderStatus?.status}
              >
                <option value="">-- Select Status --</option>
                <option value="Processing">Processing</option>
                <option value="Approved">Approved</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </Form.Select>
            </Form.Group>
            <div className="d-grid">
              <Button variant="primary" type="submit">
                Update
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OrdersModal;
