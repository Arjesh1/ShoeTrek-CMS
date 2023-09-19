import React, { useEffect, useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import { Button, Col, Container, Form, Image, InputGroup, Row } from 'react-bootstrap'
import { userLoginInput } from '../../components/assets/inputFieldList'
import { CustomInput } from '../../components/custominput/CustomInput'
import login from '../../components/assets/images/login.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./login.css"
import { loginUserAction } from '../user_Redux/userAction'

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form, setForm] = useState([])
  const {user} = useSelector(state => state.admin )

  useEffect(() => {
    user?.uid && navigate("/dashboard");
  }, [user.uid, navigate]);

  const handleOnChange = (e)=>{
    const {name, value} = e.target
    setForm({
      ...form,
      [ name ]:value,

      
      
    })
  }

  const handleOnSubmit = async (e) =>{
    e.preventDefault()
    
    dispatch(loginUserAction(form))

      
  }
  



  return (
    <>
    <MainLayout>
      <div className='p-5 pb-1 d-block mt-5'>
      <Container>

      <div className="d-flex justify-content-center mt-1  mb-2">
            <div className="shadow-lg px-3 py-1">
              <p className="text-xl ">
                Email: a@a.com <br/>
                Password: 123456
              </p>

              <p className="text-xl ">
                Some features like deleting and editing has been disable due to the risk of accidental data loss or misuse.
              </p>
              
                
              
            </div>
          </div>

        <Row>
          <Col md={5} className='login_side '>
          
          
          
          </Col>
          <Col md={7} className='align-self-center'>
          <Form className=" p-5 " onSubmit={handleOnSubmit}>
        
        <h2 className='text-center'>Login</h2>
        <hr/>
        
        


          {userLoginInput.map((item, i) => (
            <CustomInput key ={i} {...item} onChange={handleOnChange} />
          ))}

          <div className='d-grid'>
            <Button type='submit'>Submit</Button>


          </div>
          
        </Form></Col>
        </Row>

      
        
        
        </Container>
        </div>
        
      </MainLayout>

    </>
  )
}


export default Login


