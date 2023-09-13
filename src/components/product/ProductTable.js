import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../../pages/product/ProductAction";
import { Link } from "react-router-dom";

const ProductTable = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  return (
    <div>
      <Table striped hover responsive>
        <thead>
          <tr className="table-secondary">
            <th className="py-3 text-center" scope="col">
              #
            </th>
            <th className="py-3 text-center" scope="col">
              Thumbnails
            </th>
            <th className="py-3 text-center" scope="col">
              {" "}
              Name
            </th>
            <th className="py-3 text-center" scope="col">
              Status
            </th>
            <th className="py-3 text-center" scope="col">
              Quantity
            </th>
            <th className="py-3 text-center" scope="col">
              Category
            </th>
            <th className="py-3 text-center" scope="col">
              Price
            </th>
            <th className="py-3 text-center" scope="col">
              Sales
            </th>
            <th className="py-3 text-center" scope="col">
              Description
            </th>
            <th className="py-3 text-center" scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, i) => (
            <tr key={item}>
              <td className="text-center align-middle">{i + 1}</td>
              <td className="text-center align-middle">
                <img src={item.thumbnail} alt="" width={"100px"} />
              </td>
              <td className="text-center align-middle">{item.name}</td>
              {item.status === "active" ? (
                <td className="text-center align-middle ">
                  <span className="bg-success-subtle py-2 px-3 rounded fw-semibold ">
                    {item.status.slice(0, 1).toUpperCase() +
                      item.status.slice(1)}
                  </span>
                </td>
              ) : (
                <td className="text-center align-middle">
                  <span className="bg-danger-subtle py-2 px-3 rounded fw-semibold ">
                    {item.status.slice(0, 1).toUpperCase() +
                      item.status.slice(1)}
                  </span>
                </td>
              )}
              <td className="text-center align-middle">{item.quantity}</td>
              <td className="text-center align-middle">
                {item.parentCat.slice(0, 1).toUpperCase() +
                  item.parentCat.slice(1)}
              </td>
              <td className="text-center align-middle">{item.price}</td>
              <td className="text-center align-middle">{item.salesPrice}</td>
              <td className="text-center align-middle">{item.description}</td>
              <td className="text-center align-middle">
                <Link to={`/product/${item.slug}`}>
                  <Button variant="warning">Edit</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
