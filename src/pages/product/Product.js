import React, { useEffect } from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { Button } from 'react-bootstrap'
import ProductTable from '../../components/product/ProductTable'
import { Link } from 'react-router-dom'

const Product = () => {

  return (
    <div>
      
      <UserLayout>
        <div className='fs-3 text-center fw-bold'>Products</div>
        <hr/>
        <div className='d-flex justify-content-end'>
         <Link to="/product/add-product"> <Button className='text-end'>+ Add Products</Button></Link>
        </div>
        <div>
        </div>

        <div className='mt-4'>
          <ProductTable/>
        </div>


       
      </UserLayout>
      
    </div>
  )
}

export default Product
