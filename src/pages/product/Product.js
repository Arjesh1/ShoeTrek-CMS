import React from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { Button } from 'react-bootstrap'
import ProductTable from '../../components/product/ProductTable'

const Product = () => {
  return (
    <div>
      
      <UserLayout>
        <div className='fs-3 text-center fw-bold'>Products</div>
        <hr/>
        <div className='d-flex justify-content-end'>
          <Button className='text-end'>+ Add Products</Button>
        </div>
        
        <hr/>
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
