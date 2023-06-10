import React, { useState } from 'react'
import UserLayout from '../../components/layout/UserLayout'
import Form from 'react-bootstrap/Form';
import { userRegisterInput } from '../../components/assets/inputFieldList';
import { CustomInput } from '../../components/custominput/CustomInput';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { registerUserAction } from './RegisterAction';
import { useNavigate } from 'react-router-dom';


const Register = () => {
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
    if (form.password !== form.confirmPassword  ){
      toast.error("Password does not should match.")
    }
    else if (form.password.length < 6) {
      toast.error("Length of password no less that 6 words.")
      
    }
    else{
      const isUserCreated = await registerUserAction(form);
      isUserCreated && navigate("/dashboard");
    }
    
  }
  
  return (
  <>

    
      <UserLayout>
      <div className='mt-3 pe-5 ps-5'>

        <h2 className='text-center'>Register Admin</h2>
        <hr/>

        <Form className="shadow-lg p-5 " onSubmit={handleOnSubmit}>
          
          {userRegisterInput.map((item, i) => (
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

export default Register
