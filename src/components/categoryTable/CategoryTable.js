import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const CategoryTable = () => {

    const {category} = useSelector(state => state.cat)

  
  return (
    <>
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
            <td>{item.status}</td>
            <td className=''><Button variant='warning' >Edit</Button></td>
          </tr>

        ))}
        
        
      </tbody>
    </Table>
      
    </>
  )
}

export default CategoryTable
