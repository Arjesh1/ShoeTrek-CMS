import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import OrdersModal from "../modal/OrdersModal";
import { setShowOrderModal } from "../../system/systemSlice";

const OrdersTable = () => {
  const { orders } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const orderArray = [...orders];
  const sortedOrders = orderArray.sort((a, b) => b.orderDate - a.orderDate);
  const [selectedOrder, setSelectedOrder] = useState();

  const handleOnEdit = (item) => {
    setSelectedOrder(item);
    dispatch(setShowOrderModal(true));
  };

  return (
    <>
      <OrdersModal item={selectedOrder} />
      <Table striped hover responsive>
        <thead>
          <tr className="table-secondary">
            <th className="py-3 text-center" scope="col">
              S/N
            </th>
            <th className="py-3 text-center" scope="col">
              Status
            </th>
            <th className="py-3 text-center" scope="col">
              Order Date
            </th>
            <th className="py-3 text-center" scope="col">
              Order Number
            </th>
            <th className="py-3 text-center" scope="col">
              Customer Details
            </th>
            <th className="py-3 text-center" scope="col">
              Products
            </th>
            <th className="py-3 text-center" scope="col">
              Amount
            </th>
            <th className="py-3 text-center" scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedOrders?.map((item, i) => (
            <tr key={item.id}>
              <th scope="row" className="text-center align-middle">
                {i + 1}
              </th>
              <td className="text-center align-middle">
                <p
                  className={`py-2 px-2 rounded fw-semibold ${
                    item.status === "Delivered"
                      ? "bg-success-subtle"
                      : item.status === "Shipped"
                      ? "bg-info-subtle"
                      : item.status === "Approved"
                      ? "bg-primary-subtle"
                      : "bg-warning-subtle"
                  }`}
                >
                  {item.status}
                </p>
              </td>
              <td className="text-center align-middle">
                {new Date(item.orderDate)
                  .toLocaleString()
                  .slice(0, 10)
                  .replace(",", "")}
              </td>
              <td className="text-center align-middle">{item.orderNumber}</td>
              <td className="text-center align-middle">
                <p>
                  {item.firstName + " " + item.lastName} <br />
                  {item.streetAddress}
                  <br />
                  {item.city + ", " + item.region},<br />
                  {item.country + ", " + item.postalCode}
                </p>
              </td>
              <td className="text-start align-middle">
                <p className="">
                  {item?.product.map((productItem) => (
                    <span>
                      {productItem.name +
                        "(" +
                        productItem.size +
                        ")" +
                        "-" +
                        productItem.quantity}
                      <br />
                    </span>
                  ))}
                </p>
              </td>
              <td className="text-center align-middle">${item.totalPrice}</td>
              <td className="text-center align-middle">
                <Button
                  onClick={() => {
                    handleOnEdit(item);
                  }}
                >
                  {" "}
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default OrdersTable;
