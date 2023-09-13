import React from "react";
import UserLayout from "../../components/layout/UserLayout";
import CategoryIcon from "../../components/assets/images/category.svg";
import ProductIcon from "../../components/assets/images/products.svg";
import OrderIcon from "../../components/assets/images/orders.svg";
import ClientIcon from "../../components/assets/images/clients.svg";
import RecentOrders from "../../components/dashboard/RecentOrders";
import Charts from "../../components/dashboard/Charts";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { category } = useSelector((state) => state.cat);
  const { clients, user } = useSelector((state) => state.admin);
  const { product, orders } = useSelector((state) => state.product);
  const totalOrders = orders.reduce((acc, obj) => acc + +obj.product.length, 0);

  return (
    <>
      <UserLayout>
        <div className="p-3 ">
          <h2> Welcome Back</h2>
          <h2> {user.fName + " " + user.lName}</h2>
        </div>

        <div className=" pt-4 pb-5">
          <div className="container_box d-flex gap-5  justify-content-around flex-wrap">
            <div className=" shadow-lg p-4 pt-2 pb-2 bg-light rounded d-flex justify-content-between gap-4 align-items-center card_dashboard_top">
              <div className="">
                <img
                  src={CategoryIcon}
                  alt="category logo"
                  style={{ height: "3rem", width: "auto" }}
                />
              </div>
              <div>
                <p className="lh-2 fs-4 text-center">
                  Category
                  <br />
                  <span className="fw-bold text-center fs-4">
                    {category.length}
                  </span>
                </p>
              </div>
            </div>

            <div className=" shadow-lg p-4 pt-2 pb-2 bg-light rounded d-flex justify-content-between gap-4 align-items-center card_dashboard_top">
              <div className="">
                <img
                  src={ProductIcon}
                  alt="category logo"
                  style={{ height: "3rem", width: "auto" }}
                />
              </div>
              <div>
                <p className="lh-2 fs-4 text-center">
                  Products
                  <br />
                  <span className="fw-bold text-center fs-4">
                    {product.length}
                  </span>
                </p>
              </div>
            </div>

            <div className=" shadow-lg p-4 pt-2 pb-2 bg-light rounded d-flex justify-content-between gap-4 align-items-center card_dashboard_top">
              <div className="">
                <img
                  src={OrderIcon}
                  alt="category logo"
                  style={{ height: "3rem", width: "auto" }}
                />
              </div>
              <div>
                <p className="lh-2 fs-4 text-center">
                  Orders
                  <br />
                  <span className="fw-bold text-center fs-4">
                    {totalOrders}
                  </span>
                </p>
              </div>
            </div>
            <div className=" shadow-lg p-4 pt-2 pb-2 bg-light rounded d-flex justify-content-between gap-4 align-items-center card_dashboard_top">
              <div className="">
                <img
                  src={ClientIcon}
                  alt="category logo"
                  style={{ height: "3rem", width: "auto" }}
                />
              </div>
              <div>
                <p className="lh-2 fs-4 text-center">
                  Clients
                  <br />
                  <span className="fw-bold text-center fs-4">
                    {clients.length}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* charts */}
        <div className="  ">
          <div className=""></div>

          <div>
            <Charts />
          </div>
        </div>

        <div className="mt-auto orderDashboard">
          <RecentOrders />
        </div>
      </UserLayout>
    </>
  );
};

export default Dashboard;
