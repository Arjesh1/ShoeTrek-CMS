import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const MessageTable = () => {
    const {messages} = useSelector(state => state.admin)
    const sortedMessages = messages.sort((a,b) => a.date - b.date).slice(0,4)
  return (
    <>

<Table striped  hover responsive>
  <thead>
    <tr className='table-secondary'>
      <th className='py-3 text-center' scope="col">S/N</th>
      <th className='py-3 text-center' scope="col">Date</th>
      <th className='py-3 text-center' scope="col">Subject</th>
      <th className='py-3 text-center' scope="col">Name</th>
      <th className='py-3 text-center' scope="col">Phone No</th>
      <th className='py-3 text-center' scope="col">Email</th>
      <th className='py-3 text-center' scope="col">Action</th>

     
      
      
    </tr>
  </thead>
  <tbody>
    {sortedMessages?.map((item,i) =>(
      <tr key={item.id}>
      <th scope="row" className='text-center align-middle'>{i + 1}</th>
      <td className='text-center align-middle'>
        {new Date(item.date).toLocaleString().slice(0,10).replace(',', '')}
        </td>
      <td className='text-center align-middle'>
        {item.subject}
        </td>
      <td className='text-center align-middle'>
        {item.fName + " " + item.lName}
        
        
        </td>
        <td className='text-center align-middle'>{item.phone}</td>
      <td className='text-center align-middle'>{item.email}</td>
      <td className='text-center align-middle'>
        <Button> View</Button>
      </td>
     
      
      
     
      
    </tr>
        
    ))}
    
    
    
  </tbody>
</Table>
      
    </>
  )
}

export default MessageTable
