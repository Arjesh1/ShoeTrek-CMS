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
<Table striped  hover responsive> 
      <thead>
        <tr className='table-secondary'>
          <th className='py-3 text-center' scope="col">#</th>
          <th className='py-3 text-center' scope="col">Name</th>
          <th className='py-3 text-center' scope="col">Status</th>
          <th className='py-3 text-center' scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {category.map((item, i )=>(
            <tr key={item}>
            <td className='text-center align-middle'>{i + 1}</td>
            <td className='text-center align-middle'>{item.name}</td>
            {item.status === "active"? (
              <td className='text-center align-middle' ><span className='bg-success-subtle p-1 pe-2 ps-2 rounded fw-semibold'>{item.status.slice(0, 1).toUpperCase() + item.status.slice(1)}</span></td>
            ):(
              <td className='text-center align-middle' ><span className='bg-danger-subtle p-1 pe-2 ps-2 rounded fw-semibold'>{item.status.slice(0, 1).toUpperCase() + item.status.slice(1)}</span></td>
            )}
            
            <td className='text-center align-middle'><Button variant='warning' onClick={()=>{handleOnEdit(item)}} >Edit</Button></td>
          </tr>

        ))}
        
        
      </tbody>
    </Table>
      
    </>
  )
}

export default CategoryTable
