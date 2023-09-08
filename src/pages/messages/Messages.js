import React from 'react'
import UserLayout from '../../components/layout/UserLayout'
import MessageTable from '../../components/messages/MessageTable'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getMessagesAction } from './MessageAction'
import MessageModal from '../../components/modal/MessageModal'

const Messages = () => {
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getMessagesAction())
    })
  return (
    <>
    
    <UserLayout>
<div className='fs-3 my-3 py-1 pt-2 fw-bold'>Messages</div>

<hr/>


       <div>
        <MessageTable/>
       </div>
      </UserLayout>
      
   
      

    </>
  )
}

export default Messages
