import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { BsTrashFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../config/firebase-config';
import { toast } from 'react-toastify';
import { getAdminsAction } from '../../pages/admin/AdminAction';
import { loginUserAction } from '../../pages/user_Redux/userAction';

const AdminTable = () => {

    const {admins} = useSelector(state => state.admin)

    
    const dispatch = useDispatch()

    const handleOnDeleteAdmin = async (uid) => {
        console.log(uid);
        if(window.confirm("Are you sure you want to delete?")) {
            try {
                console.log(uid);

                // await deleteDoc(doc(db, "admins", item.uid))
               
               
                   toast.success("User Account has been deleted")
                   dispatch(getAdminsAction());
                   dispatch(loginUserAction())
                   
               
           } catch (error) {
               toast.error("Something went wrong. Please try again later.")
               console.log(error.message);
               
           }

        }
        
            

      

       

    }

    
    
  return (
    <>
   <Table striped  hover responsive>
  <thead>
    <tr className='table-secondary'>
      <th className='py-3 text-center' scope="col">S/N</th>
      <th className='py-3 text-center' scope="col">Name</th>
      <th className='py-3 text-center' scope="col">Email</th>
      <th className='py-3 text-center' scope="col">Phone No</th>
      <th className='py-3 text-center' scope="col">Address</th>
      <th className='py-3 text-center' scope="col">Action</th>

     
      
      
    </tr>
  </thead>
  <tbody>
    {admins?.map((item,i) =>(
      <tr key={item.uid}>
      <th  scope="row" className='text-center align-middle'>{i + 1}</th>
      <td className='text-center align-middle'>
        {item.fName + " " + item.lName}
        
        
        </td>
      <td className='text-center align-middle'>{item.email}</td>
      <td className='text-center align-middle'>{item.phone}</td>
     
      
      <td className='text-center align-middle'>
        {item.address}
      </td>

      <td key={item.uid} className='text-center align-middle '>
        <div className='d-flex justify-content-center align-items-center'>
        <Button variant='transparent'  className='p-0 ' onClick={()=>{handleOnDeleteAdmin(item.uid)}}>
            <BsTrashFill className='text-danger fs-4'/>
            </Button>
        </div>
        
            </td>
     
      
    </tr>
        
    ))}
    
    
    
  </tbody>
</Table>
      
    </>
  )
}

export default AdminTable
