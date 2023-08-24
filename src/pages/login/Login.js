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
      <div className='p-5'>
      <Container>

        <Row>
          <Col md={5} className='login_side '>
          
          
          
          </Col>
          <Col md={7} className='align-self-center'>
          <Form className=" p-5 " onSubmit={handleOnSubmit}>
        
        <h2 className='text-center'>Login</h2>
        <hr/>
        
        {/* <Form.Group  md="4" controlId="validationFormikUsername">
              <Form.Label>Password</Form.Label>
              <InputGroup hasValidation>
                
                <Form.Control
                  type="text"
                  placeholder="Password"
                  aria-describedby="inputGroupPrepend"
                  name="password"
                 
                />
                <InputGroup.Text id="inputGroupPrepend"><Form.Check
            label={<i class="fa-solid fa-eye"></i>}
           /></InputGroup.Text>
                 </InputGroup>
            </Form.Group> */}


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


