import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setShowModal } from '../../system/systemSlice'
import CustomModal from '../modal/CustomModal'
import EditCategory from './EditCategory'


const CategoryTable = () => {

  const dispatch = useDispatch()
    const {category} = useSelector(state => state.cat)
    const [selectedCat, setSelectedCat] = useState({})

    const handleOnEdit = (item) =>{
      setSelectedCat(item)
      dispatch(setShowModal(true))
     
      

      

    }

  
  return (
    <>
    {selectedCat.slug && (
        <CustomModal heading="Update Category">
          <EditCategory editCat={selectedCat} />
        </CustomModal>
      )}
<Table striped bordered hover responsive> 
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {category.map((item, i )=>(
            <tr key={item}>
            <td>{i + 1}</td>
            <td>{item.name}</td>
            {item.status === "active"? (
              <td ><span className='bg-success p-1 pe-2 ps-2 rounded text-white'>{item.status.slice(0, 1).toUpperCase() + item.status.slice(1)}</span></td>
            ):(
              <td ><span className='bg-danger p-1 pe-2 ps-2 rounded text-white'>{item.status.slice(0, 1).toUpperCase() + item.status.slice(1)}</span></td>
            )}
            
            <td className=''><Button variant='warning' onClick={()=>{handleOnEdit(item)}} >Edit</Button></td>
          </tr>

        ))}
        
        
      </tbody>
    </Table>
      
    </>
  )
}

export default CategoryTable
