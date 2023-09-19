import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addCategoryAction,
  getCategoriesAction,
} from "../../pages/category/CategoryAction";
import { getProductByCategoryAction } from "../../pages/product/ProductAction";

const EditCategory = ({ editCat }) => {
  const [form, setForm] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesAction());
    setForm(editCat);
  }, [dispatch, editCat]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to update this category?")) {
      dispatch(addCategoryAction(form));
    }
  };

  const handleOnDelete = () => {
    dispatch(getProductByCategoryAction(form.slug));
  };

  return (
    <div>
      <Form
        className=" p-5 pt-2 shadow m-auto rounded "
        //commented for preventing editing of data. 
        // onSubmit={handleOnSubmit}
      >
        <Form.Group className="">
          <Form.Label>Status</Form.Label>
          <Form.Select
            name="status"
            value={form.status}
            onChange={handleOnChange}
          >
            <option value="">--Select--</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Men"
            name="name"
            value={form.name}
            required={true}
            onChange={handleOnChange}
          />
        </Form.Group>

        <div className="d-grid">
          <Button type="submit"  variant="primary">
            Update
          </Button>
        </div>

        <div className="d-grid mt-3">
          <Button variant="danger"  
          //commented for preventing editing of data.  
          // onClick={handleOnDelete}
          >
            Delete
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditCategory;
