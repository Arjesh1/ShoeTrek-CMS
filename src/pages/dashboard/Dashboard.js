import React from 'react'
import UserLayout from '../../components/layout/UserLayout'
import CategoryIcon from '../../components/assets/images/category.svg'
import ProductIcon from '../../components/assets/images/products.svg'
import OrderIcon from '../../components/assets/images/orders.svg'
import ClientIcon from '../../components/assets/images/clients.svg'
import RecentOrders from '../../components/dashboard/RecentOrders'

const Dashboard = () => {
  return (
    <>
      <UserLayout>
      
      <div className=" pt-4 pb-5">
  <div className="container_box d-flex gap-5  justify-content-around flex-wrap">

<div className=" shadow-lg p-4 pt-2 pb-2 bg-light rounded d-flex justify-content-between gap-4 align-items-center card_dashboard_top" >
  <div className="">
    <img src={CategoryIcon} alt='category logo' style={{height:"3rem", width:"auto"}}/>
  </div>
  <div>
  <p className="lh-2 fs-4 text-center">Category
              <br/>
              <span className="fw-bold text-center fs-4">$4</span>
              </p>
    </div>
   </div>

   <div className=" shadow-lg p-4 pt-2 pb-2 bg-light rounded d-flex justify-content-between gap-4 align-items-center card_dashboard_top" >
  <div className="">
  <img src={ProductIcon} alt='category logo' style={{height:"3rem", width:"auto"}}/>
    </div>
  <div>
  <p className="lh-2 fs-4 text-center">Products
              <br/>
              <span className="fw-bold text-center fs-4">$4</span>
              </p>
    </div>
   </div>

   <div className=" shadow-lg p-4 pt-2 pb-2 bg-light rounded d-flex justify-content-between gap-4 align-items-center card_dashboard_top" >
  <div className="">
  <img src={OrderIcon} alt='category logo' style={{height:"3rem", width:"auto"}}/>
    </div>
  <div>
  <p className="lh-2 fs-4 text-center">Orders
              <br/>
              <span className="fw-bold text-center fs-4">$4</span>
              </p>
    </div>
   </div>
   <div className=" shadow-lg p-4 pt-2 pb-2 bg-light rounded d-flex justify-content-between gap-4 align-items-center card_dashboard_top" >
  <div className="">
  <img src={ClientIcon} alt='category logo' style={{height:"3rem", width:"auto"}}/>
    </div>
  <div>
  <p className="lh-2 fs-4 text-center">Clients
              <br/>
              <span className="fw-bold text-center fs-4">$4</span>
              </p>
    </div>
   </div>

</div>
</div>


<div>

  <RecentOrders/>
</div>














      </UserLayout>
      
    </>
  )
}

export default Dashboard
