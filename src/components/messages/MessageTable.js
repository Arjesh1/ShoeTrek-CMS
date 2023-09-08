import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setShowMessageModal } from '../../system/systemSlice'
import MessageModal from '../modal/MessageModal'

const MessageTable = () => {
  const dispatch = useDispatch()
  const [selectedMessage, setSelectedMessage] = useState({})
    const {messages} = useSelector(state => state.admin)
    const messageArray = [...messages]
    const sortedMessages = messageArray.sort((a,b) => b.date - a.date)
const handleOnClickView = (item) =>{
  setSelectedMessage(item)
 dispatch(setShowMessageModal(true))
}

  return (
    <>
<MessageModal selectedMessage={selectedMessage}/>
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
        {new Date(item.date).toLocaleString()}
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
        <Button onClick={()=>{handleOnClickView(item)}}> View</Button>
      </td>
     
      
      
     
      
    </tr>
        
    ))}
    
    
    
  </tbody>
</Table>
      
    </>
  )
}

export default MessageTable
