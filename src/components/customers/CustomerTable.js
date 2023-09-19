import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'

const CustomerTable = () => {

    const {clients} = useSelector(state => state.admin)

  return (
    <div>

<Table striped  hover responsive>
  <thead>
    <tr className='table-secondary'>
      <th className='py-3 text-center' scope="col">S/N</th>
      <th className='py-3 text-center' scope="col">Name</th>
      <th className='py-3 text-center' scope="col">Email</th>
      <th className='py-3 text-center' scope="col">Phone No</th>
      <th className='py-3 text-center' scope="col">Address</th>
     
      
      
    </tr>
  </thead>
  <tbody>
    {clients?.map((item,i) =>(
      <tr key={item.id}>
      <th scope="row" className='text-center align-middle'>{i + 1}</th>
      <td className='text-center align-middle'>
        {item.firstName + " " + item.lastName}
        
        
        </td>
      <td className='text-center align-middle'>{item.email}</td>
      <td className='text-center align-middle'>{item.phoneNumber}</td>
     
      
      <td className='text-center align-middle'>
      <p>
        {item.streetAddress}<br/>
        {item.city + ", " + item.region},<br/>
        {item.country + ", " + item.postalCode}
        
        </p>
      
      
      </td>
     
      
    </tr>
        
    ))}
    
    
    
  </tbody>
</Table>
      
    </div>
  )
}

export default CustomerTable
