import React from "react";
import { Button, Table } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RecentOrders = () => {
  const { orders } = useSelector((state) => state.product);
  const orderArray = [...orders];

  const sortedObject = orderArray
    .sort((a, b) => b.orderDate - a.orderDate)
    .slice(0, 4);

  return (
    <>
      <div className="shadow-lg p-3 mt-5 rounded">
        <div className="d-flex justify-content-between align-items-center py-0">
          <div>
            <h5 className=""> Recent Orders</h5>
          </div>
          <div>
            <Link to="/orders" className="nav-link">
              See More <BsFillArrowRightCircleFill />
            </Link>
          </div>
        </div>

        <hr />
        <div>
          <Table hover responsive>
            <thead>
              <tr className="table-secondary ">
                <th className="py-1 text-center fs-6" scope="col">
                  Product
                </th>
                <th className="py-1 text-center fs-6" scope="col">
                  Status
                </th>
                <th className="py-1 text-center fs-6" scope="col">
                  Order Date
                </th>
                <th className="py-1 text-center fs-6" scope="col">
                  Order Number
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedObject?.map((item, i) => (
                <tr key={item.id} className="">
                  <td className="d-flex justify-content-center">
                    <div className="d-flex gap-1">
                      {item.product?.map((product) => (
                        <div key={product.id} className="d-flex gap-1">
                          <img
                            src={product.img}
                            style={{ height: "3rem" }}
                            alt="product"
                            className="rounded"
                          />
                        </div>
                      ))}
                    </div>
                  </td>

                  <td className="text-center align-middle fs-6 p-0 py-1">
                    <div
                      className={`py-2 px-1 rounded fw-semibold ${
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
                    </div>
                  </td>
                  <td className="text-center align-middle fs-6 p-0">
                    {new Date(item.orderDate)
                      .toLocaleString()
                      .slice(0, 10)
                      .replace(",", "")}
                  </td>
                  <td className="text-center align-middle fs-6 p-0">
                    {item.orderNumber}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default RecentOrders;
