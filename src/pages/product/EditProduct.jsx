import React, { useEffect, useState } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, ProgressBar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../category/CategoryAction";
import { CustomInput } from "../../components/custominput/CustomInput";
import {
  addProductAction,
  deleteProductAction,
  getSelectedProductsAction,
} from "./ProductAction";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../config/firebase-config";

const initialState = { status: "inactive", price: 0, name: "" };
const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState(initialState);
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [imageToDelete, setImageToDelete] = useState([]);
  const { category } = useSelector((state) => state.cat);
  const { selectedProduct } = useSelector((state) => state.product);

  useEffect(() => {
    !category.length && dispatch(getCategoriesAction());
    form.id !== id && dispatch(getSelectedProductsAction(id));
    selectedProduct.id !== form.id && setForm(selectedProduct);
  }, [dispatch, id, selectedProduct, form.id, category.length]);

  const productInput = [
    {
      label: "Name",
      name: "name",
      type: "test",
      placeholder: "Nike Air Force",
      required: true,
      value: form.name,
    },
    {
      label: "Quantity",
      name: "quantity",
      type: "number",
      placeholder: "250",
      required: true,
      value: form.quantity,
    },

    {
      label: " Price",
      name: "price",
      type: "number",
      placeholder: "$200",
      required: true,
      value: form.price,
    },
    {
      label: "Sales Price",
      name: "salesPrice",
      type: "number",
      placeholder: "$150",

      value: form.salesPrice,
    },
    {
      label: "Sale Starts",
      name: "saleStarts",
      type: "date",
      placeholder: "1/12/2023",
      value: form.saleStarts,
    },
    {
      label: "Sale Ends",
      name: "saleEnds",
      type: "date",
      placeholder: "1/12/2024",
      value: form.saleEnds,
    },
    {
      label: "Description",
      name: "description",
      type: "text",
      placeholder: "Details about the product.",
      rows: "3",
      as: "textarea",
      required: true,
      value: form.description,
    },
  ];

  const handleOnChange = (e) => {
    let { name, value, checked } = e.target;
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnImageChange = (e) => {
    const { name, files } = e.target;

    setImages([...files]);
  };

  const handleOnImageDelete = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setImageToDelete([...imageToDelete, value]);
    } else {
      const filterImg = imageToDelete.filter((img) => img !== value);
      setImageToDelete(filterImg);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { id, imgUrlList, ...rest } = form;
    const updatedImgList = imgUrlList.filter(
      (img) => !imageToDelete.includes(img)
    );
    dispatch(
      addProductAction({ ...rest, slug: id, imgUrlList: updatedImgList })
    );

    navigate("/product");

    // to add more images incomplete to complete.

    if (images.length) {
      const img = images.map((image) => {
        return new Promise((resolve, reject) => {
          const storageRef = ref(
            storage,
            `/product/images/${Date.now()}-${image.name}`
          );

          const uploadImg = uploadBytesResumable(storageRef, image);

          uploadImg.on(
            "state_changed",
            (snapShot) => {
              const percentage =
                (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
              setProgress(percentage);
            },
            (error) => {
              console.log(error);
            },
            async () => {
              await getDownloadURL(uploadImg.snapshot.ref).then((url) => {
                console.log(url);
                resolve(url);
              });
            }
          );
        });
      });

      const newimgUrlList = await Promise.all(img);

      const imgUrlList = [...updatedImgList, ...newimgUrlList];

      console.log(imgUrlList);

      dispatch(addProductAction({ ...form, slug: id, imgUrlList }));
    }
  };

  const handleOnDelete = () => {
    const slug = form.id;
    if (window.confirm("Are you sure you want to deleted this product?")) {
      dispatch(deleteProductAction({ slug }));
    }
  };

  return (
    <div>
      <UserLayout>
        <div className="mt-2">
          <Link to="/product">
            {" "}
            <Button variant="body" className="text-end fs-6 ">
              <i class="fa-solid fa-angle-left bg-secondary p-2 text-light rounded-circle"></i>
              <span className="ms-1">Back</span>
            </Button>
          </Link>
        </div>

        <div className="fs-3 text-center fw-bold">Edit Products</div>
        <hr />

        <Form className="shadow-lg p-5 pt-1 "
        //commented for preventing editing of data. 
        // onSubmit={handleOnSubmit}
        >
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

          <Form.Group className="">
            <Form.Label>Category</Form.Label>
            <Form.Select
              name="parentCat"
              onChange={handleOnChange}
              required={true}
              value={form.parentCat}
            >
              <option value="">-- Select Category --</option>

              {category.map((item) => (
                <option key={item.slug} value={`${item.slug}`}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          {productInput.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="py-3 d-flex flex-wrap gap-2">
            {selectedProduct?.imgUrlList?.map((img) => (
              <div key={img} className="img-thumbnail">
                <div className="d-flex justify-content-center gap-1">
                  <Form.Check
                    type="radio"
                    name="thumbnail"
                    checked={img === form.thumbnail}
                    onChange={handleOnChange}
                    value={img}
                  />
                  <label className="ms-1">Thumbnail</label>
                </div>
                <img src={img} alt="" width="150px" />
                <div>
                  <Form.Check
                    name="delete"
                    label="Delete"
                    value={img}
                    onChange={handleOnImageDelete}
                  />
                </div>
              </div>
            ))}
          </div>

          <Form.Group className="mb-4">
            <Form.Control
              type="file"
              name="image"
              multiple
              onChange={handleOnImageChange}
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="warning"   type="submit">
              Update Product
            </Button>
          </div>

          <ProgressBar
            className="mt-1 bg-body"
            striped
            variant="success"
            now={progress}
          />

          <div className="d-grid mt-3">
            <Button variant="danger" 
            //commented for preventing editing of data.  
            // onClick={handleOnDelete}
            >
              Delete Product
            </Button>
          </div>
        </Form>
      </UserLayout>
    </div>
  );
};

export default EditProduct;
