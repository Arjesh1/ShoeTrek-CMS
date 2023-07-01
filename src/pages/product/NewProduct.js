import React from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const NewProduct = () => {
  return (
    <div>

<UserLayout>

         <div className='mt-2'>
         <Link to="/product"> <Button variant='secondary' className='text-end '><i class="fa-solid fa-circle-arrow-left"></i><span className='ms-1'>Back</span></Button></Link>
         </div>

         <div className='fs-3 text-center fw-bold'>Add New Products</div>
        <hr/>

</UserLayout>
      
    </div>
  )
}

export default NewProduct
