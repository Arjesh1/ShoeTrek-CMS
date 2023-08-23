import React, { useEffect } from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { Button, Col, Row } from 'react-bootstrap'
import ProductTable from '../../components/product/ProductTable'
import { Link } from 'react-router-dom'

const Product = () => {

  return (
    <div>
      
      <UserLayout>
        <Row className='mt-1 z-2'>
          <Col> <div className='fs-3 text-end fw-bold'>Products</div></Col>
          <Col><div className='d-flex justify-content-end mt-1'>
         <Link to="/product/add-product"> <Button className='text-end'>+ Add Products</Button></Link>
        </div>
        </Col>
       
        
        </Row>
        
        <hr/>
       
        

        <div className='mt-4'>
          <ProductTable/>
        </div>


       
      </UserLayout>
      
    </div>
  )
}

export default Product
