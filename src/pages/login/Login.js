import React, { useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import { Form } from 'react-bootstrap'
import { userLoginInput } from '../../components/assets/inputFieldList'
import { CustomInput } from '../../components/custominput/CustomInput'
import { Button } from 'bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import UserLayout from '../../components/layout/UserLayout'

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState([])

  const handleOnChange = (e)=>{
    const {name, value} = e.target
    setForm({
      ...form,
      [ name ]:value,
      
    })
  }

  const handleOnSubmit = async (e) =>{
    e.preventDefault()
      // const isUserCreated = await registerUserAction(form);
      // isUserCreated && navigate("/dashboard");

      console.log(form);
  



  return (
    <>
    <UserLayout>
      <div className='mt-3 pe-5 ps-5'>

        <h2 className='text-center'>Login</h2>
        <hr/>

        <Form className="shadow-lg p-5 " onSubmit={handleOnSubmit}>
          
          {userLoginInput.map((item, i) => (
            <CustomInput key ={i} {...item} onChange={handleOnChange} />
          ))}

          <div className='d-grid'>
            <Button type='submit'>Submit</Button>
          </div>
          
        </Form>
        </div>
        
      </UserLayout>

    </>
  )
}
}

export default Login


