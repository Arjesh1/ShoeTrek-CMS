import React from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const NewProduct = () => {
  return (
    <div>

<UserLayout>

         <div className='mt-2'>
         <Link to="/product"> <Button variant='secondary' className='text-end'>Back</Button></Link>
         </div>

</UserLayout>
      
    </div>
  )
}

export default NewProduct
